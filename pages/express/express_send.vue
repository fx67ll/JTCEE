<!-- 标准自定义标题加基础灰色背景页面结构 -->
<template>
	<view class="express-box">
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
				<view class="top-nav-title">寄件</view>
				<view class="top-nav-btn"></view>
			</view>
			<view class="top-nav-fake"></view>
			<view class="page-bg" :style="{ '--clientheight': clientHeight }"></view>
		</view>

		<view class="express-address">
			<view class="express-address-item">
				<view class="express-address-item-left">
					<view class="express-address-item-font express-address-item-font-green">寄</view>
					<view class="express-address-item-info">
						<view class="express-address-item-person">
							<text class="express-address-item-person-name" v-if="1 === 1">何瑞</text>
							<text class="express-address-item-person-phone" v-if="1 === 1">18095640133</text>
							<text class="express-address-item-person-unselected" v-if="1 > 2">收件人信息</text>
						</view>
						<view class="express-address-item-address">
							<text class="express-address-item-address-selected" v-if="1 === 1">江苏南京市建邺区城区莲花新城2号半山国际2单元309室</text>
							<text class="express-address-item-address-unselected" v-if="1 > 2">新建或选择收件人姓名、电话以及详细地址</text>
						</view>
					</view>
				</view>
				<view class="express-address-item-right" @click="getExpressAddress(1)">
					<img class="express-address-item-icon" src="/static/img/express/express-get-address.png" />
					<text class="express-address-item-text">地址簿</text>
				</view>
			</view>
			<view class="express-address-item">
				<view class="express-address-item-left">
					<view class="express-address-item-font express-address-item-font-red">收</view>
					<view class="express-address-item-info">
						<view class="express-address-item-person">
							<text class="express-address-item-person-name" v-if="1 !== 1">何瑞</text>
							<text class="express-address-item-person-phone" v-if="1 !== 1">18095640133</text>
							<text class="express-address-item-person-unselected" v-if="1 < 2">收件人信息</text>
						</view>
						<view class="express-address-item-address">
							<text class="express-address-item-address-selected" v-if="1 !== 1">江苏南京市建邺区城区莲花新城2号半山国际2单元309室</text>
							<text class="express-address-item-address-unselected" v-if="1 < 2">新建或选择收件人姓名、电话以及详细地址</text>
						</view>
					</view>
				</view>
				<view class="express-address-item-right" @click="getExpressAddress(2)">
					<img class="express-address-item-icon" src="/static/img/express/express-get-address.png" />
					<text class="express-address-item-text">地址簿</text>
				</view>
			</view>
		</view>

		<view class="card-two card-two-express" :class="{ 'card-two-long': !isSingle }">
			<view class="card-two-head">
				<view class="card-two-head-item" :class="{ 'card-two-head-item-active': isSingle, 'card-two-head-item-first': !isSingle }" @click="isExpressSendSingle(true)">
					单个寄件
				</view>
				<view class="card-two-head-item" :class="{ 'card-two-head-item-active': !isSingle, 'card-two-head-item-second': isSingle }" @click="isExpressSendSingle(false)">
					批量寄件
				</view>
			</view>

			<view class="card-two-content card-two-content-express" v-if="isSingle">
				<v-tabs class="express-tab" v-model="tabCurrentIndex" :tabs="tabDataList" :scroll="false" :lineScale="0.15" @change="changeTab"></v-tabs>

				<view class="express-goods"></view>

				<view class="form-number">
					<view class="form-number-title">
						<text class="form-must-have">*</text>
						包裹重量（kg）
					</view>
					<uni-number-box :value="billExpressWeight"></uni-number-box>
				</view>

				<view class="form-volume">
					<view class="form-volume-top">
						<view class="form-volume-title">
							<text class="form-must-have">*</text>
							包裹体积（m³）
						</view>
						<!-- <view class="form-volume-count">0</view> -->
						<uni-number-box :disabled="true" :value="billExpressVolume"></uni-number-box>
					</view>
					<view class="form-volume-bottom">
						<view class="form-volume-item">
							<input class="uni-input form-volume-item-input" type="number" placeholder="长" />
							<text class="form-volume-item-text">
								CM
								<uni-icons class="form-volume-item-icon" type="closeempty" size="16" color="#313131"></uni-icons>
							</text>
						</view>
						<view class="form-volume-item">
							<input class="uni-input form-volume-item-input" type="number" placeholder="宽" />
							<text class="form-volume-item-text">
								CM
								<uni-icons class="form-volume-item-icon" type="closeempty" size="16" color="#313131"></uni-icons>
							</text>
						</view>
						<view class="form-volume-item">
							<input class="uni-input form-volume-item-input" type="number" placeholder="高" />
							<text class="form-volume-item-text">CM</text>
						</view>
					</view>
				</view>
			</view>

			<view class="card-two-content card-two-content-express" v-if="!isSingle"><view class="express-upload"></view></view>
		</view>
		
		<view class="express-service">
			<view class="common-form-item">
				<view class="form-item-title">
					保价
					<uni-icons class="form-item-title-icon" type="help" size="18" color="#A6A6A6"></uni-icons>
				</view>
				<view class="form-item-arrow">
					<input class="uni-input form-input-default" type="text" placeholder="输入保价价格" placeholder-class="form-input-placeholder"/>
					<uni-icons class="form-item-arrow-icon" type="vip-filled" size="18" color="#A6A6A6"></uni-icons>
				</view>
			</view>
			<view class="common-form-item">
				<view class="form-item-title">
					服务
				</view>
				<view class="form-item-arrow">
					<input class="uni-input form-input-default" type="text" placeholder="请选择需要的附加服务" placeholder-class="form-input-placeholder"disabled/>
					<uni-icons class="form-item-arrow-icon" type="right" size="18" color="#A6A6A6"></uni-icons>
				</view>
			</view>
		</view>

		<view class="express-deliver">
			<view class="common-form-item">
				<view class="form-item-title">
					<text class="form-must-have">*</text>
					交付方式
					<uni-icons class="form-item-title-icon" type="help" size="18" color="#A6A6A6"></uni-icons>
				</view>
				<view class="form-item-arrow">
					<input class="uni-input form-input-default" type="text" placeholder="请选择交付方式" placeholder-class="form-input-placeholder" disabled/>
					<uni-icons class="form-item-arrow-icon" type="right" size="18" color="#A6A6A6"></uni-icons>
				</view>
			</view>
			<view class="common-form-item">
				<view class="form-item-title">
					<text class="form-must-have">*</text>
					交付单号
				</view>
				<view class="form-item-arrow">
					<input class="uni-input form-input-default" type="text" placeholder="请录入单号" placeholder-class="form-input-placeholder"/>
					<uni-icons class="form-item-arrow-icon" type="scan" size="18" color="#A6A6A6"></uni-icons>
				</view>
			</view>
			<view class="common-form-item">
				<view class="form-item-title">
					<text class="form-must-have">*</text>
					交付门店
				</view>
				<view class="form-item-arrow">
					<input class="uni-input form-input-default" type="text" placeholder="请选择交付门店" placeholder-class="form-input-placeholder"disabled/>
					<uni-icons class="form-item-arrow-icon" type="right" size="18" color="#A6A6A6"></uni-icons>
				</view>
			</view>
		</view>

		<view class="express-send-bottom-gap"></view>
		<view class="express-send-bottom">
			<view class="express-send-bottom-box">
				<view class="express-send-bottom-bill">
					<view class="express-send-bottom-bill-info">
						<view class="express-send-bottom-bill-info-left">
							<text class="express-send-bottom-bill-title">预估费用</text>
							<text class="express-send-bottom-bill-unit">￥</text>
							<text class="express-send-bottom-bill-money">999999</text>
							<text class="express-send-bottom-bill-money-plus">+</text>
						</view>
						<view class="express-send-bottom-bill-info-right" @click="getExpressOrderDetail">
							<text class="express-send-bottom-bill-more">明细</text>
							<uni-icons class="express-send-bottom-bill-icon" type="info" size="15" color="#313131"></uni-icons>
						</view>
					</view>
					<view class="express-send-bottom-bill-tip">以店员实际审查后录单结果为准</view>
				</view>
				<view class="express-send-bottom-button">
					<view class="express-send-bottom-button-item express-send-bottom-button-reset" @click="saveExpressOrder">保存</view>
					<view class="express-send-bottom-button-item express-send-bottom-button-submit" @click="payExpressOrder">下单</view>
				</view>
			</view>
		</view>
		<zb-drawer mode="bottom" title="明细" :wrapperClosable="false" :visible.sync="isShowDrawerBillDetail" :radius="true" :height="billDetailDrawerHeight"></zb-drawer>
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
	onShow() {
		this.clientHeight = uni.getWindowInfo().windowHeight + 'px';
		this.statusBarHeight = uni.getWindowInfo().statusBarHeight + 'px';

		// this.showTestToast(1);
	},
	data() {
		return {
			// 屏幕高度，用于自适应
			clientHeight: 'auto',
			// 状态栏高度，用于微信小程序适配
			statusBarHeight: 0,
			// 单个寄件或批量寄件
			isSingle: true,
			// tab索引
			tabCurrentIndex: 0,
			// tab数据
			tabDataList: ['杂货', '重货', '专线'],
			// 明细弹窗
			isShowDrawerBillDetail: false,
			billDetailDrawerHeight: '35%'
		};
	},
	methods: {
		goBack() {
			uni.redirectTo({
				url: '/pages/index/index'
			});
		},
		getExpressAddress(type) {
			this.showTestToast(0);
			if (type === 1) {
				console.log('获取寄件人地址ing...');
			} else {
				console.log('获取收件人地址ing...');
			}
		},
		isExpressSendSingle(val) {
			this.isSingle = val;
		},
		changeTab(index) {
			console.log('当前选中的项：' + index);
		},
		getExpressOrderDetail() {
			this.isShowDrawerBillDetail = true;
			console.log('获取预估费用明细ing...');
		},
		saveExpressOrder() {
			this.showTestToast(0);
			console.log('保存寄件订单ing...');
		},
		payExpressOrder() {
			this.showTestToast(0);
			console.log('提交寄件订单ing...');
		}
	}
};
</script>

