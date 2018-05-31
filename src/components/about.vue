<template>
<div class="about slide-run">
  <designdefault title=about ></designdefault>
  <div class="main">
    <div class="container">
        <div class="picture" :style="{backgroundImage : 'url('+picture+')'}"></div>
        <p class="font bold">Sunday studio</p>
        <p class="font">daisy,</p>
        <p class="font">a designer and front-end developer.</p>
        <p class="font">E-mail : daisybookya@gmail.com</p>
    </div>
  </div>
</div>

</template>

<script>
import designdefault from './designdefault'
export default {
  data () {
    return {
      picture:'./static/about.png',
    }
  },
  components:{
    designdefault
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.about{
  width: 100%;
  height: 85vh;
  overflow: hidden;
  position: relative;
/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#a3ccb3+0,bdb5dd+100 */
background: rgb(163,204,179); /* Old browsers */
background: -moz-linear-gradient(left, rgb(163,204,179) 0%, rgb(189,181,221) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(left, rgb(163,204,179) 0%,rgb(189,181,221) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to right, rgb(163,204,179) 0%,rgb(189,181,221) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a3ccb3', endColorstr='#bdb5dd',GradientType=1 ); /* IE6-9 */

  a{
    &:hover{
      color:#555;
    }
  }
}
.main{
  width: 75%;
  height: 85vh;
  //overflow-y: scroll;
  float:right;
  line-height: 24px;
  p{
    padding: 5px;
    &.bold{
      font-weight: bold;
    }
  }
}
$pic : 250px;
.picture{
  width: $pic;
  height: $pic;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: $pic;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 100%;
}
.container{
  position: relative;
  top: 50%;
  transform: translateY(-60%);
}
@media screen and (max-width: 1024px){
  .default-half{
    display: none;
  }

  .main{
    width: 100%;
  }
}
@media screen and (max-width: 768px)and (orientation:  landscape ){
    $pic : 200px;
.picture{
    width: $pic;
    height: $pic;
    border-radius: $pic;
  }
  .main{
    p{
      padding: 0;
    }
  }
  .container{
    transform: translateY(-50%);
  }
}
</style>
