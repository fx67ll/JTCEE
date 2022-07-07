<!-- 标准自定义标题加基础灰色背景页面结构 -->
<template>
	<view class="package-add-box">
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
				<view class="top-nav-title">包裹预报</view>
				<view class="top-nav-btn"></view>
			</view>
			<view class="top-nav-fake"></view>
			<view class="page-bg" :style="{ '--clientheight': clientHeight }"></view>
		</view>

		<view class="package-form">
			<view class="common-form-item-note">
				<view class="common-form-item-note-title package-form-item-note-title-star">
					<text class="form-must-have package-form-must-have">*</text>
					包裹简介
				</view>
				<view class="common-form-item-note-textaera package-form-item-note-textaera">
					<textarea class="form-textarea-default" placeholder="请输入包裹中物品内容简介" placeholder-class="form-input-placeholder" />
				</view>
			</view>

			<view class="common-form-item common-form-item-nosplit">
				<view class="form-item-title">
					<text class="form-must-have">*</text>
					包裹物品
				</view>
				<view class="form-item-arrow" @click="addGoods">
					<input class="uni-input form-input-default" type="text" placeholder="添加商品" placeholder-class="form-input-placeholder" disabled />
					<uni-icons class="form-item-arrow-icon form-item-common-icon" type="shop-filled" size="18" color="#A6A6A6"></uni-icons>
				</view>
			</view>

			<view class="common-goods-box">
				<view class="common-goods-item" v-for="(num, index) in goodsListData" :key="index">
					<view class="common-goods-img"><img src="/static/img/user/user-head.png" /></view>
					<view class="common-goods-content">
						<view class="common-goods-title">任天堂switch收纳包switchlite保护套ns硬包swich盒switcholed硬壳便携lite袋oled硬卡带健身环配件壳全套大</view>
						<uni-number-box class="common-goods-number" :value="0"></uni-number-box>
					</view>
				</view>
			</view>

			<view class="common-form-item">
				<view class="form-item-title">
					<text class="form-must-have">*</text>
					快递公司
				</view>
				<picker @change="bindDeliverPickerChange" :value="deliverIndex" :range="deliverData">
					<view class="form-item-arrow">
						<input
							class="uni-input form-input-default"
							type="text"
							placeholder="请选择快递公司"
							placeholder-class="form-input-placeholder"
							disabled
							v-model="deliverData[deliverIndex]"
						/>
						<uni-icons class="form-item-arrow-icon" type="right" size="18" color="#A6A6A6"></uni-icons>
					</view>
				</picker>
			</view>

			<view class="common-form-item">
				<view class="form-item-title">
					<text class="form-must-have">*</text>
					快递单号
				</view>
				<view class="form-item-arrow">
					<input class="uni-input form-input-default" type="text" placeholder="请录入快递单号" placeholder-class="form-input-placeholder" />
					<uni-icons class="form-item-arrow-icon" type="scan" size="18" color="#A6A6A6"></uni-icons>
				</view>
			</view>

			<view class="common-form-item">
				<view class="form-item-title">
					<text class="form-must-have">*</text>
					交付门店
				</view>
				<picker @change="bindDeliverShopPickerChange" :value="deliverShopIndex" :range="deliverShopData">
					<view class="form-item-arrow">
						<input
							class="uni-input form-input-default"
							type="text"
							placeholder="请选择交付门店"
							placeholder-class="form-input-placeholder"
							disabled
							v-model="deliverShopData[deliverShopIndex]"
						/>
						<uni-icons class="form-item-arrow-icon" type="right" size="18" color="#A6A6A6"></uni-icons>
					</view>
				</picker>
			</view>

			<view class="common-form-item">
				<view class="form-item-title form-item-title-long">
					<text class="form-must-have">*</text>
					是否保留快递原包装
				</view>
				<view class="form-item-arrow">
					<checkbox-group @change="packCheckChange" class="form-radio-default">
						<label class="form-radio-default-label"><checkbox value="packRadio" checked="true" color="#ffffff" /></label>
					</checkbox-group>
				</view>
			</view>

			<view class="common-form-item-note">
				<view class="common-form-item-note-title package-form-item-note-title">备注</view>
				<view class="common-form-item-note-textaera">
					<textarea class="form-textarea-default" placeholder="请输入备注信息" placeholder-class="form-input-placeholder" />
				</view>
			</view>
		</view>

		<view class="package-tip">
			<view class="package-tip-title">温馨提示：</view>
			<view class="package-tip-content">
				<text>1. 您可以直接复制购物网站中的快递单号添加到您的国内包裹中</text>
				<text>2. 保留原包装可能会增加体积和重量</text>
				<text>3. 为避免丢失，重量0.5kg以下或长宽高小于30cm的包裹，将不会拆快递原包装</text>
				<text>4. 如遇更多问题，可咨询客服人员</text>
			</view>
		</view>

		<view class="drawer-button-box-gap package-button-box-gap"></view>
		<view class="drawer-button-box package-button-box">
			<view class="drawer-button">
				<view class="drawer-button-item drawer-button-reset" @click="savePackage">保存</view>
				<view class="drawer-button-item drawer-button-submit" @click="submitpackage">提交</view>
			</view>
		</view>

		<zb-drawer mode="bottom" title="添加商品" :wrapperClosable="false" :visible.sync="isShowDrawerAddGoods" :radius="true" :height="addGoodsDrawerHeight">
			<view class="package-goods-add" @click="chooseRelativeGoods">添加已关联大数据平台商品</view>
			<view class="package-goods-add" @click="chooseNewGoods">添加新商品</view>
		</zb-drawer>
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
	data() {
		return {
			// 屏幕高度，用于自适应
			clientHeight: 'auto',
			// 状态栏高度，用于微信小程序适配
			statusBarHeight: 0,
			// 商品数据
			// goodsListData: [{}, {}, {}, {}, {}],
			goodsListData: [{}],
			// 商品弹窗
			isShowDrawerAddGoods: false,
			addGoodsDrawerHeight: '450rpx',
			// 快递公司
			deliverData: ['快递公司一', '快递公司二', '快递公司三'],
			deliverIndex: -1,
			// 交付门店
			deliverShopData: ['交付门店一', '交付门店二', '交付门店三'],
			deliverShopIndex: -1
		};
	},
	methods: {
		goBack() {
			uni.redirectTo({
				url: '/pages/index/index'
			});
		},
		addGoods() {
			this.isShowDrawerAddGoods = true;
		},
		chooseRelativeGoods() {
			uni.showToast({
				title: '您选择了添加已关联大数据平台商品！',
				icon: 'none',
				duration: 1998
			});
			this.isShowDrawerAddGoods = false;
		},
		chooseNewGoods() {
			uni.showToast({
				title: '您选择了添加新商品！',
				icon: 'none',
				duration: 1998
			});
			this.isShowDrawerAddGoods = false;
		},
		bindDeliverPickerChange(e) {
			console.log('快递公司 picker发送选择改变，携带值为', e.detail.value);
			this.deliverIndex = e.detail.value;
		},
		bindDeliverShopPickerChange(e) {
			console.log('交付门店 picker发送选择改变，携带值为', e.detail.value);
			this.deliverShopIndex = e.detail.value;
		},
		packCheckChange(e) {
			console.log('packRadio 发生 change 事件，携带值为', e.detail.value);
		},
		savePackage() {
			let self = this;
			uni.showLoading({
				title: '正在保存中',
				mask: true
			});
			setTimeout(function() {
				uni.hideLoading();
				uni.showToast({
					title: '已保存当前包裹！',
					icon: 'none',
					duration: 1998
				});
			}, 300);
		},
		submitpackage() {
			console.log('正在提交包裹预报中ing...');
			this.showTestToast(0);
		}
	}
};
</script>

