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
		<view class="card-two" :class="{ 'card-two-long': !isCN }">
			<view class="card-two-head">
				<view class="card-two-head-item" :class="{ 'card-two-head-item-active': isCN, 'card-two-head-item-first': !isCN }" @click="isChinaAddress(true)">
					国内
				</view>
				<view class="card-two-head-item" :class="{ 'card-two-head-item-active': !isCN, 'card-two-head-item-second': isCN }" @click="isChinaAddress(false)">
					日本
				</view>
			</view>
			<view class="card-two-content">
				<view class="common-form-item">
					<view class="form-item-title">姓名</view>
					<input class="uni-input form-input-default" type="text" placeholder="请输入姓名" placeholder-class="form-input-placeholder" />
				</view>
				<view class="common-form-item" v-if="isCN">
					<view class="form-item-title">电话</view>
					<input class="uni-input form-input-default" type="number" placeholder="请输入电话" placeholder-class="form-input-placeholder" />
				</view>
				<view class="common-form-item" v-if="!isCN">
					<view class="form-item-title">手机号码</view>
					<input class="uni-input form-input-default" type="number" placeholder="请输入手机号码" placeholder-class="form-input-placeholder" />
				</view>
				<view class="common-form-item" v-if="isCN">
					<view class="form-item-title">城市/区域</view>
					<input
						class="uni-input form-input-default"
						type="text"
						placeholder="请选择城市/区域"
						placeholder-class="form-input-placeholder"
						:disabled="true"
						:value="addressCityCN"
						@click="getAddressCityCN"
					/>
					<zb-drawer mode="bottom" title="选择城市/地区" :wrapperClosable="false" :visible.sync="isShowDrawer" :radius="true" :height="drawerHeight">
						<t-index-address @select="selectCity"></t-index-address>
					</zb-drawer>
				</view>
				<view class="common-form-item" v-if="!isCN">
					<view class="form-item-title">县市/区域</view>
					<input
						class="uni-input form-input-default"
						type="text"
						placeholder="请选择县市/区域"
						placeholder-class="form-input-placeholder"
						:disabled="true"
						:value="addressCityJP"
						@click="getAddressCityJP"
					/>
				</view>
				<view class="common-form-item">
					<view class="form-item-title">邮编</view>
					<input class="uni-input form-input-default" type="text" placeholder="请输入邮编" placeholder-class="form-input-placeholder" />
				</view>
				<view class="common-form-item-big">
					<view class="common-form-item-big-title">详细地址</view>
					<view class="common-form-item-big-textaera">
						<textarea class="form-textarea-default" placeholder="请输入详细地址（精确到门牌号）" placeholder-class="form-input-placeholder" />
					</view>
				</view>
			</view>
		</view>
		<view class="address-id">
			<view class="common-form-item">
				<view class="form-item-title">身份证号码</view>
				<!-- #ifdef H5 -->
				<input class="uni-input form-input-default" type="text" placeholder="请输入身份证号码" placeholder-class="form-input-placeholder" />
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<input class="uni-input form-input-default" type="idcard" placeholder="身份证号码" placeholder-class="form-input-placeholder" />
				<!-- #endif -->
			</view>
			<view class="common-form-item-big">
				<view class="common-form-item-big-title">上传身份证照片</view>
				<view class="common-form-item-big-import">
					<view class="common-form-item-big-import-box" @click="importIdImg(1)" v-if="idImgArrFront.length === 0">
						<img class="common-form-item-big-import-img" src="/static/img/address/address-import-id.png" />
						<text class="common-form-item-big-import-text">身份证正面</text>
					</view>
					<view class="common-form-item-big-import-box" v-if="idImgArrFront.length > 0">
						<uni-icons class="common-form-item-big-result-icon" type="trash" size="24" color="#BFBFBF" @click="deleteImportImg(1)"></uni-icons>
						<img class="common-form-item-big-result-img" :src="idImgArrFront[0]" @click="previewImportImg(1)" />
					</view>
					<view class="common-form-item-big-import-box" @click="importIdImg(2)" v-if="idImgArrBack.length === 0">
						<img class="common-form-item-big-import-img" src="/static/img/address/address-import-id.png" />
						<text class="common-form-item-big-import-text">身份证反面</text>
					</view>
					<view class="common-form-item-big-import-box" v-if="idImgArrBack.length > 0">
						<uni-icons class="common-form-item-big-result-icon" type="trash" size="24" color="#BFBFBF" @click="deleteImportImg(2)"></uni-icons>
						<img class="common-form-item-big-result-img" :src="idImgArrBack[0]" @click="previewImportImg(2)" />
					</view>
				</view>
			</view>
		</view>
		<view class="address-default">
			<view class="common-form-item">
				<text class="form-item-title">地址类别</text>
				<radio-group @change="addressRadioChange" class="form-radio-default">
					<label class="form-radio-default-label">
						<radio value="addressRadioTypeGet" checked="true" color="#5BC797" />
						收件人
					</label>
					<label class="form-radio-default-label">
						<radio value="addressRadioTypeSend" checked="false" color="#5BC797" />
						寄件人
					</label>
				</radio-group>
			</view>
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
			// 是否显示筛选框
			isShowDrawer: false,
			// 筛选框高度
			drawerHeight: '80%',
			// 中日地区
			addressCityCN: '',
			addressCityJP: '',
			// 身份证照片数组
			idImgArrFront: [],
			idImgArrBack: [],
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
		getAddressCityCN() {
			this.isShowDrawer = true;
		},
		getAddressCityJP() {
			uni.showToast({
				title: '暂无日本地区数据！',
				icon: 'none',
				duration: 1998
			});
		},
		selectCity(data) {
			console.log('当前选中的城市数据：' + JSON.stringify(data));
			this.addressCityCN = data.name;
			this.isShowDrawer = false;
		},
		importIdImg(type) {
			let self = this;

			// #ifdef H5
			uni.chooseImage({
				/** 关于count参数的官方说明
				count 值在 H5 平台的表现，基于浏览器本身的规范。目前测试的结果来看，只能限制单选/多选，并不能限制数量。
				并且，在实际的手机浏览器很少有能够支持多选的。 **/
				count: 1,
				sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有，仅支持App、微信小程序、支付宝小程序、百度小程序
				sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项
				// 成功则返回图片的本地文件路径列表 tempFilePaths
				success: function(res) {
					console.log(JSON.stringify(res.tempFilePaths[0]));
					if (type === 1) {
						self.idImgArrFront = [];
						self.idImgArrFront.push(res.tempFilePaths[0]);
						console.log('正面上传：' + self.idImgArrFront);
					} else {
						self.idImgArrBack = [];
						self.idImgArrBack.push(res.tempFilePaths[0]);
						console.log('反面上传：' + self.idImgArrBack);
					}
				},
				// 接口调用失败的回调函数，小程序、App
				fail: function(res) {
					console.log('接口调用失败:' + JSON.stringify(res));

					if (type === 1) {
						uni.showToast({
							title: '身份证正面上传功能异常，请联系管理员！',
							icon: 'none',
							duration: 5000
						});
					} else {
						uni.showToast({
							title: '身份证反面上传功能异常，请联系管理员！',
							icon: 'none',
							duration: 5000
						});
					}
				},
				// 接口调用结束的回调函数（调用成功、失败都会执行），全平台
				complete: function(res) {
					console.log('接口调用结束:' + JSON.stringify(res));
				}
			});
			// #endif

			// #ifdef MP-WEIXIN
			// #endif
		},
		deleteImportImg(type) {
			let self = this;
			uni.showModal({
				title: '提示',
				content: `确定删除身份证${type === 1 ? '正面' : '反面'}照片吗`,
				success: function(res) {
					if (res.confirm) {
						console.log('用户点击确定');
						if (type === 1) {
							self.idImgArrFront = [];
						} else {
							self.idImgArrBack = [];
						}
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},
		previewImportImg(type) {
			let self = this;
			if (type === 1) {
				uni.previewImage({
					urls: [self.idImgArrFront[0]],
					longPressActions: {
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			} else {
				uni.previewImage({
					urls: [self.idImgArrBack[0]],
					longPressActions: {
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			}
		},
		addressRadioChange(e) {
			console.log('addressRadio 发生 change 事件，携带值为', e.detail.value);
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
@import url('@/static/style/mixin.less');

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

	.address-id {
		width: calc(100% - @base-gap * 2);
		margin: 20rpx auto 0 auto;
		background-color: #ffffff;
		border-radius: 20rpx;
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
