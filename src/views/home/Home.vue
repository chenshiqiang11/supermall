<template>
	
	<div>
		<nav-bar class="home-nav">
			<div slot="center">蘑菇街</div>
		</nav-bar>
		<home-swiper :banners="banners"></home-swiper>
		<home-recommend :recommends="recommends"></home-recommend>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import {getHomeMultidata} from 'network/home.js'
	import HomeSwiper from './childComps/HomeSwiper.vue'
	import HomeRecommend from './childComps/HomeRecommend.vue'
	export default{
		name:"Home",
		components:{
       NavBar,
			 HomeSwiper,
			 HomeRecommend
			 
		},
		data(){
			return{
				banners:[],
				recommends:[]
			}
		},
		created() {//请求首页的多个数据
			getHomeMultidata().then(res =>{
				console.log(res);
				this.banners=res.data.banner.list;
				this.recommends=res.data.recommend.list;
			})
		}
	}
</script>

<style scoped="">
	.home-nav{
		background-color:#ff9090;
		color: #FFFFFF;
	}
</style>
