<template>
	<view class="section">
		<view class="header">
			<text class="dot"></text><text class="title">{{title}}</text>
		</view>
		<view class="content">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['title']
	}
</script>

<style scoped>
	.section {
		margin: 14rpx 0rpx;
		padding-bottom: 10rpx;
		background-color: #fff;
	}

	.header {
		border-bottom: 1px solid rgba(0, 0, 0, 0.05);
	}

	.dot {
		width: 10rpx;
		height: 20rpx;
		background-color: #f00;
		display: inline-block;
		margin-left: 10rpx;
		margin-right: 10rpx;
	}
	.title{
		
	}
</style>
