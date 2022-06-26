<template>
	<view class="invoice-box">
		<view class="common-box">
			<!-- #ifdef APP-PLUS -->
			<view class="status_bar"><!-- 这里是状态栏，用于app端的状态栏抵消 --></view>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN || H5 -->
			<view class="status-bar-wx" :style="{ '--statusbarheight': statusBarHeight }"><!-- 这里是状态栏，用于微信端的状态栏抵消 --></view>
			<view class="status-bar-wx-fake" :style="{ '--statusbarheight': statusBarHeight }"><!-- 这里是状态栏，用于微信端的状态栏占位 --></view>
			<!-- #endif -->
			<view class="top-nav" :style="{ '--statusbarheight': statusBarHeight }">
				<view class="top-nav-back"><uni-icons class="top-nav-back-icon" type="back" size="24" color="#242424" @click="goBack"></uni-icons></view>
				<view class="top-nav-title">运单管理</view>
				<view class="top-nav-btn"></view>
			</view>
			<view class="top-nav-fake top-nav-fake-high"></view>
			<view class="page-bg" :style="{ '--clientheight': clientHeight }"></view>

			<!-- 搜索栏 -->
			<!-- #ifdef H5 -->
			<view class="top-nav-search">
				<view class="nav-search-box-invoice">
					<view class="nav-search-box">
						<uni-icons class="nav-search-icon" type="search" size="23" color="#A0A0A0"></uni-icons>
						<input class="uni-input nav-search-input" confirm-type="search" placeholder="请输入关键词搜索" placeholder-class="nav-input-placeholder" />
					</view>
					<view class="nav-search-filter" @click="showFilter">
						<text class="nav-search-filter-text">筛选</text>
						<uni-icons class="nav-search-filter-icon" type="vip" size="16" color="#313131"></uni-icons>
					</view>
				</view>
			</view>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<view class="top-nav-search top-nav-search-wx" :style="{ '--topnavsearchtop': topNavSearchTop }">
				<view class="nav-search-box-invoice">
					<view class="nav-search-box">
						<uni-icons class="nav-search-icon" type="search" size="23" color="#A0A0A0"></uni-icons>
						<input class="uni-input nav-search-input" confirm-type="search" placeholder="请输入关键词搜索" placeholder-class="nav-input-placeholder" />
					</view>
					<view class="nav-search-filter" @click="showFilter">
						<text class="nav-search-filter-text">筛选</text>
						<uni-icons class="nav-search-filter-icon" type="vip" size="16" color="#313131"></uni-icons>
					</view>
				</view>
			</view>
			<!-- #endif -->

			<!-- tab栏 -->
			<!-- #ifdef H5 -->
			<view class="top-nav-tab">
				<v-tabs class="nav-tab-box nav-tab-box-four" v-model="tabCurrentIndex" :tabs="tabDataList" :scroll="false" :lineScale="0.3" @change="changeTab"></v-tabs>
			</view>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<view class="top-nav-tab top-nav-tab-wx" :style="{ '--topnavtabtop': topNavTabTop }">
				<v-tabs class="nav-tab-box nav-tab-box-four" v-model="tabCurrentIndex" :tabs="tabDataList" :scroll="false" :lineScale="0.3" @change="changeTab"></v-tabs>
			</view>
			<!-- #endif -->
		</view>
		<zb-drawer mode="bottom" title="筛选" :wrapperClosable="false" :visible.sync="isShowDrawer" :radius="true" :height="drawerHeight">
			<view class="drawer-item-box">
				<view class="drawer-item">
					<view class="drawer-item-title">运单状态</view>
					<view class="drawer-item-btn">
						<view class="drawer-item-btn-type" :class="{ 'drawer-item-btn-type-active': btnType === 0 }" @click="setBtnType(0)">全部</view>
						<view class="drawer-item-btn-type" :class="{ 'drawer-item-btn-type-active': btnType === 1 }" @click="setBtnType(1)">已签收</view>
						<view class="drawer-item-btn-type" :class="{ 'drawer-item-btn-type-active': btnType === 2 }" @click="setBtnType(2)">拒收</view>
						<view class="drawer-item-btn-type" :class="{ 'drawer-item-btn-type-active': btnType === 3 }" @click="setBtnType(3)">超时未签收</view>
						<view class="drawer-item-btn-type" :class="{ 'drawer-item-btn-type-active': btnType === 4 }" @click="setBtnType(4)">滞留</view>
					</view>
				</view>
				<view class="drawer-item">
					<view class="drawer-item-title">运单日期</view>
					<view class="drawer-item-btn">
						<view class="drawer-item-btn-date">
							<uni-icons class="drawer-item-btn-date-icon" type="calendar" size="20" color="#5BC797"></uni-icons>
							<text class="drawer-item-btn-date-text">{{ drawerDate }}</text>
						</view>
						<picker-view :indicator-style="pickerViewIndicatorStyle" :value="pickerViewValue" @change="chooseInvoiceDateChange">
							<picker-view-column>
								<view class="picker-view-item" v-for="(item, index) in pickerViewYears" :key="index">{{ item }}年</view>
							</picker-view-column>
							<picker-view-column>
								<view class="picker-view-item" v-for="(item, index) in pickerViewMonths" :key="index">{{ item }}月</view>
							</picker-view-column>
						</picker-view>
					</view>
				</view>
			</view>
			<view class="drawer-button-box-gap"></view>
			<view class="drawer-button-box">
				<view class="drawer-button">
					<view class="drawer-button-item drawer-button-reset" @click="resetFilter">重置</view>
					<view class="drawer-button-item drawer-button-submit" @click="submitFilter">确定</view>
				</view>
			</view>
		</zb-drawer>
		<view class="pull-index"><view class="pull-item" v-for="(num, index) in listData" :key="index"></view></view>
		<view class="uni-loadmore common-loadmore" v-if="showLoadMore">{{ loadMoreText }}</view>
		<!-- 页面警告消息 -->
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog
				type="error"
				mode="base"
				title="系统警告"
				content="出现未知错误，请联系管理员！"
				confirmText="返回首页"
				cancelText="取消"
				@confirm="confirmErrorDialog"
			></uni-popup-dialog>
		</uni-popup>
	</view>
