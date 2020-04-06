<template>
	<title-section class="recommend" title="车主推荐">
		<view><image class="img" src="/static/img/touxiang.png"></image><button @click="onClick" class="btn" type="warn" plain="true" size="mini">点击联系我</button></view>
		<view class="comment"><text>我的机器不一般,666</text></view>
	</title-section>
</template>

<script>
	import TitleSection from '@/components/common/TitleSection.vue'
	import TitleText from '@/components/common/TitleText.vue'
	export default {
		components:{TitleSection,TitleText},
		props:['items'],
		methods:{
			onClick(){
				uni.showModal({
					content:"来啦老弟..."
				})
			}
		}
	}
	
</script>

<style scoped>
	.recommend {
		
	}
	.img{
		left: 20rpx;
		top: 10rpx;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
	}
	.btn{
		float: right;
		top: 20rpx;
		right: 30rpx;
	}
	.comment{
		position: relative;
		left: 2.5%;
		width: 90%;
		border-radius: 20rpx;
		background-color: #eee;
		padding: 5rpx 20rpx;
	}
</style>
