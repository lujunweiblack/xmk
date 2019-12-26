<template>
	<view class="wapper">
		<toast></toast>
		<view class="wapper-body" v-if="!isLoading">
			<view class="top-info">
				<view class="top-info-people-info">
					<people-info :addNum="6" :info="info"></people-info>
				</view>
				<view class="top-info-detail-complaint">
					<view class="top-info-detail-complaint-time">
						<image class="top-info-detail-complaint-time-image" src="../../../../static/index/notice/top-time.png"></image>
						<text class="top-info-detail-complaint-time-text">16小时前</text>
					</view>
					<view class="top-info-detail-complaint-event">
						<image class="top-info-detail-complaint-event-image" src="../../../../static/index/notice/top-complaint.png"></image>
						<text class="top-info-detail-complaint-event-text">投诉</text>
					</view>
				</view>
			</view>
			<view class="detail-line"></view>
			<view class="notice-tag">
				<view class="notice-tag-area notice-tag-item">
					<image class="notice-tag-image" src="../../../../static/index/notice/notice-tag-area.png"></image>
					<text class="notice-tag-text">面向全国</text>
				</view>
				<view class="notice-tag-cooperative-relationship notice-tag-item">
					<image class="notice-tag-image" src="../../../../static/index/notice/notice-tag-cooperative-relationship.png"></image>
					<text class="notice-tag-text">直播合作</text>
				</view>
				<view class="notice-tag-salary notice-tag-item">
					<image class="notice-tag-image" src="../../../../static/index/notice/notice-tag-salary.png"></image>
					<text class="notice-tag-text">15000元/人</text>
				</view>
			</view>
			<view class="detail-solid-line"></view>
			<view class="notice-detail-content">
				<text class="notice-detail-content-text">
					任职资格
					1、形象气质佳，身材匀称，声音甜美，性格外向，敢于秀出自我，思维活跃，有才艺（唱歌、喊麦、舞蹈等）优先。
					2、有良好的沟通能力（做出自己的风格，不会能歌善舞也没关系。
					3、热爱媒体事业，工作态度积极主动，具备良好的职业精神和职业操守。工作地点（不方便来公司可家里、学校），公司给新人提供专业指导培训，工作中新人遇到问题会耐心指导，所以想要突破自我，展现自我的欢迎来报名加入我们大家庭，我们承诺您1、绝对的绿色平台，对一切不符合网络规范的行为说不。
					2、自由的工作时间，可根据自己实际情况调整工作时间。
					3、绝不收应聘者一分钱
				</text>
				<view class="notice-detail-must-read">
					<text>需要人数：50人</text>
					<text>报名截止：2020-12-17 23:59:00</text>
				</view>
				<view class="notice-detail-images">
					<image v-for="(item,index) in images" :key="index" mode="aspectFill" @tap="enlargeImage(index,images)" :src="item"></image>
				</view>
			</view>
			<!-- <view class="new-foot">
				<view class="btn-white">
					<button @tap="cancel">取消</button>
				</view>
				<view class="btn-blue">
					<button @tap="commit">提交</button>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	import peopleInfo from "@/components/common/people-info/people-info.vue"

	export default {
		components: {
			peopleInfo
		},
		data() {
			return {
				info: {},
				images: ["https://imgs.weimoka.com/Fl3coHFyXiYYeA394ue3aFda2VgJ-bigimg",
					"https://imgs.weimoka.com/FoHy-vKyxl1daRymDwDEYWZ_8Yfh-bigimg"
				]
			}
		},
		methods: {
			enlargeImage(i, arr) {
				uni.previewImage({
					current: i,
					urls: arr
				});
			}
		},
		computed: {
			//uni-app小程序中直接使用store中的state会导致数据不会实时更新
			//所以通过计算函数进行监听数据的变化
			isLoading() {
				return this.$store.state.loading
			}
		},
		onLoad(option) {
			this.$loading();
			setTimeout(() => {
				this.$loading(false);
				const noticePeopleInfo = JSON.parse(decodeURIComponent(option.noticePeopleInfo));
				this.info = noticePeopleInfo;
			}, 1000)
		}
	}
</script>

<style lang="scss">
	.wapper {
		.wapper-body {
			.top-info {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding: 30rpx;

				.people-info {}

				.top-info-detail-complaint {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: flex-end;

					.top-info-detail-complaint-time {
						display: flex;
						flex-direction: row;
						align-items: center;

						.top-info-detail-complaint-time-image {
							padding-right: 10rpx;
							width: 35rpx;
							height: 35rpx;
						}

						.top-info-detail-complaint-time-text {
							font-size: 30upx;
							color: #565351;
						}
					}

					.top-info-detail-complaint-event {
						display: flex;
						flex-direction: row;
						align-items: center;

						.top-info-detail-complaint-event-image {
							padding-right: 10rpx;
							width: 30rpx;
							height: 30rpx;
						}

						.top-info-detail-complaint-event-text {
							font-size: 26rpx;
							color: #565351;
						}
					}
				}
			}

			.detail-line {
				margin-top: 2rpx;
				height: 15upx;
				background-color: #F8F8F8;
			}

			.notice-tag {
				padding: 20rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-around;

				.notice-tag-item {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.notice-tag-text {
					font-size: 32upx;
					color: #565351;
				}

				.notice-tag-image {
					width: 45rpx;
					height: 45rpx;
				}
			}

			.detail-solid-line {
				height: 4upx;
				background-color: #F8F8F8;
			}

			.notice-detail-content {
				padding: 30rpx;

				.notice-detail-content-text {
					color: #272626;
					font-size: 32upx;
				}

				.notice-detail-must-read {
					padding-top: 30rpx;
					color: #565351;
					font-size: 32upx;
					display: flex;
					flex-direction: column;
				}

				.notice-detail-images {
					padding-top: 30rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
				}
			}

			.new-foot {
				position: fixed;
				display: flex;
				bottom: 0;
				width: 100%;
				height: 160rpx;
				justify-content: center;
				background-color: #FFFFFF;
				box-shadow: 0px -3px 6px 0px rgba(0, 0, 0, 0.06);
				z-index: 999;

				.btn-white {
					flex: 1;
					align-self: center;

					button {
						color: #2888f6;
						font-size: 24rpx;
						width: 272rpx;
						height: 80rpx;
						line-height: 80rpx;
						border-radius: 16rpx;
						background-color: #ffffff;
						border: solid 2rpx #2787f5;
					}
				}

				.btn-blue {
					flex: 1;
					align-self: center;

					button {
						color: #FFFFFF;
						font-size: 24rpx;
						width: 272rpx;
						height: 80rpx;
						line-height: 80rpx;
						border-radius: 16rpx;
						background-image: linear-gradient(0deg,
							#6aa8ec 0%,
							#0d6fd1 100%);
						border: none;
					}
				}
			}
		}
	}
</style>
