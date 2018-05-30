<template>
  <div class="card">
    <div class="card-img-top img-container" :style="{background : cardColor}">
        <a :href="link" target="_blank"><img class="card-img-top" :src="workImg" :id="workId" :alt="cardTitle" v-on:click="linkCard"></a>
    </div>
    
    <div class="card-body">
        <h6 class="font">{{ cardTitle}}</h6>
        <!-- <p class="card-text font-ch">產業類別: {{cardText}}</p> -->
    </div>
</div>
</template>

<script>
export default {
    props: ['workImg','cardTitle','cardText','cardColor','workId','link'],
    methods:{
      linkCard:function(event){
         this.$emit('linkCard',event)
      }
    }
}
</script>

<style scoped lang="scss">
.card{
  width: 28%;
  margin: 2% 2%;
  float: left;
  border: 0;
  background: #fff;
  text-align: left;
  h6{
    //font-weight: bold;
  }
  p{
    font-size: 14px;
  }
}
.img-container{
  //max-height: 150px;
//   overflow: hidden;
  
  &:hover{
    img{
        opacity: 1;
        -webkit-filter: blur(0px);
            -moz-filter: blur(0px);
            -o-filter: blur(0px);
            -ms-filter: blur(0px);
            filter: blur(0px);
        }
        
      }
  img{
    transition: opacity .5s ease-out;
    opacity: .4;
    -webkit-filter: blur(2px);
            -moz-filter: blur(2px);
            -o-filter: blur(2px);
            -ms-filter: blur(2px);
            filter: blur(2px);
      
  }
}
@media screen and (max-width: 700px) and (orientation: portrait){
  .card{
    width: 90%;
    margin: 3% 5%;
  }
}
</style>
