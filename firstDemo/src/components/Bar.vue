<template>
  <ul class="bar-list">
    <li  v-for="item in barList" :class="item.className">
      <a v-link="{name:item.path,activeClass:'active'}" v-text="item.name"></a>
    </li>
   
  </ul>
</template>
<script>
export default {  
  route:{
    data({ to: { params: { tab = 'all', page = 1 } } }){
      console.log(123)
    },
    activate(transition){
      console.log('ccccc,',transition)
    }
  } ,
  data () {
    return {
      barList:[{
        className:'index',
        path:'/main/index',
        name:'首页'
      },{
        className:'address',
        path:'/main/nation',
        name:'国家队'
      },{
        className:'community',
        path:'/main/community',
        name:'社区'
      },{
        className:'setting',
        path:'/main/setting',
        name:'设置'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
@function toRem($px) {
   @return $px / 37.5px * 1rem;
}
.bar-list{
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  width:toRem(750px);
  height: toRem(100px);
  background: #ddd;
  border-top: 1px solid rgba(174,174,174,.5);
  li{
    float: left;
    width:25%;
    height: 100%;
    text-align: center;
    line-height: toRem(160px);
    font-size: toRem(30px);
    color:#444;
    a{
      color:#444;
    }
   .active{
     color:red;
   }
  }  
  .index{
    background: no-repeat center toRem(10px) url(../assets/images/index.png);
    background-size: auto 50%;
   
  }
    .address{
    background: no-repeat center toRem(10px) url(../assets/images/address_book.png);
    background-size: auto 50%;
   
  }
    .community{
    background: no-repeat center toRem(10px) url(../assets/images/community.png);
    background-size: auto 50%;
   
  }
    .setting{
    background: no-repeat center toRem(10px) url(../assets/images/setting.png);
    background-size: auto 50%;
   
  }
}
</style>