</template>
<script>
import uniIcons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue';
import vTabs from '@/uni_modules/v-tabs/v-tabs.vue';
import { dataYears, dataMonths, pickerViewMonth } from '@/static/utils/uni-date-picker.js';
import pxToRpx from '@/static/utils/px-to-rpx.js';
import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue';
export default {
	components: {
		uniIcons,
		vTabs,
		uniPopup
	},
	data() {
		return {
			// 屏幕高度，用于自适应
			clientHeight: 'auto',
			// 状态栏高度，用于微信小程序适配
			statusBarHeight: 0,
			// 适配微信的searchbox和tabbox
			topNavSearchTop: 0,
			topNavTabTop: 0,
			// 首页或者我的进入
			fromType: '1',
			// 下拉刷新上拉加载相关数据
			listData: [],
			loadMoreText: this.$t('pull.refresh.loading'),
			showLoadMore: false,
			maxDataIndex: 0,
			// tab索引
			tabCurrentIndex: 0,
			// tab数据
			tabDataList: ['待支付', '进行中', '已完成', '问题件'],
			// 是否显示筛选框
			isShowDrawer: false,
			// 筛选框高度
			drawerHeight: '80%',
			// 筛选框日期数据
			drawerDate: '',
			// 运单状态筛选按钮激活类型
			btnType: 0,
			// 运单日期筛选picker-view数据
			pickerViewYears: dataYears,
			pickerViewMonths: dataMonths,
			pickerViewValue: [9999, pickerViewMonth - 1],
			pickerViewIndicatorStyle: 'height: 100rpx;'
		};
	},
	onShow() {
		this.clientHeight = uni.getWindowInfo().windowHeight + 'px';
		this.statusBarHeight = uni.getWindowInfo().statusBarHeight + 'px';
		this.topNavSearchTop = pxToRpx(uni.getWindowInfo().statusBarHeight) + 88 + 'rpx';
		this.topNavTabTop = pxToRpx(uni.getWindowInfo().statusBarHeight) + 166 + 'rpx';
		
		this.drawerDate = this.pickerViewYears[pickerVal[0]] + '-' + this.pickerViewMonths[pickerVal[1]];
		
		uni.showToast({
			title: '页面开发中，敬请期待！',
			icon: 'none',
			duration: 5000
		});
	},
	onLoad(option) {
		this.fromType = option.fromType;
		this.initData();
	},
	onUnload() {
		(this.maxDataIndex = 0), (this.listData = []), (this.loadMoreText = '加载更多'), (this.showLoadMore = false);
	},
	onReachBottom() {
		console.log('正在执行 `onReachBottom` 事件ing...');
		if (this.maxDataIndex > 19) {
			this.loadMoreText = this.$t('pull.refresh.nomore');
			return;
		}
		this.showLoadMore = true;
		setTimeout(() => {
			this.setListData();
		}, 300);
	},
	onPullDownRefresh() {
		console.log('正在执行 `onPullDownRefresh` 事件ing...');
		this.initData();
	},
	methods: {
		goBack() {
			if (this.fromType === '1') {
				uni.redirectTo({
					url: '/pages/index/index'
				});
			} else if (this.fromType === '2') {
				uni.redirectTo({
					url: '/pages/user/user_index'
				});
			} else {
				this.$refs.popup.open();
			}
		},
		confirmErrorDialog() {
			uni.reLaunch({
				url: '/pages/index/index'
			})
		},
		initData() {
			setTimeout(() => {
				this.maxDataIndex = 0;
				this.listData = [];
				let data = [];
				this.maxDataIndex += 5;
				for (var i = this.maxDataIndex - 4; i < this.maxDataIndex + 1; i++) {
					data.push(i);
				}
				this.listData = this.listData.concat(data);
				uni.stopPullDownRefresh();
			}, 300);
		},
		setListData() {
			let data = [];
			this.maxDataIndex += 5;
			for (var i = this.maxDataIndex - 4; i < this.maxDataIndex + 1; i++) {
				data.push(i);
			}
			this.listData = this.listData.concat(data);
		},
		changeTab(index) {
			console.log('当前选中的项：' + index);
		},
		showFilter() {
			this.isShowDrawer = true;
		},
		setBtnType(val) {
			if (this.btnType === val) {
				this.btnType = -1;
			} else {
				this.btnType = val;
			}
		},
		chooseInvoiceDateChange(e) {
			let pickerVal = e.detail.value;
			this.drawerDate = this.pickerViewYears[pickerVal[0]] + '-' + this.pickerViewMonths[pickerVal[1]];
		},
		resetFilter() {
			this.btnType = 0;
			this.pickerViewValue = [9999, pickerViewMonth - 1];
		},
		submitFilter() {
			this.isShowDrawer = false;
		}
	}
};
</script>

