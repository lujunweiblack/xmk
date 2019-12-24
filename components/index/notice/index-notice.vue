<template>
	<view class="wapper">
		<scroll-view class="scroll-v list" :style="scrollH" enableBackToTop="true" scroll-y @scrolltolower="loadMore()">
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
				uni.navigateTo({
				    url: './notice/detail/detail'
				});
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
		},
		computed: {
			//通过计算函数指定scroll-view的高度以适应不同的平台
			scrollH: function() {
				let sys = uni.getSystemInfoSync();
				let winWidth = sys.windowWidth;
				let winrate = 750 / winWidth;
				let winHeight = parseInt(sys.windowHeight * winrate)
				return "height:"+winHeight+"rpx"
			}
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
