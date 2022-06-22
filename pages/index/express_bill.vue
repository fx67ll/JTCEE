<template>
	<view class="bill-box">
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
				<view class="top-nav-title">运费计算</view>
				<view class="top-nav-btn"></view>
			</view>
			<view class="top-nav-fake"></view>
			<view class="page-bg" :style="{ '--clientheight': clientHeight }"></view>
		</view>
		<view class="bill-address">
			<view class="bill-address-item">
				<view class="bill-address-item-left">
					<view class="bill-address-item-img"><img src="/static/img/index/bill-shop.png" /></view>
					<view class="bill-address-item-title">代理店</view>
				</view>
				<view class="bill-address-item-right">
					<picker @change="bindShopPickerChange" :value="billShopIndex" :range="billShopData">
						<view :class="billShopIndex == -1 ? 'bill-address-item-text-placeholder' : 'bill-address-item-text'">
							{{ billShopIndex == -1 ? '请选择' : billShopData[billShopIndex] }}
						</view>
					</picker>
					<uni-icons class="bill-address-item-icon" type="right" size="18" color="#BFBFBF"></uni-icons>
				</view>
			</view>
			<view class="bill-address-item">
				<view class="bill-address-item-left">
					<view class="bill-address-item-img"><img src="/static/img/index/bill-express.png" /></view>
					<view class="bill-address-item-title">落地配</view>
				</view>
				<view class="bill-address-item-right">
					<picker @change="bindExpressPickerChange" :value="billExpressIndex" :range="billExpressData">
						<view :class="billExpressIndex == -1 ? 'bill-address-item-text-placeholder' : 'bill-address-item-text'">
							{{ billExpressIndex == -1 ? '请选择' : billExpressData[billExpressIndex] }}
						</view>
					</picker>
					<uni-icons class="bill-address-item-icon" type="right" size="18" color="#BFBFBF"></uni-icons>
				</view>
			</view>
		</view>

		<view class="bill-count">
			<view class="form-picker">
				<view class="form-picker-title">寄件时间</view>
				<view class="form-picker-choose">
					<picker mode="date" :value="expressDate" :start="expressStartDate" :end="expressEndDate" @change="bindExpressDateChange">
						<view :class="expressDate == 1 ? 'form-picker-text-placeholder' : 'form-picker-text'">{{ expressDate == 1 ? '请选择' : expressDate }}</view>
					</picker>
					<uni-icons class="form-picker-icon" type="right" size="18" color="#BFBFBF"></uni-icons>
				</view>
			</view>
			<view class="form-number">
				<view class="form-number-title">包裹重量（kg）</view>
				<view class="form-number-count"><uni-number-box></uni-number-box></view>
			</view>
		</view>
	</view>
</template>

<script>
import uniIcons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue';
import uniNumberBox from '@/uni_modules/uni-number-box/components/uni-number-box/uni-number-box.vue';
export default {
	components: {
		uniIcons,
		uniNumberBox
	},
	onShow() {
		this.clientHeight = uni.getWindowInfo().windowHeight + 'px';
		this.statusBarHeight = uni.getWindowInfo().statusBarHeight + 'px';
	},
	data() {
		const currentDate = this.getDate({
			format: true
		});
		return {
			// 屏幕高度，用于自适应
			clientHeight: 'auto',
			// 状态栏高度，用于微信小程序适配
			statusBarHeight: 0,
			// 代理店数据
			billShopData: ['代理店一', '代理店二', '代理店三'],
			// 代理店索引
			billShopIndex: -1,
			// 落地配数据
			billExpressData: ['落地配一', '落地配二', '落地配三'],
			// 落地配索引
			billExpressIndex: -1,
			// 寄件时间
			// expressDate: currentDate,
			expressDate: 1
		};
	},
	computed: {
		expressStartDate() {
			return this.getDate('start');
		},
		expressEndDate() {
			return this.getDate('end');
		}
	},
	methods: {
		goBack() {
			uni.redirectTo({
				url: '../index/index'
			});
		},
		bindShopPickerChange: function(e) {
			console.log('代理店picker发送选择改变，携带值为', e.detail.value);
			this.billShopIndex = e.detail.value;
		},
		bindExpressPickerChange: function(e) {
			console.log('落地配picker发送选择改变，携带值为', e.detail.value);
			this.billExpressIndex = e.detail.value;
		},
		getDate(type) {
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();

			if (type === 'start') {
				year = year - 60;
			} else if (type === 'end') {
				year = year + 2;
			}
			month = month > 9 ? month : '0' + month;
			day = day > 9 ? day : '0' + day;
			return `${year}-${month}-${day}`;
		},
		bindExpressDateChange: function(e) {
			console.log('寄件时间picker发送选择改变，携带值为', e.detail.value);
			this.expressDate = e.detail.value;
		}
	}
};
</script>

<style lang="less">
@import url('../../static/style/mixin.less');

.bill-box {
	width: 100%;
	height: auto;
	background-color: @topic-bgc;
	padding-bottom: 30rpx;

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
			position: fixed;
			top: 0;
			background-color: @topic-bgc;
			z-index: -1;
		}
	}

	.bill-address {
		width: calc(100% - @base-gap * 2);
		height: 250rpx;
		background-color: #ffffff;
		margin: 25rpx auto 0 auto;
		border-radius: 20rpx;
		.bill-address-item {
			width: calc(100% - 40rpx);
			height: 50%;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.bill-address-item-left {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				.bill-address-item-img {
					width: 60rpx;
					height: 60rpx;
					margin-right: 20rpx;
					img {
						width: 100%;
						height: 100%;
					}
				}
				.bill-address-item-title {
					font-size: 32rpx;
					color: #000000;
				}
			}
			.bill-address-item-right {
				width: calc(100% - 360rpx);
				display: flex;
				justify-content: flex-end;
				align-items: center;
				.bill-address-item-text-placeholder {
					font-size: 28rpx;
					color: #bfbfbf;
					margin-right: 20rpx;
				}
				.bill-address-item-text {
					font-size: 28rpx;
					color: #000000;
					margin-right: 20rpx;
				}
				.bill-address-item-icon {
					margin-right: 20rpx;
				}
			}
		}
		.bill-address-item:nth-child(1) {
			border-bottom: 1rpx solid @topic-split;
		}
	}

	.bill-count {
		width: calc(100% - @base-gap * 2);
		height: 490rpx;
		border-radius: 20rpx;
		background-color: #ffffff;
		margin: 25rpx auto 0 auto;
	}
}
</style>
