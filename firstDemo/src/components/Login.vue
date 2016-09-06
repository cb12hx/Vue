<template>
  <div class="login">
      <div class="form"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: '用户登录!'
    }
  }
}
</script>
<style lang="scss" scoped>
  @function toRem($px) {
    @return $px / 37.5px * 1rem;
  }
  
  .login {
    width:100%;
    height:100%;  
    background:#fff;
    overflow:hidden;
    .form {
      width: toRem(750px);
      height:100%;

      background: no-repeat left top url(../assets/images/bg.png) ;
      background-size: 100% auto;
    }
  }
</style>