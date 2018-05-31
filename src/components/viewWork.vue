<template>
    <div class="works-page slide-run">
        <div class="shadow"></div>
        <div class="preview-work" :style="{backgroundImage : 'url('+project.preview+')',backgroundColor : project.color}"><p class="font"></p></div>
        <div class="height project-view">
                <p class="font-ch">{{project.txt}}</p>
                <p class="font-ch">產業類別 : {{project.category}}</p>
                <router-link :to="{ name: 'design'}" class="btn-close font" v-on:click="clickClose"><i class="fas fa-undo fa-2x" ></i>Back</router-link>
                <div class="img-container">
                    <img v-for="n in project.list" :src="n" ></img>
                </div>
                
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            directPage:false,
            project:{
                category:'',
                list:[],
                preview:'',
                txt:'',
                color:''
            }
        }
    },
    props:['bkUrl','preTxt','imgList','proText'],
    methods:{
        clickClose:function(){
         this.$emit('clickClose')
      },
        getProjectData:function(id){
            var vm = this
            fetch('./static/design.json')
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                vm.getInfor(data[id]);
            });
            
        },
        getInfor:function(data){
            this.project.txt = data.type;
            this.project.list = data.content;
            this.project.category = data.category;
            this.project.preview = data.preview;
            this.project.color = data.color;
        },
        getPath:function(){
            let _path = this.$route.path,
                _mainObj = document.getElementsByClassName('works-page')[0];
            if(_path.indexOf('project') > -1){
                //_mainObj.style.display = 'block';
                _mainObj.classList.add('active');
            }
        }
    },
    watch:{
        bkUrl(val) {
            this.project.preview = val;
        },
        preTxt(val) {
            this.project.txt = val;
        },
        imgList(val) {
            this.project.list = val;
        },
        proText(val) {
            this.project.category = val;
        },
    },
    created:function(){
        console.log('viewwork:created')
        if(this.$route.path.indexOf('project') > -1){
            this.getProjectData(this.$route.params.worksId);
            
        }
    },
    mounted:function(){
        this.getPath();
    }
}
</script>

<style scoped lang="scss">
a.btn-close{
    padding: 0;
    position: fixed;
    top: 80%;
    right: -10%;
    transition: all .8s ease-in;
    z-index: 80;
    font-size: 14px;
    cursor: pointer;

        &:hover{
            color:rgb(0, 159, 180);
        }

    i{
        display: block;
        margin-bottom: 10px;
    }
}
.works-page{
    width: 100%;
    height: 85vh;
    position: relative;
    overflow: hidden;
    //display: none;
    &.hover{
        display: block;
        animation: fade-in .8s;
    }
    &.active{
        //display: block;
        .shadow{
            width: 100%;
            height: 85vh;
            display: block;
            opacity: .3;
            //background: #fff;
        }
        .preview-work{
            width: 35%;
        }
        .project-view{
            left: 36%;
        }
        .img-container{
            opacity: 1;
            img{
                
            }
        }
        .btn-close{
            right: 8%;
        }
    }
    &.leave{
        .shadow{
            width: 100%;
            height: 85vh;
            display: block;
            // opacity: .2;
            // background: #fff;
        }
        .preview-work{
            animation:slideout 1s 1;
            animation-delay:.8s;
        }
        .project-view{
            animation:slideleft 1.5s 1;
            animation-fill-mode:forwards;
        }
    }
 
}
.shadow{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 15;
    transition: opacity .5s ease-in;

}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideout {
  0% {
    left: 0;
  }
  100% {
    left:-35%;
  }
}
@keyframes slideleft {
  0% {
    left: 36%;
  }
  100% {
    left:-65%;
  }
}
.preview-work{
  width: 25%;
  height: 85vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 65;
  transition: all 1s ease-in;
  background-color: #202020;
  background-repeat: no-repeat;
  background-size: cover;
    p{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        color: #FFF;
        font-size: 18px;
    }
  }

.bk-preview{
    z-index: 55;
}
.project-view{
    width: 65%;
    height: 85.5vh;
    padding-top: 30px;
    position: absolute;
    top: -1px;
    left: -40%;
    //background: url('../assets/knit.png');
    background:#eee;
    transition: all 1s linear;
    // transform: translateX(-100%);
    z-index: 50;

    >p{
        padding: 5px 0;
        &:first-child{
            font-weight: bold;
        }
    }
    img{
        margin-bottom: 30px;
    }
    .img-container{
        clear: both;
        opacity: 0;
        transition: all 2.5s ease-in;
        img{
            margin: 20px auto;
            width: 80%;
            
        }
    }
}
@media screen and (max-width: 1024px){
.preview-work{
    width: 0;
  }
  .project-view{
    width: 101%;
    left: -101%;
    }
    .works-page{
        &.active{
            .preview-work{
                width: 0;
            }
            .project-view{
                left: 1%;
            }
            .btn-close{
                right: 12%;
            }
        }
    }
    @keyframes slideleft {
        0% {
            left: 0%;
        }
        100% {
            left:-101%;
        }
    }
}
@media screen and (max-width: 768px){
  .works-page{
        &.active{

            .project-view{
                left: auto;
                right: 0;
            }
            .btn-close{
                right: 5px;
            }
        }
    }
}
</style>
