<template>
	<view class="wapper">
		<scroll-view class="scroll-v" enableBackToTop="true" scroll-y @scrolltolower="loadMore()">
			<view v-for="(newsitem,index) in newsList.data" :key="newsitem.id">
				<notice-item :options="newsitem" @close="close(index)" @click="goDetail(newsitem)"></notice-item>
			</view>
			<view class="loading-more" v-if="newsList.isLoading || newsList.data.length > 4">
				<text class="loading-more-text">{{newsList.loadingText}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import noticeItem from "@/components/index/notice/notice-item/notice-item.vue"

	// 缓存每页最多
	const MAX_CACHE_DATA = 100;
	// 缓存页签数量
	const MAX_CACHE_PAGE = 3;

	const newsData = {
		data0: {
			"datetime": "40分钟前",
			"article_type": 0,
			"title": "uni-app行业峰会频频亮相，开发者反响热烈!",
			"source": "DCloud",
			"comment_count": 639
		}
	};
export default {
	comments: {
		noticeItem
	},
	data() {
		return {
		
		};
	},
	onLoad() {
		console.log(123)
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
		}
	}
</style>
