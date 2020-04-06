<template>
	<title-section title="更多图片">
		<view class="uni-flex uni-row" style="-webkit-flex-wrap: wrap;flex-wrap: wrap;">
			<view class="flex-item" v-for="type in types" :key="type.name" @click="onTypeClick(type)">
				<image class="img" :src="type.items[0]"></image><br>
				<text>{{type.name}}</text>
			</view>
		</view>
		<hx-preview-img :list="previewImgList" :current="currentImg" :start="previewIndex"></hx-preview-img>
	</title-section>
</template>

<script>
	import TitleSection from '@/components/common/TitleSection.vue'
	import hxPreviewImg from "@/components/hx-preview-img/hx-preview-img.vue";
	export default {
		components: {
			TitleSection,
			hxPreviewImg
		},
		data() {
			return {
				currentImg: '',
				previewImgList: [],
				previewIndex: 0,
				types: [{
					name: '45度',
					items: ['/static/img/pics/1.jpg', '/static/img/pics/2.jpg', '/static/img/pics/3.jpg', '/static/img/pics/4.jpg']
				}, {
					name: '正面',
					items: ['/static/img/pics/2.jpg', '/static/img/pics/2.jpg', '/static/img/pics/3.jpg', '/static/img/pics/4.jpg']
				}, {
					name: '施工图',
					items: ['/static/img/pics/3.jpg', '/static/img/pics/2.jpg', '/static/img/pics/3.jpg', '/static/img/pics/4.jpg']
				}, {
					name: '后方',
					items: ['/static/img/pics/4.jpg', '/static/img/pics/2.jpg', '/static/img/pics/3.jpg', '/static/img/pics/4.jpg']
				}]
			}
		},
		computed: {
			typeMap() {
				let map = {};
				this.types.forEach(i => map[i.name] = i);
				return map;
			}
		},
		methods: {
			onTypeClick(type) {
				console.log('onTypeClick');
				let items = type.items.map(i => i.substr(1, i.length - 1));
				this.currentImg = items[0];
				this.previewImgList = items;
				this.previewIndex++;

			}
		}
	}
</script>

<style scoped>
	.flex-item {
		width: 50%;
		padding-top: 0rpx;
		text-align: center;
	}

	.img {
		width: 94%;
		height: 260rpx;
	}
</style>
