<template>
	<page class="detail">
		<scroll-view class="scroll-box" scroll-y="true">
			<view class="top uni-row">
				<view class="text img-box">
					<image class="img" src="/static/img/type/waji2.jpg"></image>
				</view>
				<view class="label">
					<view class="title uni-flex uni-row">这个挖机好溜...</view>
					<text>租赁报价</text>
					<text class="price">6000 元/每台班</text>
				</view>
			</view>
			<archives :items="archiveItems"></archives>
			<recommend></recommend>
			<more-picture></more-picture>
			<more-product>
				
			</more-product>
		</scroll-view>
		<view class="goods-carts">
			<uni-goods-nav :options="options" :fill="false" :button-group="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
		</view>
		<share :visible.sync="shareVisible"></share>
	</page>
</template>

<script>
	import Page from '@/components/layout/Page.vue';
	import Archives from '@/components/common/Archives.vue'
	import Recommend from '@/components/common/Recommend.vue'
	import MorePicture from '@/components/common/MorePicture.vue'
	import MoreProduct from '@/components/common/MoreProduct.vue'
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	import Share from '@/components/common/Share.vue'
	export default {
		components: {
			Page,
			Archives,
			Recommend,
			MorePicture,
			MoreProduct,
			uniGoodsNav,
			Share
		},
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				options: [
					// 	{
					// 	icon: 'headphones',
					// 	text: '客服'
					// }, {
					// 	icon: 'shop',
					// 	text: '店铺'
					// },
					{
						icon: 'cart',
						text: '购物车',
						info: 2
					}
				],
				buttonGroup: [{
						icon: 'chat',
						text: '询问底价',
						backgroundColor: '#ffa200 ',
						color: '#fff'
					},
					{
						icon: 'phone',
						text: '电话咨询',
						backgroundColor: '#ff0000',
						color: '#fff'
					}
				],
				archiveItems: [{
					title: '类别',
					text: '挖掘机'
				}, {
					title: '品牌',
					text: '三一重工'
				}, {
					title: '型号',
					text: 'SYI666'
				}, {
					title: '地区',
					text: '上海市'
				}, {
					title: '出厂日期',
					text: '2015-09'
				}],
				shareVisible:false
			};
		},
		/**
		 *  点击导航栏 buttons 时触发
		 */
		onNavigationBarButtonTap() {
			console.log('点击按钮,开始分享')
			this.shareVisible = true;
		},
		onLoad(event) {
			// uni.setNavigationBarTitle({
			// 	title: '查看设备详情'
			// });
			console.log(event)
			const payload = event.detailDate || event.payload;
			this.historyList = uni.getStorageSync('search:history');
		},
		methods: {
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向滚动 scrollTop 值已被修改为 0"
				})
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		}
	};
</script>

<style lang="scss" scoped>
	.detail {
		width: 100%;
		overflow-y: auto;
		padding-bottom: 100rpx;
	}
	

	.top {
		background-color: #fff;

		.img-box {
			margin: auto;
			text-align: center;
		}

		.label {
			padding-left: 20rpx;
		}

		.title {
			font-size: 36rpx;
			font-weight: bold;
		}

		.price {
			margin-left: 10rpx;
			color: red;
			font-size: 32rpx;
		}
	}

	.goods-carts {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>
