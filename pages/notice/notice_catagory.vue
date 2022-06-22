<template>
	<view class="notice-box" :style="{ '--clientHeight': clientHeight }">
		<view class="status_bar"><!-- 这里是状态栏 --></view>
		<view class="top-nav">
			<view class="top-nav-back"><img src="" @click="goBack" /></view>
			<view class="top-nav-title">通知</view>
			<view class="top-nav-btn" @click="readAll">全部已读</view>
		</view>
		<view class="top-nav-fake"></view>
		<view class="notice-catagory">
			<view class="notice-item" @click="goNoticeList(0)">
				<view class="notice-item-left"><img src="/static/img/notice/notice_express.png" /></view>
				<view class="notice-item-right">
					<view class="notice-item-right-top">
						<view class="notice-item-right-title">快递消息</view>
						<view class="notice-item-right-date">2022-06-18</view>
					</view>
					<view class="notice-item-right-content">每周六寄件享免费领取100元寄件礼包，更有惊喜。您有来自<南京市>的快递已被签收，感谢您使用。</view>
				</view>
			</view>
			<view class="notice-item" @click="goNoticeList(1)">
				<view class="notice-item-left"><img src="/static/img/notice/notice_office.png" /></view>
				<view class="notice-item-right">
					<view class="notice-item-right-top">
						<view class="notice-item-right-title">公告</view>
						<view class="notice-item-right-date">2022-06-12</view>
					</view>
					<view class="notice-item-right-content">每周六寄件享免费领取100元寄件礼包，更有惊喜。您有来自<南京市>的快递已被签收，感谢您使用。</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	onShow() {
		if (document.body.clientHeight / document.body.clientWidth >= 2) {
			this.clientHeight = document.body.clientHeight + 'px';
		}
	},
	data() {
		return {
			// 屏幕高度，用于自适应
			clientHeight: 'auto',
			isShow: false
		};
	},
	methods: {
		goBack() {
			uni.navigateTo({
				url: '../index/index'
			});
		},
		readAll() {
			console.log('全部已读ing...');
		},
		goNoticeList(type) {
			uni.navigateTo({
				url: `./notice_index?noticeType=${type}`
			});
		}
	}
};
</script>

<style lang="less">
@import url('../../static/style/mixin.less');

.notice-box {
	width: 100%;
	height: var(--clientHeight);
	background-color: @topic-bgc;

	.notice-catagory {
		width: calc(100% - @base-gap * 2);
		margin: 0 auto;
		.notice-item {
			width: 100%;
			height: 150rpx;
			background-color: #ffffff;
			border-radius: 10rpx;
			margin-top: 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.notice-item-left {
				width: 88rpx;
				height: 88rpx;
				margin-left: 22rpx;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.notice-item-right {
				width: calc(100% - 164rpx);
				height: 88rpx;
				margin-right: 24rpx;
				.notice-item-right-top {
					width: 100%;
					height: 50%;
					display: flex;
					justify-content: space-between;
					.notice-item-right-title {
						font-size: 32rpx;
						color: #313131;
						line-height: 44rpx;
					}
					.notice-item-right-date {
						font-size: 24rpx;
						color: #838383;
						line-height: 48rpx;
					}
				}
				.notice-item-right-content {
					width: 100%;
					height: 50%;
					font-size: 26rpx;
					color: #bfbfbf;
					line-height: 54rpx;
					.text-ellipsis();
				}
			}
		}
	}
}
</style>
