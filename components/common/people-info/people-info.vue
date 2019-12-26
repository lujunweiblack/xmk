<template>
	<view class="wapper">
		<view class="notice-people-info-text">
			<image class="notice-people-info-text-head-portrait-image" :style="npithpi" :src="info.noticePeopleInfoHeadPortraitImage"></image>
			<view class="notice-people-info-text-basic" :style="npitb">

				<view class="notice-people-info-text-name-and-sex">
					<text class="notice-people-info-text-name" :style="npitn">{{info.noticePeopleInfoName}}</text>
					<image class="notice-people-info-text-sex" :style="npits" v-if="info.noticePeopleInfoSex==1" src="/static/index/notice/man.png"></image>
					<image class="notice-people-info-text-sex" :style="npits" v-if="info.noticePeopleInfoSex==0" src="/static/index/notice/woman.png"></image>
				</view>

				<view class="notice-people-info-text-position-and-reamname">
					<text class="notice-people-info-text-position" :style="npitp">{{info.noticePeopleInfoPosition}}</text>
					<view class="notice-people-info-text-is-reamname" :style="npitir">
						<text class="notice-people-info-text-is-reamname-text" :style="npitirt" v-if="info.noticePeopleInfoIsReamname==1">已实名</text>
						<text class="notice-people-info-text-is-reamname-text" :style="npitirt" v-if="info.noticePeopleInfoIsReamname==0">未实名</text>
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
			},
			addNum: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {

			};
		},
		computed: {
			npithpi() {
				let width = 85 + this.addNum;
				let height = 85 + this.addNum;
				return "width: " + width + "rpx;height: " + height + "rpx;";
			},

			npitb() {
				let paddingLeft = 20 + this.addNum;
				return "padding-left: " + paddingLeft + "rpx;";
			},

			npitn() {
				let paddingRight = 10 + this.addNum;
				let fontSize = 33 + this.addNum;
				return "padding-right: " + paddingRight + "rpx;font-size: " + fontSize + "rpx";
			},

			npits() {
				let width = 28 + this.addNum;
				let height = 28 + this.addNum;
				return "width: " + width + "rpx;height: " + height + "rpx;";
			},

			npitp() {
				let paddingRight = 10 + this.addNum;
				let fontSize = 33 + this.addNum;
				return "padding-right: " + paddingRight + "rpx;font-size: " + fontSize + "rpx";
			},

			npitir() {
				let width = 90 + this.addNum;
				let height = 35 + this.addNum;
				let borderRadius = 5 + this.addNum;
				return "width: " + width + "rpx;height: " + height + "rpx;border-radius: " + borderRadius + "rpx";
			},

			npitirt() {
				let fontSize = 20 + this.addNum;
				return "font-size: " + fontSize + "rpx;";
			}
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
				// width: 85rpx;
				// height: 85rpx;
				border-radius: 50%;
			}

			.notice-people-info-text-basic {
				//padding-left: 30rpx;

				.notice-people-info-text-name-and-sex {
					.notice-people-info-text-name {
						// padding-right: 10rpx;
						// font-size: 33rpx;
					}

					.notice-people-info-text-sex {
						// width: 28rpx;
						// height: 28rpx;
					}
				}

				.notice-people-info-text-position-and-reamname {
					display: flex;
					flex-direction: row;
					align-items: center;

					.notice-people-info-text-position {
						color: #a8a5a1;
						// padding-right: 10rpx;
						// font-size: 33rpx;
					}

					.notice-people-info-text-is-reamname {
						// width: 90rpx;
						// height: 35rpx;
						background-color: #3064ff;
						text-align: center;
						display: flex;
						flex-direction: column;
						justify-content: center;
						// border-radius: 5rpx;

						.notice-people-info-text-is-reamname-text {
							color: #FFFFFF;
							//font-size: 20rpx;
						}
					}
				}
			}
		}
	}
</style>
