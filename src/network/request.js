import axios from 'axios'

export function request(config){
	 /* return new Promise((resolve,reject) => { */
	 //1.创建axios实列
		  const instance=axios.create({
		  	baseURL:'http://123.207.32.32:8000',
		  	timeout:5000
		  })
		//2.axios拦截器
		//2.1请求拦截
		instance.interceptors.request.use(
		config => {
			/* console.log(config); */
			
			//1,比如config中的一些信息不符合服务器的要求
			
			//2，比如每次发送网络请求时，都希望在界面中显示一个请求的图标
			
			//3，某些网络请求（比如登录（token）没有携带标识token提醒它让他去登录）
			return config;
		},
		err => {
			console.log(err);
		})

  //2.2响应拦截
	instance.interceptors.response.use(
	res =>{
		return res.data;
		console.log(res);
	},
	err =>{
		console.log(err);
	}
	)
		  
	//3.发送真正的网络请求
		return  instance(config)

}