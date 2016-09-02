<template>
  <div class="page">  
      <bar :barlist=barList>      
      </bar>
      <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>

<script>
import adapt from './assets/js/adapt'
import Index from './components/Index'
import Bar from './components/Bar'
import store from './vuex/store' // import 我们刚刚创建的 store
export default { 
  components: {
    Bar,
    Index
  },
  data:function(){
    return {
      barList:[{
        className:'index',
        path:'index',
        name:'首页'
      },{
        className:'address',
        path:'nation',
        name:'国家队'
      },{
        className:'community',
        path:'community',
        name:'社区'
      },{
        className:'setting',
        path:'setting',
        name:'设置'
      }]
    }
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
