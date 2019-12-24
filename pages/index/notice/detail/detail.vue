<template>
	<view class="wapper">
		<toast></toast>
		<view class="people-info">
			<people-info :info="info"></people-info>
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
				obj: {},
				info: {}

			};
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
		.people-info {}
	}
</style>