<style lang="less">
@import url('../../static/style/mixin.less');

@express-card-margin-top: 20rpx;

.express-box {
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
			z-index: 8;
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

	@express-address-right-width: 143rpx;
	.express-address {
		width: calc(100% - @base-gap * 2);
		border-radius: 20rpx;
		background-color: #ffffff;
		margin: @express-card-margin-top auto 0 auto;
		.express-address-item {
			width: 100%;
			min-height: 160rpx;
			padding-bottom: 20rpx;
			border-bottom: 1rpx solid @topic-split;
			display: flex;
			justify-content: space-between;
			.express-address-item-left {
				width: calc(100% - @express-address-right-width - 36rpx);
				min-height: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				@express-address-font-size: 68rpx;
				.express-address-item-font {
					width: @express-address-font-size;
					height: @express-address-font-size;
					font-size: 26rpx;
					color: #ffffff;
					text-align: center;
					line-height: calc(@express-address-font-size - 4rpx);
					border-radius: 50%;
					margin: 20rpx 25rpx 0 30rpx;
				}
				.express-address-item-font-green {
					background-color: @topic-green;
				}
				.express-address-item-font-red {
					background-color: #ff5147;
				}
				.express-address-item-info {
					width: calc(100% - @express-address-font-size - 60rpx);
					height: 100%;
					.express-address-item-person {
						font-size: 32rpx;
						color: #000000;
						margin-top: 25rpx;
						.express-address-item-person-name {
							margin-right: 40rpx;
						}
						.express-address-item-person-phone {
						}
						.express-address-item-person-unselected {
						}
					}
					.express-address-item-address {
						margin-top: 15rpx;
						font-size: 26rpx;
						.express-address-item-address-selected {
							color: #4a4a4a;
						}
						.express-address-item-address-unselected {
							color: #bfbfbf;
						}
					}
				}
			}
			.express-address-item-right {
				width: 143rpx;
				margin: 30rpx 0 15rpx 0;
				border-left: 1rpx solid @topic-split;
				.express-address-item-icon {
					width: 50rpx;
					height: 50rpx;
					display: block;
					margin: 0 auto;
					padding-top: 12rpx;
				}
				.express-address-item-text {
					display: block;
					margin: 0 auto;
					text-align: center;
					font-size: 26rpx;
					color: #313131;
					line-height: 45rpx;
				}
			}
		}
	}

	.card-two-express {
		margin: calc(@express-card-margin-top + 15rpx) auto 0 auto;

		@express-card-item-width: 40rpx;
		.card-two-content-express {
			padding: 20rpx 0 10rpx 0;
			.express-tab {
				width: calc(100% - @express-card-item-width);
				margin: 0 auto;
				border-bottom: 1rpx solid @topic-split;
			}
			.express-goods {
				width: calc(100% - @express-card-item-width);
				min-height: 240rpx;
				margin: 0 auto;
				// border-bottom: 1rpx solid @topic-split;
			}
			.express-upload {
				width: calc(100% - @express-card-item-width);
				height: 270rpx;
			}
		}
	}
	
	.express-service{
		width: calc(100% - @base-gap * 2);
		background-color: #ffffff;
		border-radius: 20rpx;
		margin: @express-card-margin-top auto 0 auto;
	}
	
	.express-deliver {
		width: calc(100% - @base-gap * 2);
		background-color: #ffffff;
		border-radius: 20rpx;
		margin: @express-card-margin-top auto 0 auto;
	}

	@express-send-bottom-height: 76rpx;
	@express-send-bottom-bottom: 50rpx;
	.express-send-bottom {
		width: 100%;
		height: calc(@express-send-bottom-height + @express-send-bottom-bottom);
		position: fixed;
		background-color: #ffffff;
		bottom: 0;
		z-index: 9;
		padding-top: 22rpx;
		.express-send-bottom-box {
			width: calc(100% - @base-gap * 2);
			height: @express-send-bottom-height;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;

			@express-send-button-witdh: 252rpx;
			.express-send-bottom-bill {
				width: calc(100% - @express-send-button-witdh);
				height: 100%;

				@express-send-info-size: 28rpx;
				@express-send-info-more-width: 130rpx;
				.express-send-bottom-bill-info {
					height: 60rpx;
					overflow: hidden;
					display: flex;
					justify-content: space-between;
					.express-send-bottom-bill-info-left {
						width: calc(100% - @express-send-info-more-width);
						.express-send-bottom-bill-title {
							font-size: @express-send-info-size;
							color: #313131;
							margin-right: 5rpx;
						}
						.express-send-bottom-bill-unit {
							font-size: 24rpx;
							color: #ff5147;
							position: relative;
							top: 2rpx;
						}
						.express-send-bottom-bill-money {
							font-size: 42rpx;
							color: #ff5147;
							position: relative;
							top: 2rpx;
						}
						.express-send-bottom-bill-money-plus {
							font-size: 12rpx;
							color: #ff5147;
							position: relative;
							top: -18rpx;
						}
					}
					.express-send-bottom-bill-info-right {
						width: @express-send-info-more-width;
						line-height: 68rpx;
						font-size: @express-send-info-size;
						color: #313131;
						.express-send-bottom-bill-more {
							margin-left: 10rpx;
						}
						.express-send-bottom-bill-icon {
							position: relative;
							top: 2rpx;
						}
					}
				}
				.express-send-bottom-bill-tip {
					font-size: 22rpx;
					color: #bfbfbf;
				}
			}
			.express-send-bottom-button {
				width: @express-send-button-witdh;
				height: 100%;
				border-radius: 70rpx;
				display: flex;
				justify-content: space-between;
				overflow: hidden;
				position: relative;
				top: 15rpx;
				.express-send-bottom-button-item {
					width: 50%;
					height: 100%;
					line-height: @express-send-bottom-height;
					text-align: center;
					color: #ffffff;
					font-size: 28rpx;
					letter-spacing: 10rpx;
					text-indent: 10rpx;
				}
				.express-send-bottom-button-reset {
					background-color: #f8bb32;
				}
				.express-send-bottom-button-submit {
					background-color: @topic-green;
				}
			}
		}
	}
	.express-send-bottom-gap {
		width: 100%;
		height: calc(@express-send-bottom-height + @express-send-bottom-bottom - 10rpx);
	}
}
</style>
