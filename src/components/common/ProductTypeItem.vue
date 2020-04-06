<template>
	<view class="uni-flex uni-row ptype-item">
		<view class="text img-box"><image class="img" src="/static/img/qq.png"></image></view>
		<view class="text">
			<view class="uni-text title-label">三一重工 SAG2000 平地机</view>
			<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
				<view class="uni-text min-label">三一重工</view>
				<view class="uni-text min-label">2017</view>
			</view>
			<view class="uni-text min-label">河南开封市/待租</view>
			<view class="uni-text price-label">26000元/每月</view>
		</view>
	</view>
</template>

<script>
	/**
	 * 列表中的每一项
	 */
	export default {
		props:['title', 'banak', "year", "location", "price"]
	}
</script>

<style scoped>
	.ptype-item{
		border-bottom: 1px solid rgba(0,0,0,0.05);
	}
	.title-label{
		color: #000000;
		font-size: 32rpx;
		font-weight: bold;
	}
	.min-label{
		color: #3F536E;
		font-size: 25rpx;
	}
	.price-label{
		color:red;
		font-size: 35rpx;
	}
	.img-box{
		width: 220rpx;
	}
	.img{
		
		width: 200rpx;
		height: 200rpx;
	}
</style>
