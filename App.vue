<script>
export default {
	onLaunch: function() {
		// console.log('App Launch')
		uni.setLocale('zh-Hans');
		this.$i18n.locale = 'zh-Hans';
	},
	onShow: function() {
		// console.log('App Show')
	},
	onHide: function() {
		// console.log('App Hide')
	}
};
</script>

<style>
/*这里是每个页面公共css */

/* picker按钮颜色公共样式 */
.uni-picker-container .uni-picker-action.uni-picker-action-confirm {
	color: #5bc797 !important;
}

/* radio按钮大小公共样式 */
.uni-radio-input{
	transform: scale(0.8);
}

.uni-modal .uni-modal__btn_primary{
	color: #5bc797 !important;
}
</style>
