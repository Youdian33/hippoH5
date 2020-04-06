<template>
	<title-section class="archives" title="猜你喜欢">
		<product-type-item v-for="item in products" :key="item.id" @click.native="onItemClick(item,$event)"></product-type-item>
		<view class="btn-box"><button @click="onClick" class="btn" type="warn" plain="true" size="mini">算法开小差了, 没有我喜欢的</button></view>
	</title-section>
</template>

<script>
	import TitleSection from '@/components/common/TitleSection.vue'
	import ProductTypeItem from "components/common/ProductTypeItem.vue";
	import {
		mapState
	} from 'vuex';
	export default {
		components: {
			TitleSection,
			ProductTypeItem
		},
		props: ['items'],
		data() {
			return {
				products: [{
					id: 1
				}, {
					id: 2
				}]
			};
		},
		computed: {
			...mapState([])
		},
		methods: {
			onClick() {

			},
			onItemClick(item){
				
			}
		}
	}
</script>

<style scoped>
	.btn-box {
		padding-top: 20rpx;
		text-align: center;
	}
</style>
