<template>
	<view class="login-box">
		<view class="status_bar"><!-- 这里是状态栏 --></view>
		<view class="login-img"><!-- <img src="" alt=""> --></view>
		<view class="login-info">
			<view class="login-card">
				<view class="login-card-head">
					<view class="login-card-head-item" :class="{ 'login-card-head-item-active': islc, 'login-card-head-item-login': !islc }" @click="isLoginCard(true)">登 录</view>
					<view class="login-card-head-item" :class="{ 'login-card-head-item-active': !islc, 'login-card-head-item-register': islc }" @click="isLoginCard(false)">
						注 册
					</view>
				</view>
				<view class="login-card-content login-card-login" v-if="islc">
					<view class="login-card-content-title">登录</view>
					<!-- 这里需要重新确定，因为没看设计，开始 -->
					<view class="login-form">
						<view class="login-form-title">账号</view>
						<input class="uni-input login-input" type="text" placeholder="请输入您的账号" />
					</view>
					<view class="login-form">
						<view class="login-form-title">密码</view>
						<input class="uni-input login-input" password type="text" placeholder="请输入您的密码" />
					</view>
					<view class="login-change-password" @click="changePassword">忘记密码？</view>
					<!-- 这里需要重新确定，因为没看设计，结束 -->
				</view>
				<view class="login-card-content login-card-register" v-if="!islc"><view class="login-card-content-title">注册</view></view>
			</view>
			<view class="login-btn">
				<view class="login-btn-rp" @click="isRememberUser">
					<text class="login-btn-rp-checkbox"></text>
					记住账号
				</view>
				<view class="login-btn-submit" @click="submitLogin">
					登
					<text class="login-btn-submit-space"></text>
					录
				</view>
			</view>
		</view>
		<view class="login-wx">
			<view class="login-wx-title">
				<text class="login-wx-title-line"></text>
				<text class="login-wx-title-text">第三方登录</text>
				<text class="login-wx-title-line"></text>
			</view>
			<view class="login-wx-icon" @click="wxLogin"><!-- <img src="" alt=""> --></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 是否是登录卡片
			islc: true,
			// 是否记住账号
			isru: false
		};
	},
	onLoad() {},
	methods: {
		isLoginCard(val) {
			this.islc = val;
		},
		changePassword() {
			console.log('修改密码中...');
			uni.navigateTo({
				url: '/pages/user/forget_password'
			});
		},
		isRememberUser() {
			this.isru = !this.isru;
			console.log('是否记住密码：' + this.isru);
		},
		submitLogin() {
			console.log('登录中ing...');
			// 登录后关闭所有页面跳转首页
			uni.reLaunch({
				url: '/pages/index/index'
			});
		},
		wxLogin() {
			console.log('微信登录中ing...');
		}
	}
};
</script>

<style lang="less">
@import url('../../static/style/mixin.less');

// 标准左右间隔
@width-gap: 120rpx;

.login-box {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	// 参考资料：https://uniapp.dcloud.net.cn/collocation/pages.html#style
	// uni-app提供了状态栏高度的css变量--status-bar-height
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.login-img {
		width: 100%;
		height: 300rpx;
		// border: @test-line-height solid @topic-green;
		background-color: @topic-green;
		opacity: 0.3;
		img {
			width: 100%;
			height: 100%;
		}
	}

	.login-info {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		top: -50rpx;
		.login-card {
			width: calc(100% - @width-gap);
			height: 600rpx;
			background: #ffffff;
			box-shadow: 0px 20px 37px 13px rgba(4, 192, 211, 0.1);
			border-radius: 20px;
			.login-card-head {
				width: 100%;
				height: 80rpx;
				display: flex;
				justify-content: space-between;
				.login-card-head-item {
					width: 50%;
					height: 100%;
					font-size: 32rpx;
					text-align: center;
					line-height: 80rpx;
					color: #ffffff;
					background: @topic-green;
					border-radius: 20px;
				}
				@active-top: 30rpx;
				.login-card-head-item-active {
					height: calc(100% + @active-top);
					line-height: calc(90rpx + @active-top);
					color: #343434;
					font-size: 38rpx;
					background-color: #ffffff;
					position: relative;
					top: -@active-top;
				}
				.login-card-head-item-login {
					border-radius: 20px 0px 20px 0px;
				}
				.login-card-head-item-register {
					border-radius: 0px 20px 0px 20px;
				}
			}
			.login-card-content {
				width: 100%;
				.login-card-content-title {
					width: calc(100% - @width-gap);
					margin: 39rpx auto 33rpx auto;
					line-height: 72rpx;
					font-size: 48rpx;
					color: #3e4a59;
					letter-spacing: 7rpx;
				}
			}
			.login-card-login {
				.login-form {
					width: calc(100% - @width-gap);
					margin: 0 auto;
					.login-input {
						padding: 20rpx 20rpx 20rpx 20rpx;
						border-bottom: 4rpx solid @topic-green;
					}
				}
				.login-change-password {
					width: calc(100% - @width-gap);
					margin: 0 auto;
					text-align: right;
					color: @topic-green;
				}
			}
			.login-card-register {
			}
		}
		.login-btn {
			width: calc(100% - @width-gap);
			height: 100rpx;
			margin-top: 57rpx;
			display: flex;
			justify-content: space-between;
			.login-btn-rp {
				line-height: 115rpx;
				font-size: 28rpx;
				color: #666666;
				opacity: 0.45;
				.login-btn-rp-checkbox {
					width: 25rpx;
					height: 25rpx;
					display: inline-block;
					border: 6rpx solid @topic-green;
					border-radius: 50%;
					position: relative;
					top: 7rpx;
					margin: 0 20rpx 0 40rpx;
				}
			}
			.login-btn-submit {
				width: 50%;
				height: 100rpx;
				background: @topic-green;
				box-shadow: 0px 20px 20px -5px rgba(91, 199, 151, 0.45);
				border-radius: 12px;
				text-align: center;
				line-height: 100rpx;
				color: #ffffff;
				font-size: 36rpx;
				.login-btn-submit-space {
					padding: 0 15rpx;
				}
			}
		}
	}

	.login-wx {
		margin: 60rpx auto 0 auto;
		.login-wx-title {
			width: 100%;
			.login-wx-title-line {
				width: 181rpx;
				display: inline-block;
				border-top: 3rpx solid @topic-green;
				opacity: 0.5;
			}
			.login-wx-title-text {
				font-size: 28rpx;
				color: @topic-green;
				margin: 0 20rpx;
				position: relative;
				top: 7rpx;
			}
		}
		.login-wx-icon {
			width: 90rpx;
			height: 90rpx;
			border-radius: 50%;
			border: @test-line-height solid @topic-green;
			margin: 60rpx auto 0 auto;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
