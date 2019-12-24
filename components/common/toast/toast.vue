<template>
	<view class="request-loading-view" v-show="is_loading" @click="switch_loading">
		<view class="loading-view">
			<view class="loading">
				<text class="loadind-text">加载中...</text>
			</view>
		</view>
	</view>
</template>

<script scoped>
	export default {
		data() {
			return {

			};
		},
		methods: {
			switch_loading() {
				this.$store.commit("switchLoading")
			}
		},
		//实测直接在标签属性里写  $store.state.XX  拿不到数据  所以这里通过 计算属性去监听一下
		computed: {
			is_loading() {
				return this.$store.state.loading
			}
		}
	}
</script>

<style>
	.request-loading-view {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 198903060;
		background-color: rgba(0, 0, 0, 0.001);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.loading-view {
		width: 300upx;
		height: 80upx;
		background-color: rgba(0, 0, 0, 0.7);
		border-radius: 13upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* 动画样式 */
	.loading {
		/* 	border: 10upx solid rgba(0, 0, 0, 0.01);
		border-radius: 50%;
		border-top: 10upx solid #fff;
		border-right: 10upx solid #fff;
		border-bottom: 10upx solid #fff;
		width: 60upx;
		height: 60upx;
		-webkit-animation: spin 1.4s linear infinite;
		animation: spin 1.4s linear infinite; */
	}

	.loadind-text {
		font-size: 35rpx;
		color: #FFFFFF;
	}

	@-webkit-keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
		}

		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
