<template>
	<page class="page">
		<swiper indicator-dots="true">
			<swiper-item v-for="(img, key) in imgUrls" :key="key">
				<image :src="img" />
			</swiper-item>
		</swiper>
		<product-type-view :ptypes="ptypes" @ptype-click="onPtypeClick"></product-type-view>
		<title-section title="最新发布">
			<product-type-item v-for="item in products" :key="item.id" @click.native="onItemClick(item,$event)"></product-type-item>
			<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
		</title-section>
	</page>
</template>

<script>
	import ProductTypeView from "components/common/ProductTypeView.vue";
	import ProductTypeItem from "components/common/ProductTypeItem.vue";
	import TitleSection from '@/components/common/TitleSection.vue';
	import {
		mapState
	} from 'vuex'
	export default {
		components: {
			TitleSection,
			ProductTypeView,
			ProductTypeItem
		},
		data() {
			return {
				showSwiper: false,
				imgUrls: [
					'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
					'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg'
				],
				loadMoreText: "加载中...",
				showLoadMore: false,
				max: 0,
				products: [{
					id: 1
				}, {
					id: 2
				}, {
					id: 3
				}, {
					id: 4
				}, {
					id: 5
				}, {
					id: 6
				}, {
					id: 7
				}, {
					id: 8
				}, {
					id: 9
				}]
			};
		},
		computed: {
			...mapState(['ptypes'])
		},
		/**
		 * 当 searchInput 配置 disabled 为 true 时触发
		 */
		onNavigationBarSearchInputClicked(e) {
			console.log('事件执行了')
			uni.navigateTo({
				url: '/pages/main/search-product'
			});
		},
		/**
		 *  点击导航栏 buttons 时触发
		 */
		onNavigationBarButtonTap() {
			uni.showModal({
				title: '提示',
				content: '用户点击了功能按钮，这里仅做展示。',
				success: res => {
					if (res.confirm) {
						console.log('用户点击了确定');
					}
				}
			});
		},
		onLoad() {
			this.initData();
		},
		onUnload() {
			this.max = 0,
				this.data = [],
				this.loadMoreText = "加载更多",
				this.showLoadMore = false;
		},
		onReachBottom() {
			console.log("onReachBottom");
			if (this.max > 40) {
				this.loadMoreText = "没有更多数据了!"
				return;
			}
			this.showLoadMore = true;
			setTimeout(() => {
				this.setListData();
			}, 300);
		},
		onPullDownRefresh() {
			console.log('onPullDownRefresh');
			this.initData();
		},
		methods: {
			initData() {

			},
			setListData() {
				let data = [];
				this.max += 10;
				for (var i = this.max - 9; i < this.max + 1; i++) {
					data.push(i)
				}
				// this.data = this.data.concat(data);
			},
			onPtypeClick({
				item,
				evt
			}) {
				console.log('onTypeClick', item, evt);
				uni.navigateTo({
					url: `/pages/main/search-product?type=${item.name}`
				});
			},
			onItemClick(item, evt) {
				console.log('item click ', item)
				uni.navigateTo({
					url: `/pages/main/product/detail?id=${item.id}`
				});

			}
		}
	};
</script>

<style scoped>
	image,
	swiper,
	.img-view {
		width: 750rpx;
		height: 500rpx;
	}


	.split {
		border-top: rgba(0, 0, 0, 0.05) solid 1px;
	}
</style>
