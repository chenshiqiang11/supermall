import Vue from 'vue'
import VueRouter from 'vue-router'

//安装插件
Vue.use(VueRouter)

//创建VueRouter对象
//懒加载
const Home =     () => import('../views/home/Home.vue');
const Category = () => import('../views/category/Category.vue');
const ShopCart = () => import('../views/shopcart/ShopCart.vue');
const Profile =  () => import('../views/profile/Profile.vue');


//使用VueRouter
  Vue.use(VueRouter)
	//重复点击路由导航报错的解决方法
	const originalPush = VueRouter.prototype.push
	   VueRouter.prototype.push = function push(location) {
	   return originalPush.call(this, location).catch(err => err)
	}
	
	const routes=[
		{
			path:"",
			redirect:"/home"
		},
		{
			path:"/home",
			component:Home
		},
		{
			path:"/category",
			component:Category
		},
		{
			path:"/shopcart",
			component:ShopCart
		},
		{
			path:"/profile",
			component:Profile
		}
		
	]

const router=new VueRouter({
	routes,
	mode:'history'
})

export default router