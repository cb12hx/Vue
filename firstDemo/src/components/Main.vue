<template>
  <div class="page">  
      <bar >      
      </bar>
      <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>

<script>
import adapt from '../assets/js/adapt'

import Bar from './Bar'
import store from '../vuex/store' // import 我们刚刚创建的 store
export default { 
  components: {
    Bar
  },
  ready:function(){
  },
  store
}
</script>
<style>  
.fade-transition {
  transition: opacity .1s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style>
