<template>
	<view class="index-box" :style="{ '--clientHeight': clientHeight }">
		<view class="status_bar"><!-- 这里是状态栏 --></view>
		<view class="index-search">
			
		</view>
		<view class="index-swiper">
			<swiper
				class="swiper"
				circular
				:indicator-dots="indicatorDots"
				:autoplay="autoplay"
				:interval="interval"
				:duration="duration"
				indicator-color="#B0B0B0"
				indicator-active-color="#50B38C"
			>
				<swiper-item><view class="swiper-item">A</view></swiper-item>
				<swiper-item><view class="swiper-item">B</view></swiper-item>
				<swiper-item><view class="swiper-item">C</view></swiper-item>
			</swiper>
		</view>
		<view class="index-function-alpha">
			<view class="index-alpha-item">
				<view class="index-alpha-item-img"><img src="" /></view>
				<view class="index-alpha-item-text">运费计算</view>
			</view>
			<view class="index-alpha-item">
				<view class="index-alpha-item-img"><img src="" /></view>
				<view class="index-alpha-item-text">运费标准</view>
			</view>
			<view class="index-alpha-item">
				<view class="index-alpha-item-img"><img src="" /></view>
				<view class="index-alpha-item-text">网点查询</view>
			</view>
			<view class="index-alpha-item">
				<view class="index-alpha-item-img"><img src="" /></view>
				<view class="index-alpha-item-text">联络客服</view>
			</view>
		</view>
		<view class="index-notice">
			<view class="index-notice-head">
				<view class="index-notice-title">消息中心</view>
				<view class="index-notice-more">更多</view>
			</view>
			<view class="index-notice-item">
				<view class="index-notice-catagory index-notice-yellow">公告</view>
				<view class="index-notice-content">每周六寄件享免费领取100元寄件礼包，更有惊喜。您有来自<南京市>的快递已被签收，感谢您使用。</view>
			</view>
			<view class="index-notice-item">
				<view class="index-notice-catagory index-notice-red">消息</view>
				<view class="index-notice-content">每周六寄件享免费领取100元寄件礼包，更有惊喜。您有来自<南京市>的快递已被签收，感谢您使用。</view>
			</view>
		</view>
		<view class="index-function-beta">
			<view class="index-beta-item">
				<view class="index-beta-item-img"><img src="/static/img/index/use.png" /></view>
				<view class="index-beta-item-text">寄快递</view>
			</view>
			<view class="index-beta-item">
				<view class="index-beta-item-img"><img src="/static/img/index/search.png" /></view>
				<view class="index-beta-item-text">查快递</view>
			</view>
			<view class="index-beta-item">
				<view class="index-beta-item-img"><img src="/static/img/index/get.png" /></view>
				<view class="index-beta-item-text">包裹代收</view>
			</view>
			<view class="index-beta-item">
				<view class="index-beta-item-img"><img src="/static/img/index/scan.png" /></view>
				<view class="index-beta-item-text">扫一扫</view>
			</view>
		</view>
		<view class="index-gap"></view>
	</view>
</template>

<script>
export default {
	onShow() {
		console.log(document.body.clientHeight);
		if (document.body.clientHeight / document.body.clientWidth >= 2) {
			this.clientHeight = document.body.clientHeight + 'px';
		}
	},
	data() {
		return {
			// 屏幕高度，用于自适应
			clientHeight: '100%',
			// 轮播组件参数
			indicatorDots: true,
			autoplay: false,
			interval: 5000,
			duration: 500
		};
	}
};
</script>

<style lang="less">
@import url('../../static/style/mixin.less');

// 标准左右间隔
@width-gap: 60rpx;

// 标准字体大小
@font-size: 24rpx;

// 卡片空隙
@card-gap: 36rpx;

.index-box {
	width: 100%;
	height: var(--clientHeight);
	background-color: @topic-bgc;

	// 参考资料：https://uniapp.dcloud.net.cn/collocation/pages.html#style
	// uni-app提供了状态栏高度的css变量--status-bar-height
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.index-search {
		width: 100%;
		height: 88rpx;
		background-color: #ffffff;
	}

	@swiper-width: 380rpx;
	.index-swiper {
		width: calc(100% - @width-gap);
		height: @swiper-width;
		border: @test-line-width solid @topic-green;
		margin: 20rpx auto 40rpx auto;
		.swiper {
			height: 100%;
		}
		.swiper-item {
			display: block;
			height: 100%;
			line-height: calc(@swiper-width - 50rpx);
			text-align: center;
		}
	}

	.index-function-alpha {
		width: calc(100% - (@width-gap * 2));
		height: 140rpx;
		margin: 0 auto calc(@card-gap + 14rpx) auto;
		display: flex;
		justify-content: space-between;
		.index-alpha-item {
			width: 96rpx;
			height: 100%;
			.index-alpha-item-img {
				width: 100%;
				height: calc(100% - 45rpx);
				border: @test-line-width solid @topic-green;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.index-alpha-item-text {
				width: 100%;
				height: 30rpx;
				margin-top: 15rpx;
				font-size: @font-size;
				line-height: 30rpx;
				text-align: center;
				color: @topic-text;
			}
		}
	}

	.index-notice {
		width: calc(100% - @width-gap);
		height: 230rpx;
		margin: 0 auto @card-gap auto;
		background-color: #ffffff;
		border-radius: 20rpx;
		.index-notice-head {
			width: calc(100% - 40rpx);
			height: 70rpx;
			margin: 0 auto;
			border-bottom: 1rpx solid #e9e9e9;
			display: flex;
			justify-content: space-between;
			line-height: 70rpx;
			.index-notice-title {
				font-size: 30rpx;
				color: @topic-text;
			}
			.index-notice-more {
				font-size: @font-size;
				color: @topic-green;
			}
		}
		.index-notice-item {
			width: calc(100% - 40rpx);
			height: 40rpx;
			margin: 25rpx auto 0 auto;
			display: flex;
			justify-content: space-between;
			line-height: 40rpx;
			font-size: @font-size;
			.index-notice-catagory {
				width: 80rpx;
				height: 100%;
				border-radius: 6rpx;
				text-align: center;
			}
			.index-notice-yellow {
				background-color: rgba(248, 187, 50, 0.14);
				color: #f8bb32;
			}
			.index-notice-red {
				background-color: rgba(255, 81, 71, 0.12);
				color: #ff5147;
			}
			.index-notice-content {
				width: calc(100% - 105rpx);
				.text-ellipsis();
			}
		}
	}

	.index-function-beta {
		width: calc(100% - @width-gap);
		height: 410rpx;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.index-beta-item {
			width: calc(50% - 20rpx);
			height: 190rpx;
			background-color: #ffffff;
			border-radius: 20rpx;
			margin-bottom: @card-gap;
			line-height: 190rpx;
			font-size: 36rpx;
			display: flex;
			align-items: center;
			.index-beta-item-img {
				width: 80rpx;
				height: 80rpx;
				margin: 0 38rpx 0 50rpx;
				img{
					width: 100%;
					height: 100%;
					position: relative;
					top: -28rpx;
				}
			}
			.index-beta-item-text {
			}
		}
	}

	.index-gap {
		width: 100%;
		height: 150rpx;
	}
}
</style>
