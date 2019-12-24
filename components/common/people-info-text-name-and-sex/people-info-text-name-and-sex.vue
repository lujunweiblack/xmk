<template>
	<view class="wapper">
		<view class="notice-people-info-text-name-and-sex">
			<text class="notice-people-info-text-name">海宇浩瀚</text>
			<image class="notice-people-info-text-sex" src="/static/index/notice/man.png"></image>
		</view>

		<view class="notice-people-info-text-position-and-reamname">
			<text class="notice-people-info-text-position">商家</text>
			<view class="notice-people-info-text-is-reamname">
				<text class="notice-people-info-text-is-reamname-text">已实名</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.wapper {
		.notice-people-info-text-name-and-sex {
			.notice-people-info-text-name {
				padding-right: 10rpx;
				font-size: 33rpx;
			}

			.notice-people-info-text-sex {
				width: 28rpx;
				height: 28rpx;
			}
		}
		.notice-people-info-text-position-and-reamname {
			display: flex;
			flex-direction: row;
			align-items: center;
		
			.notice-people-info-text-position {
				color: #a8a5a1;
				padding-right: 10rpx;
				font-size: 33rpx;
			}
		
			.notice-people-info-text-is-reamname {
				width: 90rpx;
				height: 35rpx;
				background-color: #3064ff;
				text-align: center;
				display: flex;
				flex-direction: column;
				justify-content: center;
				border-radius: 5rpx;
		
				.notice-people-info-text-is-reamname-text {
					color: #FFFFFF;
					font-size: 20rpx;
				}
			}
		}
	}
</style>
