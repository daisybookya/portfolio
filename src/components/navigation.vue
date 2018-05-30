<template>
  <header class="is-fixed">
    <h1 class="logo" @click="navOpen = false"><router-link to="/"><span>daisy</span> portfolio</router-link></h1>
    <button class="menu" @click="navOpen = !navOpen" v-bind:class="{active : navOpen}" >
        <span v-if="!navOpen"><i class="fas fa-bars fa-2x" ></i><h4>menu</h4></span>
        <span v-else><i class="fas fa-times fa-2x"></i><h4>close</h4></span>
    </button>

      <div class="m-container" v-bind:class="{active : navOpen}">
        
        <ul class="m-list" >
          <li><a href="/">Home</a></li>
          <li><a @click="navOpen = false"><router-link to="/works">Projects</router-link></a></li>
          <li><a @click="navOpen = false"><router-link to="/service">Service</router-link></a></li>
          <li><a @click="navOpen = false"><router-link to="/about">About</router-link></a></li>
          <li><a @click="navOpen = false"><router-link to="/contact">Contact</router-link></a></li>
        </ul>
      </div>

    </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      navOpen : false,
    }
  },
  props:['showlogo'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header{
  position: relative;
  height: 7.5vh;
  h1{
    font-size: 32px;
  }
}
.m-container{
  position: fixed;
  top: 7.5vh;
  left: 0;
  width: 100%;
  z-index: 155;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.5s ease-out;
  &.active{
    opacity: .9;
    max-height: 240px;
    .m-list{
      li{
          transform: translateX(0px);
      }
    }
  }
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#a1eaaa+1,8fd6e0+100 */
  background: rgb(161,234,170); /* Old browsers */
  background: -moz-linear-gradient(45deg, rgb(161,234,170) 1%, rgb(143,214,224) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg, rgb(161,234,170) 1%,rgb(143,214,224) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg, rgb(161,234,170) 1%,rgb(143,214,224) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a1eaaa', endColorstr='#8fd6e0',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.m-list{
  padding: 15px 0;
  font-family: 'Comfortaa', monospace ,sans-serif;

  li{
    box-sizing: initial;
    width: 170px;
    padding: 5px;
    margin: 10px auto;
    transform: translateX(-50px);
      @for $i from 1 through 5{
          &:nth-child(#{$i}){
              transition: all 0.2s+($i/10) linear;
          }
      }
      a{
        padding: 2px 5px;
        display: inline-block;
        transition: all 0.1s linear;
        &:hover{
          color: #fff;
          font-weight: bold;
          //border-bottom: 2px solid #fff;
        }
        
      }
  }
}
.logo{
  position: fixed;
  top: 4.5vh;
  left: 8vh;
  z-index: 255;
  //float: left;
  //animation:mymove 5s 1 5s normal;
  font-family: 'Meddon', cursive;
  font-weight: bold;
  color: #111;
  span{
  }
  a:hover{
    color:rgb(0, 159, 180);
  }
}
@keyframes mymove
{
  0% {transform: rotateY(0);}
  50%{
    color: #eee;
    transform: rotateY(180deg);
  }
  100% {
    width: auto;
    transform: rotateY(0deg);
    background: #fff;
    color: #000;
  }
}
.menu{
  //float: right;
  position: fixed;
  top: 7.5vh;
  right: 2vw;
  z-index: 99995;
  //margin-top: 15px;
  cursor: pointer;
  
  font-family: 'Comfortaa', monospace ,sans-serif;
  &.active{
    //color:rgb(0, 159, 180);
    color: #fff;

  }
  &:hover{
    color:#777;
    i{
      transform: rotateY(180deg);
    }
    h4{
    opacity: 1;
    }
  }

  i,h4{
    display: block;
    transition: all .3s ease-in;
  }
  i{
    //margin-right: 10px;
    vertical-align: middle;
    transition: .5s all ease-in;
  }
  h4{
    opacity: 0;
    font-size: 14px;
  }
  
}
@media screen and (max-width: 1300px){
  .logo{ 
    left: 5px;
  }
}
@media screen and (max-width: 768px){
    .logo,.menu{
        top: 3.7vh;
        transform: translateY(-40%);
        h4{
          opacity: 1;
        }
    }

}
@media screen and (max-width: 768px)and (orientation:  landscape ){
    .logo,.menu{
        top: 6vh;
        h4{
          opacity: 0;
        }
    }
    
}
</style>
