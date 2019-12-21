<template>
	<view class="wapper">
		<view class="line-h">
			<view style="align-items: center;display: flex;flex-direction:column">
				<image src="../../static/tabBar/mk-1.png" style="width: 120rpx;height: 120rpx;">
					<view>发布公告</view>
			</view>
			<view style="align-items: center;display: flex;flex-direction:column">
				<image src="../../static/tabBar/mk-1.png" style="width: 120rpx;height: 120rpx;">
					<view>发布动态</view>
			</view>
			<view style="align-items: center;display: flex;flex-direction:column">
				<image src="../../static/tabBar/mk-1.png" style="width: 120rpx;height: 120rpx;">
					<view>发布作品</view>
			</view>
			<view style="align-items: center;display: flex;flex-direction:column">
				<image src="../../static/tabBar/mk-1.png" style="width: 120rpx;height: 120rpx;">
					<view>发布约拍</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"


	export default {
		comments: {
			uniNavBar
		},
		data() {
			return {
				"windowWidth": "",
				"windowHeight": ""
			};
		},
		onLoad() {
			let obj = this;
			uni.getSystemInfo({
				success: function(res) {
					obj.windowWidth = res.windowWidth;
					obj.windowHeight = res.windowHeight;
				}
			});
		},
		computed: {
			windowHeightHW() {
				return 'margin-top:' + (this.windowHeight + this.windowWidth) + 'upx';
			}
		}
	}
</script>

<style lang="scss">
	.wapper {
		.line-h {
			/* #ifdef MP-WEIXIN*/
			padding-top: 980rpx;
			/* #endif */
			/* #ifdef H5*/
			padding-top: 880rpx;
			/* #endif */
			display: flex;
			justify-content: space-around;
		}
	}
</style>
