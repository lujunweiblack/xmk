<template>
	<view class="wapper">
		<view class="menu-line">
			<view class="menu-item">
				<image class="menu-item-image" src="../../static/pub/icon-1.png">
					<text class="menu-item-text">发布公告</text>
			</view>
			<view class="menu-item">
				<image class="menu-item-image" src="../../static/pub/icon-1.png">
					<text class="menu-item-text">发布动态</text>
			</view>
			<view class="menu-item">
				<image class="menu-item-image" src="../../static/pub/icon-1.png">
					<text class="menu-item-text">发布作品</text>
			</view>
			<view class="menu-item">
				<image class="menu-item-image" src="../../static/pub/icon-1.png">
					<text class="menu-item-text">发布约拍</text>
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
		.menu-line {
			/* #ifdef MP-WEIXIN*/
			padding-top: 880rpx;
			/* #endif */
			/* #ifdef H5*/
			padding-top: 780rpx;
			/* #endif */
			display: flex;
			justify-content: space-around;

			.menu-item {
				align-items: center;
				display: flex;
				flex-direction: column;

				.menu-item-image {
					width: 128rpx;
					height: 128rpx;
					margin-bottom: 18rpx;
				}

				.menu-item-text {
					font-size: 30rpx;
					color: #a46e37;
				}
			}
		}
	}
</style>
