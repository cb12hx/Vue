<template>
 <div class="spinner">
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>
</div>
</template>
<script>
export default {
  ready () {
    setTimeout(() => {
      this.$route.router.go({path: '/index', replace: true})
    }, 1200)
  }
}
</script>
<style lang="scss" scoped>
@function toRem($px) {
   @return $px / 37.5px * 1rem;
}
.spinner{
    margin: toRem(300px) auto 0;
    width:toRem(180px);
    text-align: center;
    div{
      width: toRem(60px);
      height: toRem(60px);
      background-color: #7b7b7b;     
      border-radius: 100%;
      float: left;
      animation: bouncedelay 1.4s infinite ease-in-out;
      animation-fill-mode: both;
  }
  .bounce1 {
    animation-delay: -0.32s;
  }
   
   .bounce2 {
    animation-delay: -0.16s;
  }
}
@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
  } 40% {
    transform: scale(1.0);
  }
}
</style>
