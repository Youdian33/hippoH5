<template>
	<view class="title-text">
		<view class="title">{{title}}</view>
		<view class="text">{{text}}</view>
	</view>
</template>

<script>
	export default {
		props:['title', 'text']
	}
</script>

<style scoped>
	.title-text{
		text-align: center;
	}
	.title{
		color: #3F536E;
		font-size: 24rpx;
	}
	.text{
		font-size: 30rpx;
	}
</style>
