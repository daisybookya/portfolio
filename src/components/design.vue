<template>
<div class="design" :style="{backgroundImage : 'url('+picture+')'}">
  <designdefault title=projects></designdefault>
  <div class="pro-list">
    <div class="list-container">
        <develop-card v-for="works in developlist" :link="works.link" :key="works.id" :work-id="works.id" :work-img="works.cover" :card-title="works.name" :card-color="works.color"></develop-card>
        <router-link :to="{ name: 'project', params: { worksId: project.id , directPage : true }}"><design-card v-on:clickCard="showContent" v-on:previewCard="previewWork" v-for="works in designlist" :key="works.id" :work-id="works.id" :work-img="works.cover" :card-title="works.name" :card-color="works.color"></design-card></router-link>          
    </div>
  </div>
  <transition name="fade">
  <view-work v-bind:class="{active : isactive , hover : ishover ,leave : isleave}" v-on:clickClose="closeView" :bk-url="project.bk" :pre-txt="project.txt" :pro-text="project.category" :img-list="project.content"></view-work>
  </transition>
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
        txt:'',
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
      document.getElementsByClassName('works-page')[0].style.display = 'block';
      this.project.category = this.designlist[this.project.id].category;
      this.project.content = this.designlist[this.project.id].content;
    },
    previewWork:function(event){
      if(!this.ishover){
        this.ishover = true;
        let _id = event.target.getAttribute("id");
        this.project.id = _id;
        this.project.bk = this.designlist[this.project.id].preview;
        this.project.txt = this.designlist[this.project.id].name;
      }else{
        this.ishover = false;
      }

    }
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
.design{
  width: 100%;
  height: 85vh;
  overflow: hidden;
  position: relative;
  background: #eee;
  //background: url('../../static/fresh_snow.png'); 
      /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#c5c4c6+0,d7dee3+32,d7dee3+32,d7dee3+53,c1c5cc+78,f5f7f9+100 */
// background: rgb(197,196,198); /* Old browsers */
// background: -moz-linear-gradient(-45deg, rgb(197,196,198) 0%, rgb(196,200,206) 0%, rgb(235,236,244) 26%, rgb(208,210,216) 66%, rgb(244,248,255) 101%); /* FF3.6-15 */
// background: -webkit-linear-gradient(-45deg, rgb(197,196,198) 0%,rgb(196,200,206) 0%,rgb(235,236,244) 26%,rgb(208,210,216) 66%,rgb(244,248,255) 101%); /* Chrome10-25,Safari5.1-6 */
// background: linear-gradient(135deg, rgb(197,196,198) 0%,rgb(196,200,206) 0%,rgb(235,236,244) 26%,rgb(208,210,216) 66%,rgb(244,248,255) 101%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
// filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c5c4c6', endColorstr='#f4f8ff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
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
  width: 75%;
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
