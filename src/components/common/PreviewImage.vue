<template>
	<title-section title="更多图片">
		<hx-preview-img :list.sync="previewImgList" :current.sync="currentImg" :start.sync="PINum"></hx-preview-img>
		<button @click="previewImg(imgList[2],imgList)">切换</button>
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
		data(){
			return {
				currentImg: '/static/img/pics/1.jpg',
				previewImgList: [],
				PINum: 0,
				imgList: ['static/img/pics/1.jpg', 'static/img/pics/2.jpg', 'static/img/pics/3.jpg', 'static/img/pics/4.jpg']
			}
		},
		methods: {
			//图片预览
			previewImg(imgSrc, list) {
				this.currentImg = imgSrc
				this.previewImgList = list
				this.PINum++
			},
		}
	}
</script>

<style>
</style>
