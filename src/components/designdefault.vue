<template>
  <div class="default-half">
      <p class="script" :class="{ color: fontColor}">{{ title }}</p>

  </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    props: ['title','fontColor'],
}
</script>

<style scoped lang="scss">

.default-half{
    width: 25%;
    height: 85vh;
    float: left;
    overflow: hidden;
    position: relative;
    background: #033777;
    p{
        //width: 80px;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: #fff;
        font-size: 40PX;
        //font-weight: bold;
        letter-spacing: 1px;
        &:after{
            //content:'';
            //width: 80px;
            height: 15px;
            display: block;
            position: relative;
            top: -22px;
            margin-top: 5px;
            //border: 1px dashed #333;
            background: #fff;
            z-index: -1;

        }
        &.color{
            color: #fff;
            &:after{
                background: #fff;
            }
        }
    }
}
.preview-work{
  width: 100%;
  height: 100%;
  background-color: wheat;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 19;
  background-repeat: no-repeat;
  background-color: #EEE;
  background-size: cover;
  &.close{
      z-index: 1;
  }
  p{
      color: #fff;
  }
}
</style>
