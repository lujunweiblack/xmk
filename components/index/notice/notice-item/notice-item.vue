<template>
	<view class="wapper">
		<view class="item-line"></view>
		<view class="item-content" @click="click">
			<view class="notice-people-info">
				<people-info :info="options.noticePeopleInfo"></people-info>
				<view class="notice-people-info-notice-area">
					<text class="notice-people-info-notice-area-text">{{options.noticeInfo.noticeInfoArea}}</text>
				</view>
			</view>
			<view class="function-and-salary">
				<text class="function-and-salary-text">{{options.noticeInfo.noticeInfoFunctionAndSalary}}</text>
			</view>
			<view class="function-info">
				<text class="function-info-text">{{options.noticeInfo.noticeInfoFunctionInfo}}</text>
			</view>
			<view class="notice-content-info">
				<view class="notice-content-info-time">{{options.noticeContentInfo.noticeContentInfoTime}}</view>
				<view class="notice-content-info-follw">
					<view class="notice-content-info-sign-up">已报名 {{options.noticeContentInfo.noticeContentInfoSignUp}}</view>
					<view>阅读 {{options.noticeContentInfo.noticeInfoFunctionInfo}}</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import peopleInfo from "@/components/common/people-info/people-info.vue";

	export default {
		components: {
			peopleInfo
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
				font-size: 26rpx;
				color: #96908f;

				.notice-content-info-follw {
					display: flex;
					flex-direction: row;

					.notice-content-info-sign-up {
						padding-right: 25rpx;
					}
				}
			}
		}
	}
</style>
