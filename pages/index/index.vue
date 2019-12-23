<template>
	<view class="wrapper">
		<uni-nav-bar status-bar="true" isCenter="true" backgroundColor="#F8F8F8"></uni-nav-bar>
		<view>
			<scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false" :scroll-into-view="scrollInto">
				<view v-for="(tab,index) in tabBars" :key="tab.id" class="uni-tab-item" :id="tab.id" :data-current="index" @click="ontabtap">
					<view :class="index==tabIndex?'uni-tab-item-title-active cur':''">
						<text class="uni-tab-item-title" >{{tab.name}}</text>
					</view>
				</view>
			</scroll-view>
			<view class="tab-bar-line" v-if="tabIndex!=0" ></view>
		</view>
		<view>
			<index-model v-if="tabIndex==0"></index-model>
			<index-notice v-if="tabIndex==1"></index-notice>
			<index-dynamic v-if="tabIndex==2"></index-dynamic>
			<index-work v-if="tabIndex==3"></index-work>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import indexDynamic from "@/components/index/dynamic/index-dynamic.vue"
	import indexModel from "@/components/index/model/index-model.vue"
	import indexNotice from "@/components/index/notice/index-notice.vue"
	import indexWork from "@/components/index/work/index-work.vue"

	export default {
		components: {
			uniNavBar,
			indexDynamic,
			indexModel,
			indexNotice,
			indexWork
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
					name: '模特',
					id: 'model'
				}, {
					name: '通告',
					id: 'notice'
				}, {
					name: '动态',
					id: 'dynamic'
				}, {
					name: '作品',
					id: 'work'
				}],
				scrollInto: ""
			}
		},
		methods: {
			ontabtap(e) {
				let index = e.target.dataset.current || e.currentTarget.dataset.current;
				this.switchTab(index);
			},
			switchTab(index) {
				if (this.tabIndex === index) {
					return;
				}
				this.tabIndex = index;
				this.scrollInto = this.tabBars[index].id;
			}
		},
		onLoad() {
			//默认加载第二个tab
			this.tabIndex = 1
		}
	}
</script>

<style>
	.wrapper {}

	/* #ifndef APP-PLUS */
	page {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

	.tabs {
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		background-color: #ffffff;
		/* #ifdef MP-ALIPAY || MP-BAIDU */
		height: 100vh;
		/* #endif */
	}
	.tab-bar-line{
		margin-top: 2rpx;
		height: 15upx;
		background-color: #F8F8F8;
	}

	.scroll-h {
		width: 750upx;
		height: 88upx;
		flex-direction: row;
		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
		/* flex-wrap: nowrap; */
		/* border-color: #cccccc;
			border-bottom-style: solid;
			border-bottom-width: 1px; */
	}
	
	/* 当前选中tab的底部样式 */
	.cur {
		border-bottom: 8rpx solid;
		border-bottom-color: #f5cb2b;
		border-radius: 5rpx;
	}

	.line-h {
		height: 1upx;
		background-color: #cccccc;
	}

	.uni-tab-item {
		/* #ifndef APP-PLUS */
		display: inline-block;
		/* #endif */
		flex-wrap: nowrap;
		padding-left: 34upx;
		padding-right: 34upx;
	}

	.uni-tab-item-title {
		color: #a46e37;
		font-size: 35upx;
		height: 80upx;
		line-height: 80upx;
		flex-wrap: nowrap;

	}

	.uni-tab-item-title-active {
		color: #a46e37;
		font-weight: bold;
	}

	.swiper-box {
		flex: 1;
	}

	.swiper-item {
		flex: 1;
		flex-direction: row;
	}

	.scroll-v {
		flex: 1;
		/* #ifndef MP-ALIPAY */
		flex-direction: column;
		/* #endif */
		width: 750upx;
	}

	.update-tips {
		position: absolute;
		left: 0;
		top: 41px;
		right: 0;
		padding-top: 5px;
		padding-bottom: 5px;
		background-color: #FDDD9B;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.update-tips-text {
		font-size: 14px;
		color: #ffffff;
	}

	.refresh {
		width: 750upx;
		height: 64px;
		justify-content: center;
	}

	.refresh-view {
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
	}

	.refresh-icon {
		width: 30px;
		height: 30px;
		transition-duration: .5s;
		transition-property: transform;
		transform: rotate(0deg);
		transform-origin: 15px 15px;
	}

	.refresh-icon-active {
		transform: rotate(180deg);
	}

	.loading-icon {
		width: 20px;
		height: 20px;
		margin-right: 5px;
		color: #999999;
	}

	.loading-text {
		margin-left: 2px;
		font-size: 16px;
		color: #999999;
	}

	.loading-more {
		align-items: center;
		justify-content: center;
		padding-top: 10px;
		padding-bottom: 10px;
		text-align: center;
	}

	.loading-more-text {
		font-size: 28upx;
		color: #999;
	}
</style>
