<template>
	<view class="address-add-box">
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
				<view class="top-nav-title">{{ useType === '1' ? '新建地址' : '修改地址' }}</view>
				<view class="top-nav-btn"></view>
			</view>
			<view class="top-nav-fake"></view>
			<view class="page-bg" :style="{ '--clientheight': clientHeight }"></view>
		</view>
		<view class="address-card" :class="{ 'address-card-long': !isCN }">
			<view class="address-card-head">
				<view class="address-card-head-item" :class="{ 'address-card-head-item-active': isCN, 'address-card-head-item-china': !isCN }" @click="isChinaAddress(true)">
					国内
				</view>
				<view class="address-card-head-item" :class="{ 'address-card-head-item-active': !isCN, 'address-card-head-item-japan': isCN }" @click="isChinaAddress(false)">
					日本
				</view>
			</view>
			<view class="address-card-content" v-if="isCN"></view>
			<view class="address-card-content" v-if="!isCN"></view>
		</view>
		<view class="address-default">
			<view class="address-default-left">
				<view class="address-default-title">
					设置默认地址
				</view>
				<view class="address-default-tip">
					提示：会优先使用该地址
				</view>
			</view>
			<switch class="express-switch-default address-default-switch" :checked="defaultSetting" color="#5BC797" @change="defaultSwitchChange" />
		</view>
		<view class="bottom-gap bottom-gap-address bottom-gap-address-default"></view>
		<view class="bottom-menu bottom-menu-address">
			<view class="bottom-menu-btn" @click="saveAddresss"><text class="bottom-menu-btn-text bottom-menu-btn-text-save">保存</text></view>
		</view>
	</view>
</template>

<script>
import uniIcons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue';
export default {
	components: {
		uniIcons
	},
	onShow() {
		this.clientHeight = uni.getWindowInfo().windowHeight + 'px';
		this.statusBarHeight = uni.getWindowInfo().statusBarHeight + 'px';
	},
	onLoad(option) {
		this.useType = option.useType;
	},
	data() {
		return {
			// 屏幕高度，用于自适应
			clientHeight: 'auto',
			// 状态栏高度，用于微信小程序适配
			statusBarHeight: 0,
			// 当前页面用途
			useType: '1',
			// 国内地址或者日本地址
			isCN: true,
			// 是否设置默认地址
			defaultSetting: false
		};
	},
	methods: {
		goBack() {
			uni.redirectTo({
				url: '/pages/address/address_index'
			});
		},
		isChinaAddress(val) {
			this.isCN = val;
		},
		defaultSwitchChange(e) {
			console.log('defaultSwitch 发生 change 事件，携带值为', e.detail.value);
		},
		saveAddresss() {
			console.log('正在保存新地址ing...');
		}
	}
};
</script>

<style lang="less">
@import url('../../static/style/mixin.less');

.address-add-box {
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
			z-index: 3;
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
	
	// 卡片圆角
	@card-radius: 15rpx;
	// 卡片激活高度差
	@active-top: 15rpx;
	.address-card {
		width: calc(100% - @base-gap * 2);
		height: 960rpx;
		margin: calc(30rpx + @active-top) auto 0 auto;
		background-color: #ffffff;
		border-radius: @card-radius;
		@card-head-height: 96rpx;
		.address-card-head {
			width: 100%;
			height: @card-head-height;
			display: flex;
			justify-content: space-between;
			.address-card-head-item {
				width: 50%;
				height: 100%;
				font-size: 28rpx;
				text-align: center;
				line-height: @card-head-height;
				color: #838383;
				background: #e9e9e9;
				border-radius: @card-radius;
				letter-spacing: 10rpx;
			}
			.address-card-head-item-active {
				height: calc(100% + @active-top);
				line-height: calc(@card-head-height + @active-top);
				color: #303031;
				font-size: 32rpx;
				background-color: #ffffff;
				position: relative;
				top: -@active-top;
			}
			.address-card-head-item-china {
				border-radius: @card-radius 0px @card-radius 0px;
			}
			.address-card-head-item-japan {
				border-radius: 0px @card-radius 0px @card-radius;
			}
		}
		.address-card-content {
			width: 100%;
			padding: 30rpx 0;
		}
	}
	
	.address-default{
		width: calc(100% - @base-gap * 2);
		height: 140rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
		margin: 30rpx auto 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.address-default-left{
			margin-left: 30rpx;
			.address-default-title{
				font-size: 28rpx;
				color: #000000;
			}
			.address-default-tip{
				font-size: 24rpx;
				color: #888888;
				margin-top: 10rpx;
			}
		}
		.address-default-switch{
			margin-right: 30rpx;
		}
	}
}
</style>
