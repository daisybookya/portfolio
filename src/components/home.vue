<template>
  <div class="home">
    <div class="ipad" v-if="isTouch">
          <div class="eachpart">
            <section-one :secAnimate="isTouch" :isPad ="isTouch"></section-one>
          </div>
    </div>
    <div class="scroll-container" v-show="!isTouch">
          <div class="eachpart move" v-if="currentlyShowing === 'first'" >
            <section-one :secAnimate="addAnimate.first"></section-one>
          </div>
          <div class="eachpart move" v-if="currentlyShowing === 'second'">
            <sectionTwo :secAnimate="addAnimate.second"></sectionTwo>
          </div>
            <div class="eachpart move" v-if="currentlyShowing === 'third'">
              <sectionThree :secAnimate="addAnimate.third"></sectionThree>
            </div>
          <div class="eachpart move" v-if="currentlyShowing === 'fourth'">
            <sectionFour :secAnimate="addAnimate.fourth"></sectionFour>
          </div>
    </div>
      
    <div class="sub-container">
      <scroll-view>
        <template slot-scope="visible">
          <scroll-marker
            v-for="m in markers"
            :key="m"
            :visible="visible[m]"
            :name="m"
            :spacing="300"
            @isVisible="markerVisible"
            @isNotVisible="markerNotVisible"
          ></scroll-marker>
        </template>
      </scroll-view>
    </div>
  </div>
</template>
<script>
import sectionOne from './home/oneSection'
import sectionTwo from './home/twoSection'
import sectionThree from './home/threeSection'
import sectionFour from './home/fourSection'

import { $scrollview } from 'vue-scrollview'

export default {
  name: 'Home',
  data:function(){
    return{
       markers: ['first', 'second', 'third', 'fourth'],
       addAnimate: {
         "first":false,
         "second":false,
         "third":false,
         "fourth":false
         },
       currentlyShowing: 'first',
       isTouch:false,
    }  
  },
  components:{
    sectionOne,sectionTwo,sectionThree,sectionFour
  },
  methods: {
    isIpad:function(){
       if( /Android|webOS|Mobile|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
              this.isTouch = true;
              console.log('true')
        }
    },
    markerVisible(name) {
      //console.log(`marker ${name} is visible!`)
      this.currentlyShowing = name;
      var vm = this;
      if(this.currentlyShowing === name){
        setTimeout(function(){
          vm.addAnimate[name] = true;
        },1000);
      }
    },
    markerNotVisible(name) {
      const scrollDirection = $scrollview.getScrollDirection()
      this.addAnimate[name] = false;
      if (name === 'first' && scrollDirection === 'UP') this.currentlyShowing = name
    }
  },
  mounted:function(){
    this.isIpad();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home{
  // width: 90%;
  // height: 100vh;
  // position: relative;
  // overflow-y: scroll;
}
.scroll-container,.ipad{
  width: 90vw;
  position: fixed;
  top: 7.5vh;
  left: 5vw;
}
.eachpart{
  width: 100%;
  height: 85vh;
  position: relative;
  overflow: hidden;
  transition: all 1.5s ease;
  &.move{
    animation: fade-in 1.5s;
  }
  
}
.sub-container{
  padding-bottom: 300px;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
@media screen and (max-width: 1300px){

}
@media screen and (max-width: 768px){
  .scroll-container,.ipad{
    width: 100vw;
    left: 0vh;
  }
    
}
</style>
