<template>
	<view class="wapper">
		<scroll-view class="scroll-v list" enableBackToTop="true" scroll-y @scrolltolower="loadMore()">
			<view v-for="(item,index) in dataList.data" :key="index">
				<notice-item :options="item" @click="goDetail(item)"></notice-item>
			</view>
			<view class="loading-more">
				<uni-load-more :status="dataList.loading"></uni-load-more>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import noticeItem from "@/components/index/notice/notice-item/notice-item.vue"
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"

	// 缓存每页最多
	const MAX_CACHE_DATA = 100;
	// 缓存页签数量
	const MAX_CACHE_PAGE = 3;

	const mockData = {
		data: {
			"datetime": "40分钟前",
			"article_type": 0,
			"title": "uni-app行业峰会频频亮相，开发者反响热烈!",
			"source": "DCloud",
			"comment_count": 639
		}
	}
	export default {
		components: {
			noticeItem,
			uniLoadMore
		},
		data() {
			return {
				dataList: {
					loading: "loading"
				},
				navigateFlag: false,
				pulling: false
			};
		},
		methods: {
			getList() {
				let activeTab = this.dataList;
				let list = [];
				for (let i = 1; i <= 10; i++) {
					let item = mockData.data;
					list.push(item);
				}
				activeTab.data = activeTab.data.concat(list);
			},
			loadMore(e) {
				setTimeout(() => {
					this.dataList.loading = "noMore";
					//this.getList();
				}, 1000)
			},
			goDetail(e) {
				if (this.navigateFlag) {
					return;
				}
				this.navigateFlag = true;
				// uni.navigateTo({
				//     url: './detail/detail?title=' + e.title
				// });
				console.log("查看详情")
				setTimeout(() => {
					this.navigateFlag = false;
				}, 200)
			}

		},
		//神坑，组建中是不支持onLoad的，改用mounted
		mounted() {
			setTimeout(() => {
				this.dataList = {
					data: [],
					loading: 'loading',
				};
				this.getList();
			}, 350)
		}
	}
</script>

<style lang="scss">
	.wapper {
		.scroll-v {
			flex: 1;
			/* #ifndef MP-ALIPAY */
			flex-direction: column;
			/* #endif */
			width: 750upx;
			height: 1000rpx;

			.loading-more {
				align-items: center;
				justify-content: center;
				padding-top: 5px;
				padding-bottom: 15px;
				text-align: center;
			}
		}
	}
</style>
