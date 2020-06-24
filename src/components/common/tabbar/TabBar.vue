<template>
	<div id="tar-bar">
	<slot></slot>
	</div>
</template>

<script>
	export default{
		name:"TabBar"
	}
</script>

<style>
	#tar-bar{
		display: flex;
		background-color: #f6f6f6;
		 position: fixed;
		 left: 0px;
		 right: 0px;
		 bottom: 0px;
		 box-shadow: 0px -5px 2px rgba(100, 100, 100, 0.2);
	 
	}
	
</style>
