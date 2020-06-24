<template>
	<div class="tar-bar-item" @click="ItemClick">
		<div v-if="!isActive">
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="item-icon-active"></slot>
		</div>
		<!-- :class="{active:isActive}" -->
		<div :style="activeStyle">
			<slot name="item-text"></slot>
		</div>

		<!-- 	<img src="../../assets/imgs/tabbar/home.svg" alt="" />		
			<div>首页</div> -->
	</div>


</template>

<script>
	
	export default {
		name: "TabBarItem",
		props: {
			path: String,
			activeColor:{
				type:String,
				default:'red'
			}
		}
		/* ,data() {
			return {
				isActive: true
			}
		}, */
		,
		computed: {
			isActive() {
				// /home -->item1(/home)=true
				// /category -->item2(/category)=false
				// /shopcart -->item3(/shopcart)=false
				// /profile -->item4(/profile)=false
				return this.$route.path.indexOf(this.$props.path) !== -1;
			},
			activeStyle(){
				 return this.isActive ? {color:this.activeColor}:{}
			}
		},
		methods: {
			ItemClick() {
				this.$router.push(this.$props.path);
			}
		}
	}
</script>

<style>
	.tar-bar-item {
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 15px;
	}


	.tar-bar-item img {
		height: 24px;
		width: 24px;
		margin-top: 4px;
		vertical-align: middle;
		margin-bottom: 1.6px;
	}

/* 	.active {
		color: red;
	} */
</style>
