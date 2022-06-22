<template>
	<view>
		<!-- <zb-drawer mode="bottom" title="筛选" :wrapperClosable="false" :visible.sync="isShowDrawer" :radius="true" height="70%"></zb-drawer> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 底部抽屉弹窗
				isShowDrawer: false
			};
		}
	}
</script>

<style lang="less">
@import url('../../static/style/mixin.less');
</style>