<style lang="less">
@import url('@/static/style/mixin.less');

.package-add-box {
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

	.package-form {
		width: calc(100% - @base-gap * 2);
		border-radius: 20rpx;
		background-color: #ffffff;
		margin: 30rpx auto 0 auto;
	}

	.package-form-item-note-title {
		height: 100rpx;
		line-height: 110rpx;
		text-indent: 10rpx;
		font-size: 28rpx;
		color: #000000;
	}
	.package-form-item-note-title-star {
		height: 100rpx;
		line-height: 110rpx;
		font-size: 28rpx;
		color: #000000;
		.package-form-must-have {
			position: relative;
			top: 4rpx;
		}
	}
	.package-form-item-note-textaera {
		padding-bottom: 0;
	}

	.package-tip {
		width: calc(100% - @base-gap * 3);
		margin: 40rpx auto 0 auto;
		.package-tip-title {
			font-size: 32rpx;
			color: #ff5147;
		}
		.package-tip-content {
			margin: 20rpx 0 0 0;
			font-size: 28rpx;
			color: #888888;
			text {
				display: block;
				margin-top: 10rpx;
			}
		}
	}

	.package-goods-add {
		width: calc(100% - @base-gap * 4);
		height: 120rpx;
		margin: 0 auto;
		line-height: 120rpx;
		border-bottom: 1rpx solid @topic-split;
		color: #303031;
		font-size: 30rpx;
		text-indent: 10rpx;
	}
	.package-goods-add:nth-child(1) {
		margin-top: 20rpx;
	}
	.package-goods-add:nth-child(2) {
		border-bottom: 1rpx solid transparent;
	}

	@drawer-button-height: 76rpx;
	@drawer-button-bottom: 50rpx;
	.package-button-box {
		position: fixed;
	}
	.package-button-box-gap {
		width: 100%;
		height: calc(@drawer-button-height + @drawer-button-bottom);
	}
}
</style>
