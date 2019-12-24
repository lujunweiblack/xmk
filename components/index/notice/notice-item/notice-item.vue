<template>
	<view class="wapper">
		<view class="item-line"></view>
		<view class="item-content" @click="click">
			<view class="notice-people-info">
				<view class="notice-people-info-text">
					<image class="notice-people-info-text-head-portrait-image" src="/static/logo.png"></image>
					<view class="notice-people-info-text-basic">
						<people-info-text-name-and-sex></people-info-text-name-and-sex>
					</view>
				</view>
				<view class="notice-people-info-notice-area">
					<text class="notice-people-info-notice-area-text">全国</text>
				</view>
			</view>
			<view class="function-and-salary">
				<text class="function-and-salary-text">直播合作·预算15000元/人</text>
			</view>
			<view class="function-info">
				<text class="function-info-text">任职资格</text>
				<text class="function-info-text">1，形象气质佳，身材匀称，声音甜美，性格外向</text>
			</view>
			<view class="notice-content-info">
				<view class="notice-content-info-text">17分钟前</view>
				<view class="notice-content-info-follw">
					<view class="notice-content-info-text notice-content-info-follw-text">已报名 2</view>
					<view class="notice-content-info-text">阅读 27845</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import peopleInfoTextNameAndSex from "@/components/common/people-info-text-name-and-sex/people-info-text-name-and-sex.vue";

	export default {
		components: {
			peopleInfoTextNameAndSex
		},
		props: {
			options: {
				type: Object,
				default: function(e) {
					return {}
				}
			}
		},
		data() {
			return {

			};
		},
		methods: {
			click() {
				this.$emit('click');
			}
		}
	}
</script>

<style lang="scss">
	.wapper {
		.item-line {
			margin-top: 2rpx;
			height: 15upx;
			background-color: #F8F8F8;
		}

		.item-content {
			padding: 35rpx;

			.notice-people-info {
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				.notice-people-info-text {
					display: flex;
					flex-direction: row;
					align-items: center;

					.notice-people-info-text-head-portrait-image {
						width: 85rpx;
						height: 85rpx;
						border-radius: 50%;
					}

					.notice-people-info-text-basic {
						padding-left: 30rpx;
					}
				}

				.notice-people-info-notice-area {
					.notice-people-info-notice-area-text {
						font-size: 33rpx;
						color: #4a4844;
					}
				}
			}

			.function-and-salary {
				padding-top: 25rpx;

				.function-and-salary-text {
					font-size: 35rpx;
				}
			}

			.function-info {
				padding-top: 18rpx;
				display: flex;
				flex-direction: column;

				.function-info-text {
					font-size: 31rpx;
					color: #565351;
				}
			}

			.notice-content-info {
				padding-top: 22rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				.notice-content-info-text {
					font-size: 26rpx;
					color: #96908f;
				}

				.notice-content-info-follw {
					display: flex;
					flex-direction: row;

					.notice-content-info-follw-text {
						padding-right: 25rpx;
					}
				}
			}
		}
	}
</style>
