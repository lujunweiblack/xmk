<template>
	<!-- 保留代码 -->
	<!-- <view :style="windowHeightHW">
		<view style="background-color: #2C405A;">
			<view style="text-align: center;margin-top: rpx;">
				<view>
					D
				</view>
				<view>
					C
				</view>
				<view>
					T
				</view>
				<view>
					H
				</view>
			</view>
		</view>
	</view> -->
	<view class="line-h">
		<view>
			D
		</view>
		<view>
			C
		</view>
		<view>
			T
		</view>
		<view>
			H
		</view>
	
	</view>
</template>

<script>
	
	
	export default {
		data() {
			return {
				"windowWidth":"",
				"windowHeight":""
			};
		},
		onLoad() {
			let obj = this;
			uni.getSystemInfo({
			    success: function (res) {
			        obj.windowWidth = res.windowWidth;
			        obj.windowHeight = res.windowHeight;
			    }
			});
		},
		computed:{
			windowHeightHW(){
				return 'margin-top:'+(this.windowHeight+this.windowWidth)+'rpx';
			}
		}
	}
</script>

<style lang="scss">
.line-h {
	margin-top: 800rpx ;
	display: flex;
	justify-content:space-around;
}
</style>
