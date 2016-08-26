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

