<template>
    <div class="community">
      <ul>
        <li v-for="item in dataList">
        <section class="head">
          <img :src=`/static/images/community/${item.head}.jpg` />
          <p v-text="item.nickName"></p>
        </section>
        <section class="content" v-text="item.des">
          
        </section>  
        <section class="laudList">
          <img  v-for="child in item.markList" :src=`/static/images/community/${child}` />      
        </section>
        <section class="buttonList">
          <p class="laud"></p>
          <p class="unlaud"></p>
        </section>
        </li>
      
      </ul>
    </div>
</template>

<script>
import initialData from '../assets/data/initialData';
export default {
  data () {
    return {
      dataList:initialData.community
    }
  }
}
</script>
<style scoped lang="scss">
  @function toRem($px) {
     @return $px / 37.5px * 1rem;
  }
  .community{
     padding-bottom: toRem(120px);
    li{
      position: relative;
      width:toRem(710px);      
      height: toRem(400px);
      margin:toRem(20px);

      background: #fff;
      .head{
         padding:toRem(20px);
        img{
          width:toRem(50px);
          height: toRem(50px);         
          border-radius: 50%;
          float: left;
        }
        p{
          margin-left: toRem(10px);
          float: left;
          font-size: toRem(36px);
          color:#444;
        }
        &:after{
          content:'.';
          clear: both;
          visibility: hidden;
          display: block;
          height: 0px;
        };
      }
     .content{
      color:#444;
      font-size: toRem(30px);
      margin:0px toRem(20px);
      height: toRem(140px);
      line-height: toRem(50px);
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
     } 
     .laudList{
      width:toRem(670px);
      height: toRem(50px);
      margin:toRem(20px);
      padding-bottom: toRem(10px);
      border-bottom: 1px solid rgba(174,174,174,0.5);
      img{
        width:toRem(40px);
        height:toRem(40px);
        border-radius: 50%;
        float: left;
        margin-right: toRem(10px);
      }
     }
     .buttonList{
      p{
        width:toRem(44px);
        height: toRem(56px);
        margin-left: toRem(20px);
        float: left;
      }
      .laud{
          background: url(/static/images/community/laud.png);
      }
      .unlaud{
        margin-left: toRem(30px);
        background: url(/static/images/community/unlaud.png) 0px toRem(-10px); 
      }
     }
    }
  }
</style>