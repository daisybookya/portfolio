<template>
<div class="service">
    <div class="main">
        <div class="feature" :class="{active : feature}">
          <div class="feature-container">
            <i class="fab fa-adn fa-3x"></i>
          <h4 class="font">Identity design</h4>
          <ul class="font-ch">
            <li>識別設計</li>
            <li>名片設計</li>
            <li>文宣設計</li>
          </ul></div>
        </div>
        <div class="feature" :class="{active : feature}">
          <div class="feature-container">
            <i class="fas fa-pencil-alt fa-3x"></i>
            <h4 class="font">Web design</h4>
            <ul class="font-ch">
              <li>網頁設計</li>
              <li>響應式設計</li>
              <li>app設計</li>
            </ul>
          </div>
        </div>
        <div class="feature" :class="{active : feature}">
          <div class="feature-container">
            <i class="fas fa-code fa-3x"></i>
            <h4 class="font">Front-end <br>development</h4>
            <ul class="font-ch">
              <li>前端網頁開發</li>
              <li>RWD</li>
            </ul></div>
          </div>

        <div class="query font-ch" :class="{active : feature}">
          歡迎詢問合作細節，使用<router-link to="/contact">contact填寫線上表單</router-link>或是mail到daisybookya@gmail.com，謝謝您的來信
        </div>

        </div>


        
    </div>

</div>

</template>

<script>
export default {
  data () {
    return {
      designlist:[],
      feature:false,
    }
  },
  components:{
  },
  mounted:function(){
    var vm =this;
    setTimeout(function(){
        vm.feature = true;
    },1200)
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.service{
  width: 100%;
  height: 85vh;
  overflow: hidden;
  position: relative;
  padding-top: 30px;
/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#a6c2dd+1,eac8bb+100 */
background: rgb(166,194,221); /* Old browsers */
background: -moz-linear-gradient(left, rgb(166,194,221) 1%, rgb(234,200,187) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(left, rgb(166,194,221) 1%,rgb(234,200,187) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to right, rgb(166,194,221) 1%,rgb(234,200,187) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6c2dd', endColorstr='#eac8bb',GradientType=1 ); /* IE6-9 */
}
.main{
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.query{
  margin: 5% auto 0 auto;
  padding: 20px;
  width: 100%;
  //max-width: 760px;
  line-height: 24px;
  //border-bottom: 1px solid #fff;
  transition: all 1s linear;
  background: #033777;
  color: #fff;
  opacity: 0;
  transform: translateX(-50px);
  &.active{
    opacity: 1;
    transform: translateX(0px);
  }
  a{
    color: #bfc4d1;
    &:hover{
      color:#009fb4;
    }
  }
}
$size:290px;
.feature{
  display: inline-flex;
  width: $size;
  height: $size;
  border-radius: $size;
  padding: 20px 0;
  margin: 20px 2%;
  text-align: center;
  opacity: 0;
  transform: translateX(-50px);
  border: 2px solid #fff; 
  @for $i from 1 through 3{
          &:nth-child(#{$i}){
              transition: all 0.2s+($i/5) linear;
          }
      }
  &.active{
    opacity: 1;
    transform: translateX(0px);
  }
  .feature-container{
    margin: 0 auto;
    h4{
      padding: 10px 0;
      font-size: 20px;
      //font-weight: bold;
      &:after{
        content: '';
        width: 30px;
        height: 1px;
        display: block;
        margin: 20px auto 0 auto;
        background: #fff;
      }
    }
    ul{
      li{
        padding: 10px 0;
      }
    }
  }
}

@media screen and (max-width: 1024px){
  $size:230px;
  .feature{
    width: $size;
    height: $size;
    padding: 20px 0 10px 0;
    margin: 20px 5px;
    .feature-container{
      h4{
        margin-bottom: 0;
        &:after{
          margin: 10px auto 0 auto;
        }
      }
      ul{
        li{
          padding: 6px 0;
        }
      }
    }
  }
}
@media screen and (max-width: 768px){
  .service{
    overflow-y: scroll;
  }
  .main{
    position: relative;
    top: auto;
    transform: none;
  }
}
</style>
