<template>
	<div class="home-recmomend">
		 <div class="home-recmomend-item" v-for="(item,index) in recommends" :key=index>
			  <a :href="item.link">
					<img :src="item.image" style="width: 70px;height: 70px; margin-bottom: 3px;" />
					<div>{{item.title}}</div>
				</a>
		 </div>
	</div>
</template>

<script>
		
	export default{
		name:"HomeRecommend",
		props:{
			recommends:{
				type:Array,
				default(){
					return[]
				}
			}
		}
	}
</script>

<style scoped="">
.home-recmomend{
	display: flex;
	text-align: center;
	width: 100%;
	padding: 20px 0px 30px;
	border-bottom: 8px solid #e1e2e2;
}	
.home-recmomend a{
	text-decoration: none;
	color: #000000;
	font-size: 15px;
}
.home-recmomend-item{
	flex: 1;
}
</style>
