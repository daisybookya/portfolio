<template>
    <div class="main-container" v-bind:class="{'active' : secAnimate}">
        <div class="part-left bk-blue" >
          <transition name="fade">
                <div class="r-bk bk-blue-g" v-if="nowBk == 'one'"></div>
                </transition>
                <transition name="fade">
                <div class="r-bk bk-pink-b" v-if="nowBk == 'two'"></div> </transition> 
                <transition name="fade">
                <div class="r-bk bk-green-p" v-if="nowBk == 'three'"></div>  </transition>
            </transition>
          <p class="serif txts">
              <ul class="change-bk">
              <li v-on:mouseover="nowBk = 'one',stopChange()"></li>
              <li v-on:mouseover="nowBk = 'two',stopChange()"></li>
              <li v-on:mouseover="nowBk = 'three',stopChange()"></li>
            </ul>
            </p>
        </div>
        <div class="part-right bk-azure" v-bind:class="leftTurn">
          <p class="txts">
            <ul class="change-bk">
              <li v-on:mouseover="leftTurn = 'dark',stopChange()"></li>
              <li v-on:mouseover="leftTurn = 'default',stopChange()"></li>
              <li v-on:mouseover="leftTurn = 'light',stopChange()"></li>
            </ul>
          </p>
        </div>
         <p class="script slogan">design<br> x <br>code</p>

        <div class="part-bottom">
          <p class="serif left">photoshop<br>illustrator<br>sketch<br>love<br></p>
          <p class="serif right">javascript<br>css<br>framework<br>brain<br></p>
          <p class="font note" v-if="isPad">design<br>x<br>code</p>
          <p class="font note" v-else>scroll down<br><i class="fas fa-long-arrow-alt-down"></i></p>
        </div>
        
      </div>    
</template>

<script>

export default {
  data:function(){
    return{
       leftTurn:'',
       autoChangeLeft:'',
       autoChangeRight:'',
       nowBk:'one',
       nowNum:2,
       bkList:['one','two','three'],
       blueList:['default','light','dark']
    }  
  },
  props:['secAnimate','isPad'],
  methods:{
    stopChange:function(){
      var vm=this;
      clearTimeout(vm.autoChangeLeft);
    },
    changeBk:function(){
      var vm=this;
      if(this.nowNum !== 2){
        this.nowNum = Number(this.nowNum+1)
      }else{
        this.nowNum = Number(0)
      }
      this.nowBk = this.bkList[this.nowNum];
      this.leftTurn = this.blueList[this.nowNum];
      this.autoChangeLeft = setTimeout(vm.changeBk,2500);
    }
  },
  mounted:function(){
    this.changeBk()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@keyframes jumpTxt {
  100% {
    transform: translateY(35px);
    opacity: 0.1;
  }
}
.note{
    i{
        animation: jumpTxt 1.5s infinite;
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.main-container{
    &.active{
      .slogan{
        opacity: 1;
      }
    }
}
@mixin abso($top,$left){
  position: absolute;
  top: $top;
  left: $left;
}
$dotsize : 15px;
.change-bk{
  li{
    display: block;
    width: $dotsize;
    height: $dotsize;
    margin: 10px 0;
    border-radius: $dotsize;
    background: #fff;
    cursor: pointer;
    &:hover{
      background: #999;
    }
  }
}
@mixin part{
    width: 50%;
    height: 85vh;
    position: relative;
}
.part-left{
  @include part;
  float: left;
  .txts{
    @include abso(55%, 4%);
    text-align: left;
  }
}
.part-bottom{
  width: 96%;
  height: 20vh;
  display:flex;
    align-items:center;
    justify-content:center;
  border-bottom: 1px solid #a5a5a5;
  border-right: 1px solid #a5a5a5;
  position: absolute;
  bottom: 5%;
  left: 2%;
  opacity: .9;
  background: #fff;
  text-align: center;
  .left{
    text-align: left;
    @include abso(auto, 0);
    bottom: 10%;
    transform: rotate(-90deg);
  }
  .right{
    text-align: left;
    @include abso(10%, auto);
    right: 0;
    transform: rotate(90deg);
  }
}
.part-right{
  @include part;
  float: right;
  .txts{
    @include abso(2%, auto);
    right: 4%;
    text-align: right;
  }
  .change-bk{
    float: right;
  }
}

.slogan{
  font-size: 5.5rem;
  color: #fff;
  @include abso(15%,50% );
  transform: translateX(-45%);
  opacity: 0;
  transition: all 2s ease;
}
.bk-azure{
    transition: all 1.5s ease;
  background: #0064df;
    &.dark{
        background: #033777;
    }
    &.default{
        background: #0064df;
    }
    &.light{
        background: #6aacfc;
    }
}
.r-bk{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
@media screen and (max-width: 768px){
  .slogan{
    font-size: 4rem;
  }
  .part-left .txts{
    top: 45%;
  }
}
</style>
