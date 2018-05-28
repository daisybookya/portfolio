<template>
  <div class="loading" v-if="loading">
	  <div class="load-top"></div>
	  <div class="load-bottom"></div>
	  <div class="logo-container">
		  <svg-logo></svg-logo>
	  </div>
	  
  </div>
</template>

<script>
import svgLogo from './svgLogo'

export default {
    data () {
        return {
			loading : true,
        }
	},
	components:{
		svgLogo
	},
	mounted:function(){
		let vm = this;
		setTimeout(function(){
			vm.loading = false;
		},5000)
	}
}
</script>

<style scoped lang="scss">
.loading{
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 990;
}
.load-top,.load-bottom{
	width: 100%;
	height: 50vh;
	background: #eee;
	//transform: rotate(-3deg) scale(1.5,1.5);
  	
}
.load-top{
	animation: moveTop 2s linear forwards;
	animation-delay: 2.5s;
}
.load-bottom{
	//height: 50vh;
	animation: moveBottom 2s linear forwards;
//   background: rgb(0, 159, 180);
  background: -moz-linear-gradient(45deg, rgb(161,234,170) 1%, rgb(143,214,224) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg, rgb(161,234,170) 1%,rgb(143,214,224) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg, rgb(161,234,170) 1%,rgb(143,214,224) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a1eaaa', endColorstr='#8fd6e0',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	animation-delay: 2.5s;
}
.logo-container{
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 992;
	transform: translate(-45%,-50%);
}
@keyframes moveTop {
    to {
		transform: translateY(-100%);
		opacity: 0;
		}
}
@keyframes moveBottom {
    to {
		transform: translateY(100%);
		opacity: 0;
		
		}
}
</style>
