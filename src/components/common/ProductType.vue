<template>
	<view class="ptype">
		<view><image :src="imageUrl" class="img"></image></view>
		<view>{{label}}</view>
	</view>
</template>

<script>
	export default {
		props:['image', 'label'],
		computed:{
			imageUrl(){
				return `/static/img/ptype/${this.image}`
			}
		}
	}
</script>

<style scoped>
	.ptype{
		/* display: inline-block; */
		text-align: center;
	}
	.img{
		width: 80rpx;
		height: 80rpx;
		border-radius: 80rpx;
	}
</style>
