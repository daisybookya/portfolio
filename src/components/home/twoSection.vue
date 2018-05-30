<template>
    <div class="main-container" v-bind:class="{'active' : secAnimate}">
        <div class="bk-snow part-xl" >
            <div class="content">
                    <ul class="serif descript ">
                        <li>Front-end development</li>
                        <li>Web Design</li>
                        <li>Identity</li>
                    </ul>

                    <router-link :to="{ name: 'design'}" class="font btn-more"><span>MORE<i class="fas fa-long-arrow-alt-right"></i></span></router-link>
            </div>
            
        </div>
        <div class="bk-blue part-m" >
             <p class="script title home-title" >projects</p>
        </div>
        
      </div>    
</template>

<script>

export default {
  data:function(){
    return{
        isActive:false,
    }  
  },
  props:['secAnimate'],
  methods:{
      linkArea:function(){
          this.isActive = !this.isActive;
          console.log(this.isActive)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@mixin abso($top,$left){
  position: absolute;
  top: $top;
  left: $left;
}

.title{
    color: #fff;
    margin-top: -20px;
    transform: translateX(-410px);
    transition: all .5s ease-out;
}
.main-container{
    &.active{
        .title,a.btn-more{
            transform: translateX(0px);
            opacity: 1;
        }
        .descript{
            li{
                transform: translateX(0px);
                opacity: 1;
            }
        }

    }
}
.content{
    @include abso(10%,45% )
}

.descript{
    color: #033777;
    &:after{
        content: '';
        width: 15px;
        height: 1px;
        display: block;
        margin: 10px 0;
        //background: #fff;
    }
    li{
        //float: left;
        min-width: 250px;
        transform: translateX(100px);
        opacity: 0;
      @for $i from 1 through 3{
          &:nth-child(#{$i}){
              transition: all 0.5s+($i/10) ease-in-out;
          }
      }
    }
}
a.btn-more{
    @include abso(105%, 0);
    opacity: 0;
    color: #033777;
    border-color: #033777;
    transform: translateX(100px);
    transition: all .5s ease-out;
}
.bk-snow{
    background: url('../../assets/fresh_snow.png');
}
.bk-blue{
    transition: all 1.5s ease;
    background: #033777;
    &:hover{
        background:#0064df;
    }
}

</style>
