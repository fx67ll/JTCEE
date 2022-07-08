<!-- 标准自定义标题加基础灰色背景页面结构 -->
<template>
	<view class="scan-box">
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
				<view class="top-nav-title">扫一扫</view>
				<view class="top-nav-btn"></view>
			</view>
			<view class="top-nav-fake"></view>
			<view class="page-bg" :style="{ '--clientheight': clientHeight }"></view>
		</view>

		<div id="reader" class="html5-qrcode" :style="{ '--clientheight': clientHeight }"></div>

		<!-- 页面警告消息 -->
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog
				type="error"
				mode="base"
				:title="this.$t('popup.warning.title')"
				:content="this.$t('popup.warning.content')"
				:confirmText="this.$t('popup.warning.confirmText')"
				:cancelText="this.$t('popup.warning.cancelText')"
				@confirm="confirmErrorDialog"
			></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
import uniIcons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue';
import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue';
import { Html5Qrcode } from '@/node_modules/html5-qrcode';
export default {
	components: {
		uniIcons,
		uniPopup
	},
	onShow() {
		this.clientHeight = uni.getWindowInfo().windowHeight + 'px';
		this.statusBarHeight = uni.getWindowInfo().statusBarHeight + 'px';

		this.useCamera();
	},
	onLoad(option) {
		this.scanType = option.scanType;
		if (option.scanType === '2') {
			if (option.fromType) {
				this.fromType = option.fromType;
			}
			this.addType = option.addType;
			this.useType = option.useType;
		}
	},
	data() {
		return {
			// 屏幕高度，用于自适应
			clientHeight: 'auto',
			// 状态栏高度，用于微信小程序适配
			statusBarHeight: 0,
			// 从何处进入扫码页面，1.首页 2.商品添加
			scanType: '1',
			// 当前页面用途，1.添加商品 2.修改商品
			useType: '1',
			// 上一个页面的返回类型，参考上一个页面说明
			fromType: '1',
			// 从什么地方进入的商品添加，1.寄件 2.包裹预报 3.商品管理
			addType: '1',
			// html5扫码
			html5QrCode: null,
			readerDom: null,
			scanConfig: null
		};
	},
	methods: {
		goBack() {
			let useType = this.useType;
			let fromType = this.fromType;
			let addType = this.addType;
			if (this.scanType === '1') {
				uni.redirectTo({
					url: '/pages/index/index'
				});
			} else if (this.scanType === '2') {
				uni.redirectTo({
					url: `/pages/goods/goods_add?useType=${useType}&fromType=${fromType}&addType=${addType}`
				});
			} else {
				this.$refs.popup.open();
			}
		},
		// 初始化扫码配置
		initHtml5qrCode() {
			this.html5QrCode = new Html5Qrcode('reader');
			this.readerDom = document.getElementById('reader');
			
			// this.readerDom = uni.createSelectorQuery().select('#reader');
			// this.readerDom
			// 	.boundingClientRect(data => {
			// 		console.log(data);
			// 	})
			// 	.exec();

			this.scanConfig = {
				fps: 10,
				qrbox: {
					width: '100%',
					height: this.clientHeight
				}
			};
		},
		// 使用相机
		useCamera() {
			this.initHtml5qrCode();
			this.readerDom.style.display = 'block';
			Html5Qrcode.getCameras()
				.then(devices => {
					if (devices && devices.length) {
						let cameraId = '';
						if (devices.length == 1) {
							// 前置摄像头
							cameraId = devices[0].id;
						} else {
							// 后置摄像头
							cameraId = devices[1].id;
						}
						if (cameraId) {
							this.startWithCameraId(cameraId);
						}
					} else {
						this.startWithoutCameraId();
					}
				})
				.catch(err => {
					uni.showToast({
						title: '没有获取到摄像头设备！',
						icon: 'none',
						duration: 1998
					});
				});
		},
		// 带相机ID扫描
		startWithCameraId(cameraId) {
			let self = this;
			html5QrCode
				.start(
					{
						deviceId: {
							exact: cameraId
						}
					},
					self.scanConfig,
					self.onScanSuccess,
					self.onScanFailure
				)
				.catch(error => {
					let err = JSON.stringify(error);
					uni.showModal({
						title: '扫码异常',
						content: `异常报告：${err}`,
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				});
		},
		// 不带相机ID扫描，允许传递约束来代替相机设备ID
		startWithoutCameraId() {
			let self = this;
			// environment表示后置摄像头，换成user则表示前置摄像头
			html5QrCode.start(
				{
					facingMode: 'environment'
				} || {
					facingMode: {
						exact: 'environment'
					}
				},
				self.scanConfig,
				self.onScanSuccess,
				self.onScanFailure
			);
		},
		//扫码解析成功后按照自己的需求做后续的操作
		onScanSuccess(decodedText, decodedResult) {
			let res = JSON.stringify(decodedResult);
			uni.showModal({
				title: '扫码成功',
				content: `扫码结果：${decodedText}
						  结果解析：${res}`,
				success: function(res) {
					if (res.confirm) {
						console.log('用户点击确定');
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},
		//扫码解析失败后按照自己的需求做后续的操作
		onScanFailure(error) {
			let err = JSON.stringify(error);
			uni.showModal({
				title: '扫码异常',
				content: `异常报告：${err}`,
				success: function(res) {
					if (res.confirm) {
						console.log('用户点击确定');
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		}
	}
};
</script>

<style lang="less">
@import url('@/static/style/mixin.less');

.scan-box {
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

	.html5-qrcode {
		width: 100%;
		height: var(--clientheight);
		position: fixed;
		top: 0;
	}
}
</style>
