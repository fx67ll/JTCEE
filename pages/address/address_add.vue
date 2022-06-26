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
			<view class="address-card-content">
				<view class="address-form-item"><input class="uni-input form-input-default" type="text" placeholder="姓名" placeholder-class="form-input-placeholder" /></view>
				<view class="address-form-item"><input class="uni-input form-input-default" type="number" placeholder="电话" placeholder-class="form-input-placeholder" /></view>
				<!-- 从这里开始继续做 -->
				<view class="address-form-item">
					<input class="uni-input form-input-default" type="text" placeholder="城市 / 区域" placeholder-class="form-input-placeholder" />
				</view>
				<view class="address-form-item"><input class="uni-input form-input-default" type="text" placeholder="邮编" placeholder-class="form-input-placeholder" /></view>
				<view class="address-form-item">
					<input class="uni-input form-input-default" type="text" placeholder="详细地址(精确到门牌号)" placeholder-class="form-input-placeholder" />
				</view>
				<!-- 到这里结束 -->
			</view>
			<!-- <view class="address-card-content" v-if="isCN"></view>
			<view class="address-card-content" v-if="!isCN"></view> -->
		</view>
		<view class="address-id">
			<view class="address-form-item">
				<!-- #ifdef H5 -->
				<input class="uni-input form-input-default" type="number" placeholder="身份证号码" placeholder-class="form-input-placeholder" />
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<input class="uni-input form-input-default" type="idcard" placeholder="身份证号码" placeholder-class="form-input-placeholder" />
				<!-- #endif -->
			</view>
			<!-- 从这里开始继续做 -->
			<view class="address-form-item address-form-item-id">
				<view class="address-form-item-id-title">上传身份证正面</view>
				<view class="address-form-item-id-import">
					<view class="address-form-item-id-import-box">
						<img class="address-form-item-id-import-img" src="/static/img/address/address-import-id.png" />
						<text class="address-form-item-id-import-text">身份证正面</text>
					</view>
					<view class="address-form-item-id-import-box">
						<img class="address-form-item-id-import-img" src="/static/img/address/address-import-id.png" />
						<text class="address-form-item-id-import-text">身份证反面</text>
					</view>
				</view>
			</view>
			<!-- 到这里结束 -->
		</view>
		<view class="address-default">
			<!-- 从这里开始继续做 -->
			<view class="address-form-item"><input class="uni-input form-input-default" type="text" placeholder="地址类别" placeholder-class="form-input-placeholder" /></view>
			<!-- 到这里结束 -->
			<view class="address-default-box">
				<view class="address-default-left">
					<view class="address-default-title">设置默认地址</view>
					<view class="address-default-tip">提示：会优先使用该地址</view>
				</view>
				<switch class="form-switch-default address-default-switch" :checked="defaultSetting" color="#5BC797" @change="defaultSwitchChange" />
			</view>
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
			padding: 20rpx 0 10rpx 0;
		}
	}

	.address-id {
		width: calc(100% - @base-gap * 2);
		margin: 20rpx auto 0 auto;
		background-color: #ffffff;
		border-radius: @card-radius;
		.address-form-item-id {
			height: 347rpx;
			.address-form-item-id-title {
				height: 120rpx;
				padding-left: 5rpx;
				font-size: 28rpx;
				// color: #888888;
				color: #313131;
				line-height: 120rpx;
			}
			.address-form-item-id-import {
				width: calc(100% - 10rpx);
				height: 227rpx;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				.address-form-item-id-import-box {
					width: calc(50% - 20rpx);
					height: 200rpx;
					border-radius: 20rpx;
					border: 1rpx solid #e9e9e9;
					.address-form-item-id-import-img {
						width: 72rpx;
						height: 72rpx;
						display: block;
						margin: 43rpx auto 0 auto;
					}
					.address-form-item-id-import-text {
						display: block;
						margin: 15rpx auto 0 auto;
						text-align: center;
						font-size: 28rpx;
						// color: #888888;
						color: #4a4a4a;
					}
				}
			}
		}
	}

	.address-form-item {
		width: calc(100% - 40rpx);
		height: 120rpx;
		margin: 0 auto;
		border-bottom: 1rpx solid @topic-split;
	}
	.address-form-item:last-child {
		border-bottom: 1rpx solid transparent;
	}

	.address-default {
		width: calc(100% - @base-gap * 2);
		background-color: #ffffff;
		border-radius: 20rpx;
		margin: 20rpx auto 0 auto;
		.address-default-box {
			height: 140rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.address-default-left {
				margin-left: 30rpx;
				.address-default-title {
					font-size: 28rpx;
					color: #000000;
				}
				.address-default-tip {
					font-size: 24rpx;
					color: #888888;
					margin-top: 10rpx;
				}
			}
			.address-default-switch {
				margin-right: 30rpx;
			}
		}
	}
}
</style>
