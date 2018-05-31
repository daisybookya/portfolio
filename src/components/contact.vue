<template>
  <div class="contact slide-run">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdsvXROEZDwUVeDHgC_XqvRS5OKczrfhJkp0bK5Ql2D8hVkfw/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">載入中…</iframe>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show:false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contact{
  height: 1300px;
  //background: rgb(231, 195, 141);
/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#e7c38d+1,d7eaa8+100 */
background: rgb(231,195,141); /* Old browsers */
background: -moz-linear-gradient(left, rgb(231,195,141) 1%, rgb(215,234,168) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(left, rgb(231,195,141) 1%,rgb(215,234,168) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to right, rgb(231,195,141) 1%,rgb(215,234,168) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e7c38d', endColorstr='#d7eaa8',GradientType=1 ); /* IE6-9 */
  iframe{
    animation:opacity-run 2s 1 ;
  }
}
@keyframes opacity-run {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
