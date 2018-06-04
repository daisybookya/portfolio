<template>
<div class="design slide-run" :style="{backgroundImage : 'url('+picture+')'}">
  
  <div class="pro-list">
    <div class="list-container">
        <design-card v-on:clickCard="showContent" v-on:previewCard="previewWork" v-for="works in designlist" :key="works.id" :work-id="works.id" :work-img="works.cover" :card-text="works.name" :card-title="works.type" :card-color="works.color"></design-card>        
        <develop-card v-for="works in developlist" :link="works.link" :key="works.id" :work-id="works.id" :work-img="works.cover" :card-title="works.type" :card-text="works.name" :card-color="works.color"></develop-card>
    </div>
  </div>
  <!-- <designdefault title=projects></designdefault> -->
</div>

</template>

<script>
import designdefault from './designdefault'
import designCard from './designCard'
import developCard from './developCard'
import viewWork from './viewWork'
export default {
  data () {
    return {
      designlist:[],
      developlist:[],
      ishover:false,
      isactive:false,
      isleave:false,
      picture:'./static/fresh_snow.png',
      turnOff:'',
      project:{
        id:'',
        bk:'',
        name:'',
        txt:'',
        color:'',
        category:'',
        content:[]
      }
    }
  },
  components:{
    designdefault,designCard,viewWork,developCard
  },
  methods:{
    closeView:function(){
      let _vm = this;
      _vm.isactive = false;
      _vm.isleave = true;
      _vm.project.content = [];

      this.turnOff = setTimeout(function(){
        _vm.isleave = false;
         document.getElementsByClassName('works-page')[0].removeAttribute('style');
      },1500)
    },
    showContent:function(event){
      this.isactive = true;
      //document.getElementsByClassName('works-page')[0].style.display = 'block';
      this.project.category = this.designlist[this.project.id].category;
      this.project.content = this.designlist[this.project.id].content;
      this.project.name = this.designlist[this.project.id].name;
      
    },
    previewWork:function(event){
      if(!this.ishover){
        this.ishover = true;
        let _id = event.target.getAttribute("id");
        this.project.id = _id;
      }else{
        this.ishover = false;

      }

    },

  },
  created: function () {
    var vm = this;
    fetch('./static/design.json')
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        vm.designlist = data;
      });
    fetch('./static/develop.json')
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        vm.developlist = data;
      });

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.design{
  width: 100%;
  height: 85vh;
  overflow: hidden;
  position: relative;
  background: #eee;
}
a{
  &:hover{
    color:#555;
  }
}
.list-container{
  padding-left: 5%;
}
.pro-list{
  width: 100%;
  height: 85vh;
  overflow-y: scroll;
  float:right;
}
@media screen and (max-width: 1024px){
  .default-half{
    display: none;
  }

  .pro-list{
    width: 100%;
  }
}
@media screen and (max-width: 768px){
  .list-container{
    padding-left: 0;
  }
}
</style>
