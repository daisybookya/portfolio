<template>
  <div class="card">
    <div class="card-img-top img-container" :style="{background : cardColor}">
        <router-link :to="{ name: 'project', params: { worksId: workId , directPage : true }}"><img class="card-img-top" :src="workImg" :id="workId" :alt="cardTitle" v-on:click="clickCard" v-on:mouseover="previewCard" v-on:mouseleave="previewCard"></router-link>
    </div>
    
    <div class="card-body">
        <h6 class="font-ch">{{ cardTitle}}</h6>
        <p class="card-text font">{{cardText}}</p>
    </div>
</div>
</template>

<script>
export default {
    props: ['workImg','cardTitle','cardText','cardColor','workId'],
    methods:{
      previewCard:function(event){
         this.$emit('previewCard',event)
      },
      clickCard:function(event){
         this.$emit('clickCard',event)
      }
    }
}
</script>

<style scoped lang="scss">
.card{
  width: 22%;
  margin: 2% 1%;
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
