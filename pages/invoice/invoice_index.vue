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
			<view class="top-nav-search">
				<view class="nav-search-box">
					<text class="nav-search-icon"><uni-icons type="search" size="23" color="#A0A0A0"></uni-icons></text>
					<input class="uni-input nav-search-input" confirm-type="search" placeholder="请输入关键词搜索" placeholder-class="nav-input-placeholder" />
				</view>
			</view>
			<view class="top-nav-tab"><v-tabs class="nav-tab-box nav-tab-box-four" v-model="tabCurrentIndex" :tabs="tabDataList" :scroll="false" :lineScale="0.3" @change="changeTab"></v-tabs></view>
		</view>
		<view class="pull-index"><view class="pull-item" v-for="(num, index) in listData" :key="index"></view></view>
		<view class="uni-loadmore common-loadmore" v-if="showLoadMore">{{ loadMoreText }}</view>
	</view>
</template>
<script>
import uniIcons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue';
import vTabs from '@/uni_modules/v-tabs/v-tabs.vue';
export default {
	components: {
		uniIcons,
		vTabs
	},
	data() {
		return {
			// 屏幕高度，用于自适应
			clientHeight: 'auto',
			// 状态栏高度，用于微信小程序适配
			statusBarHeight: 0,
			// 下拉刷新上拉加载相关数据
			listData: [],
			loadMoreText: '加载中...',
			showLoadMore: false,
			maxDataIndex: 0,
			// tab索引
			tabCurrentIndex: 0,
			// tab数据
			tabDataList: ['待支付', '进行中', '已完成', '问题件'],
		};
	},
	onShow() {
		this.clientHeight = uni.getWindowInfo().windowHeight + 'px';
		this.statusBarHeight = uni.getWindowInfo().statusBarHeight + 'px';
	},
	onLoad() {
		this.initData();
	},
	onUnload() {
		(this.maxDataIndex = 0), (this.listData = []), (this.loadMoreText = '加载更多'), (this.showLoadMore = false);
	},
	onReachBottom() {
		console.log('正在执行 `onReachBottom` 事件ing...');
		if (this.maxDataIndex > 19) {
			this.loadMoreText = '没有更多数据了!';
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
			uni.redirectTo({
				url: '/pages/user/user_index'
			});
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
		}
		.status-bar-wx-fake {
			height: var(--statusbarheight);
			width: 100%;
		}
		.top-nav {
			top: var(--statusbarheight);
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
