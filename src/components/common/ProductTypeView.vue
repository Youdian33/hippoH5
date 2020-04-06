<template>
	<view class="ptype-list">
		<view class="ptype-box-row" v-for="(row,i) in ptypes" :key="i">
			<product-type v-for="item in row" @click.native="onTypeClick(item,$event)" :image="item.image" :label="item.label" :key="item.label" class="pt"></product-type>
		</view>
	</view>
</template>

<script>
	import ProductType from "components/common/ProductType.vue";
	export default {
		components:{ProductType},
		props:['ptypes'],
		methods:{
			onTypeClick(item, evt){
				// console.log('click ptype ', item,evt);
				this.$emit('ptype-click', {item, evt})
			}
		}
		
	}
</script>

<style>
	.ptype-box-row {
		display: flex;
		padding: 5px 0px;
		background-color: #fff;
	}
	.pt{
		width: 20%;
	}
</style>
