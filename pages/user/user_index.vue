<template>
	<view class="user-box" :style="{ '--clientheight': clientHeight }">
		<!-- #ifdef APP-PLUS -->
		<view class="status_bar"><!-- 这里是状态栏，用于app端的状态栏抵消 --></view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN || H5 -->
		<view class="status-bar-wx" :style="{ '--statusbarheight': statusBarHeight }"><!-- 这里是状态栏，用于微信端的状态栏抵消 --></view>
		<!-- #endif -->
		<view class="bottom-gap"></view>
		<view class="bottom-menu">
			<view class="bottom-menu-box">
				<view class="bottom-menu-item" @click="goHome">
					<view class="bottom-menu-icon"><img src="" /></view>
					<view class="bottom-menu-text">首页</view>
				</view>
				<view class="bottom-menu-logo"><img src="" /></view>
				<view class="bottom-menu-item">
					<view class="bottom-menu-icon"><img src="" /></view>
					<view class="bottom-menu-text">我的</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 屏幕高度，用于自适应
			clientHeight: 'auto',
			// 状态栏高度，用于微信小程序适配
			statusBarHeight: 0
		};
	},
	onShow() {
		if (uni.getWindowInfo().windowHeight / uni.getWindowInfo().windowWidth >= 2) {
			this.clientHeight = uni.getWindowInfo().windowHeight + 'px';
		}
		this.statusBarHeight = uni.getWindowInfo().statusBarHeight + 'px';
	},
	methods: {
		goHome() {
			uni.navigateTo({
				url: '/pages/index/index'
			});
		}
	}
};
</script>

<style lang="less">
@import url('../../static/style/mixin.less');
.user-box {
	width: 100%;
	height: var(--clientheight);
	background-color: @topic-bgc;

	.status-bar-wx {
		height: var(--statusbarheight);
		width: 100%;
	}
}
</style>
