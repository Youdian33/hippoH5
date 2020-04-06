<template>
	<title-section class="archives" title="车辆档案">
		<view class="uni-flex uni-row" style="-webkit-flex-wrap: wrap;flex-wrap: wrap;">
			<title-text v-for="item in items" :key="item.title" :title="item.title" :text="item.text" class="flex-item"></title-text>
		</view>
	</title-section>
</template>

<script>
	import TitleSection from '@/components/common/TitleSection.vue'
	import TitleText from '@/components/common/TitleText.vue'
	export default {
		components:{TitleSection,TitleText},
		props:['items']
	}
	
</script>

<style scoped>
	.flex-item {
		width: 33.3%;
		padding-top: 20rpx;
	}
</style>
