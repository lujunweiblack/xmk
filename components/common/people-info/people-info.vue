<template>
	<view class="wapper">
		<view class="notice-people-info-text">
			<image class="notice-people-info-text-head-portrait-image" :src="info.noticePeopleInfoHeadPortraitImage"></image>
			<view class="notice-people-info-text-basic">

				<view class="notice-people-info-text-name-and-sex">
					<text class="notice-people-info-text-name">{{info.noticePeopleInfoName}}</text>
					<image class="notice-people-info-text-sex" v-if="info.noticePeopleInfoSex==1" src="/static/index/notice/man.png"></image>
					<image class="notice-people-info-text-sex" v-if="info.noticePeopleInfoSex==0" src="/static/index/notice/woman.png"></image>
				</view>

				<view class="notice-people-info-text-position-and-reamname">
					<text class="notice-people-info-text-position">{{info.noticePeopleInfoPosition}}</text>
					<view class="notice-people-info-text-is-reamname" v-if="info.noticePeopleInfoPosition">
						<text class="notice-people-info-text-is-reamname-text" v-if="info.noticePeopleInfoIsReamname==1">已实名</text>
						<text class="notice-people-info-text-is-reamname-text" v-if="info.noticePeopleInfoIsReamname==0">未实名</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			info: {
				type: Object,
				default: function(e) {
					return {}
				}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.wapper {
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
		}
	}
</style>
