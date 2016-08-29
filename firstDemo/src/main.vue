<template>
  <div class="page">  

      <bar index=1>      
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
  },
  data:function(){
    return {
      path:this.$route.path
    }
  },
  ready:function(){
    console.log(this.path)
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
