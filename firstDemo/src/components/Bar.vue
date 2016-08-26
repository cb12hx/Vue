<template>
  <ul class="bar-list">
    <li  v-for="item in barList" :class="item.className">
      <a v-link="{path:item.path}" v-text="item.name"></a>
    </li>
   
  </ul>
</template>
<script>
export default {
  data () {
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
  width:100%;
  height: toRem(100px);
  background: #f0f0f0;
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