<style lang="less">
@import url('../../static/style/mixin.less');

.invoice-box {
	width: 100%;
	height: auto;
	background-color: @topic-bgc;
	padding-bottom: @base-bottom-gap;

	.common-box {
		// 这里是状态栏，用于微信端的状态栏抵消
		.status-bar-wx {
			height: var(--statusbarheight);
			width: 100%;
			background-color: #ffffff;
			position: fixed;
			top: 0;
			z-index: 9;
		}
		.status-bar-wx-fake {
			height: var(--statusbarheight);
			width: 100%;
		}

		.top-nav {
			top: var(--statusbarheight);
		}

		.top-nav-search-wx {
			top: var(--topnavsearchtop);
		}
		.top-nav-tab-wx {
			top: var(--topnavtabtop);
		}

		// 这里是为了保证页面没有撑开也能有灰色的背景
		.page-bg {
			width: 100%;
			height: var(--clientheight);
			position: absolute;
			top: 0;
			background-color: @topic-bgc;
			z-index: -1;
		}
	}

	.pull-index {
		width: calc(100% - @base-gap * 2);
		margin: 0 auto;
		.pull-item {
			width: 100%;
			background-color: #ffffff;
			border-radius: 20rpx;
			margin-top: 25rpx;
		}
	}
}
</style>
