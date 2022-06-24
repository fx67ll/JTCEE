<template>
	<view class="user-box">
		<view class="page-bg" :style="{ '--clientheight': clientHeight }"></view>
		<view class="user-info">
			<!-- #ifndef MP-WEIXIN -->
			<view class="user-info-setting"><img src="/static/img/user/user-setting.png" /></view>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<view class="user-info-setting user-info-setting-wx"><img src="/static/img/user/user-setting.png" /></view>
			<!-- #endif -->
			<view class="user-info-content">
				<view class="user-info-head"><img src="/static/img/user/user-head.png" /></view>
				<view class="user-info-text">
					<view class="user-info-text-name">神鹰快递</view>
					<view class="user-info-text-mail">sykd@gmail.com</view>
				</view>
			</view>
		</view>
		<view class="user-card">
			<view class="user-card-box">
				<view class="user-card-item">
					<view class="user-card-item-img"><img src="/static/img/user/user-express-use.png" /></view>
					<!-- 这里后期用js动态处理一下，超过九位数显示999999999+ -->
					<view class="user-card-item-num"><text class="user-card-item-num-text">1998</text></view>
					<view class="user-card-item-text">{{ $t('user_index.express.use') }}</view>
				</view>
				<view class="user-card-item">
					<view class="user-card-item-img"><img src="/static/img/user/user-express-get.png" /></view>
					<!-- 这里后期用js动态处理一下，超过九位数显示999999999+ -->
					<view class="user-card-item-num"><text class="user-card-item-num-text">23</text></view>
					<view class="user-card-item-text">{{ $t('user_index.express.get') }}</view>
				</view>
				<view class="user-card-item">
					<view class="user-card-item-img"><img src="/static/img/user/user-express-money.png" /></view>
					<!-- 这里后期用js动态处理一下，超过九位数显示999999999+ -->
					<view class="user-card-item-num">
						<text class="user-card-item-num-text">999999999</text>
						<text class="user-card-item-num-plus">+</text>
					</view>
					<view class="user-card-item-text">{{ $t('user_index.express.money') }}</view>
				</view>
			</view>
		</view>
		<view class="user-manager">
			<view class="user-manager-item">
				<view class="user-manager-title">
					<view class="user-manager-title-img"><img src="/static/img/user/user-express.png" /></view>
					<text class="user-manager-title-text">{{ $t('user_index.manager.express') }}</text>
				</view>
				<view class="user-manager-icon"><uni-icons type="right" size="16" color="#BFBFBF"></uni-icons></view>
			</view>
			<view class="user-manager-item">
				<view class="user-manager-title">
					<view class="user-manager-title-img"><img src="/static/img/user/user-goods.png" /></view>
					<text class="user-manager-title-text">{{ $t('user_index.manager.goods') }}</text>
				</view>
				<view class="user-manager-icon"><uni-icons type="right" size="16" color="#BFBFBF"></uni-icons></view>
			</view>
			<view class="user-manager-item">
				<view class="user-manager-title">
					<view class="user-manager-title-img"><img src="/static/img/user/user-address.png" /></view>
					<text class="user-manager-title-text">{{ $t('user_index.manager.address') }}</text>
				</view>
				<view class="user-manager-icon"><uni-icons type="right" size="16" color="#BFBFBF"></uni-icons></view>
			</view>
			<view class="user-manager-item">
				<view class="user-manager-title">
					<view class="user-manager-title-img"><img src="/static/img/user/user-notice.png" /></view>
					<text class="user-manager-title-text">{{ $t('user_index.manager.notice') }}</text>
				</view>
				<view class="user-manager-icon">
					<text class="user-manager-icon-text">99</text>
					<text class="user-manager-icon-plus">+</text>
					<uni-icons type="right" size="16" color="#BFBFBF"></uni-icons>
				</view>
			</view>
		</view>
		<view class="user-chart">
			<view class="user-chart-title">
				<text class="user-chart-title-text">{{ $t('user_index.chart.title') }}</text>
				<picker mode="multiSelector" @columnchange="chooseChartDate" :value="chartIndex" :range="chartArray">
					<view class="user-chart-title-choose">
						<view class="user-chart-title-date">{{ chartArray[0][chartIndex[0]] + '-' + chartArray[1][chartIndex[1]] }}</view>
						<uni-icons class="user-chart-title-icon" type="bottom" size="14" color="#838383"></uni-icons>
					</view>
				</picker>
			</view>
			<view class="user-chart-box"></view>
		</view>
		<!-- 由于card做了偏移，底部不需要这么高的元素来垫了 -->
		<view class="bottom-gap bottom-gap-offset"></view>
		<view class="bottom-menu">
			<view class="bottom-menu-box">
				<view class="bottom-menu-item" @click="goHome">
					<view class="bottom-menu-icon"><img src="" /></view>
					<view class="bottom-menu-text">{{ $t('bottom_menu.home') }}</view>
				</view>
				<view class="bottom-menu-logo"><img src="" /></view>
				<view class="bottom-menu-item">
					<view class="bottom-menu-icon"><img src="" /></view>
					<view class="bottom-menu-text">{{ $t('bottom_menu.user') }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { dateArray, dateIndex } from '@/static/utils/uni-date-picker.js';
export default {
	data() {
		return {
			// 屏幕高度，用于自适应
			clientHeight: 'auto',
			// 状态栏高度，用于微信小程序适配
			statusBarHeight: 0,
			chartArray: dateArray,
			chartIndex: dateIndex
		};
	},
	onShow() {
		this.clientHeight = uni.getWindowInfo().windowHeight + 'px';
		this.statusBarHeight = uni.getWindowInfo().statusBarHeight + 'px';
		console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
	},
	methods: {
		goHome() {
			uni.navigateTo({
				url: '/pages/index/index'
			});
		},
		chooseChartDate(e) {
			console.log('修改的列为：' + e.detail.column + '，值为：' + e.detail.value);
			this.chartIndex[e.detail.column] = e.detail.value;
			this.$forceUpdate();
		}
	}
};
</script>

<style lang="less">
@import url('../../static/style/mixin.less');

@offset-top: -80rpx;

.user-box {
	width: 100%;
	background-color: @topic-bgc;

	// 这里是为了保证页面没有撑开也能有灰色的背景
	.page-bg {
		width: 100%;
		height: var(--clientheight);
		position: fixed;
		top: 0;
		background-color: @topic-bgc;
		z-index: -1;
	}

	.user-info {
		width: 100%;
		height: 420rpx;
		background-color: @topic-green;

		@setting-size: 40rpx;
		.user-info-setting {
			width: calc(100% - @base-gap * 2);
			height: @setting-size;
			margin: 0 auto;
			display: flex;
			justify-content: flex-end;
			img {
				width: @setting-size;
				height: 100%;
				position: relative;
				top: 68rpx;
				right: 20rpx;
			}
		}
		.user-info-setting-wx {
			img {
				top: calc(152rpx + @setting-size);
			}
		}
		.user-info-content {
			width: calc(100% - @base-gap * 2);
			height: 130rpx;
			margin: calc(152rpx - @setting-size) auto 0 auto;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			.user-info-head {
				width: 140rpx;
				height: 140rpx;
				position: relative;
				top: 10rpx;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.user-info-text {
				color: #ffffff;
				margin-left: 17rpx;
				.user-info-text-name {
					font-size: 30rpx;
				}
				.user-info-text-mail {
					font-size: 26rpx;
					margin-top: 19rpx;
				}
			}
		}
	}

	.user-card {
		width: calc(100% - @base-gap * 2);
		height: 220rpx;
		background: #ffffff;
		box-shadow: 0px 10px 20px 1px rgba(164, 164, 164, 0.2);
		border-radius: 20rpx;
		margin: 0 auto;
		position: relative;
		top: @offset-top;
		z-index: 2;
		.user-card-box {
			width: 85%;
			height: 100%;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.user-card-item {
				width: 33%;
				height: 100%;
				text-align: center;
				.user-card-item-img {
					width: 88rpx;
					height: 88rpx;
					margin: 23rpx auto 10rpx auto;
					img {
						width: 100%;
						height: 100%;
					}
				}
				.user-card-item-num {
					color: #f8bb32;
					.user-card-item-num-text {
						font-size: 36rpx;
					}
					.user-card-item-num-plus {
						font-size: 26rpx;
						position: relative;
						top: -18rpx;
					}
				}
				.user-card-item-text {
					font-size: 26rpx;
					color: #303031;
				}
			}
		}
	}

	.user-manager {
		width: calc(100% - @base-gap * 2);
		margin: 0 auto 30rpx auto;
		padding: 20rpx 0 10rpx 0;
		background-color: #ffffff;
		border-radius: 20rpx;
		position: relative;
		top: @offset-top;
		z-index: 1;
		.user-manager-item {
			width: calc(100% - 40rpx);
			height: 120rpx;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.user-manager-title {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				.user-manager-title-img {
					width: 45rpx;
					height: 45rpx;
					img {
						width: 100%;
						height: 100%;
					}
				}
				.user-manager-title-text {
					font-size: 30rpx;
					color: #303031;
					margin-left: 20rpx;
					line-height: 120rpx;
				}
			}
			.user-manager-icon {
				color: #ed4740;
				.user-manager-icon-text {
					font-size: 28rpx;
				}
				.user-manager-icon-plus {
					font-size: 20rpx;
					position: relative;
					top: -15rpx;
					margin-right: 8rpx;
				}
			}
		}
	}

	.user-chart {
		width: calc(100% - @base-gap * 2);
		margin: 0 auto 20rpx auto;
		background-color: #ffffff;
		border-radius: 20rpx;
		position: relative;
		top: @offset-top;
		.user-chart-title {
			width: 100%;
			height: 120rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.user-chart-title-text {
				font-size: 30rpx;
				color: #313131;
				margin-left: 40rpx;
				position: relative;
				top: -5rpx;
			}
			.user-chart-title-choose {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.user-chart-title-date {
					font-size: 24rpx;
					color: #838383;
					margin-right: 5rpx;
				}
				.user-chart-title-icon {
					margin-right: 25rpx;
					position: relative;
					top: 3rpx;
				}
			}
		}
		.user-chart-box {
			width: 100%;
			height: 480rpx;
		}
	}
}
</style>
