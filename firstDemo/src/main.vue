<template>
  <div class="page">     
      <bar>      
      </bar>
      <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>

<script>
import adapt from './assets/js/adapt'
import Index from './components/Index'
import Bar from './components/Bar'
export default { 
  components: {
    Bar,
    Index
  }
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
