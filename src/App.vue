<template>
  <div id="app">
    <Navigation></Navigation>
    <div class="content-view">
            <router-view></router-view>
            <router-view name="worksView"></router-view>
    </div>
    <div class="footer font"> © 2018 daisy portfolio.All rights reserved.</div>
    <!-- <svg-loading></svg-loading> -->
  </div>
</template>

<script>
import Navigation from './components/navigation'
import svgLoading from './components/svgLoading'


export default {
  data () {
    return{
      navOpen : false,
    }
  },
  components: { Navigation,svgLoading },

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0vh 10vh;
  position: relative;
}
.footer{
  padding-top: 10px;
  float: right;
  font-size: 13px;

}
.content-view{
  /* width: 100%; */
  //overflow: hidden;
  position: relative;
  //background: #ccc;
    >div{
    animation:slide-run 1.2s 1;
  }
}
@keyframes slide-run {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
@media screen and (max-width: 1300px){
  #app {
    margin: 0vh 10vh 0vh 0;
  }
}
@media screen and (max-width: 768px){
    #app{
        margin: 0;
    }
    
}
</style>
