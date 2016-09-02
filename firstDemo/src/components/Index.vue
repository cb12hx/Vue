<template>
  <nav class="index">
    <swiper></swiper>
    <div class="speaker">
        <ul>
          <li>华东地区的冠军是擦神，但是他是一个不能fifa的玩家</li>
        </ul>
    </div>
    <div class="itemList">
      <ul>
        <li v-for="item in subItem">
          <img :src=`/static/images/index/${item.img}.png` />
          <p v-text="item.title"></p>
        </li>
      </ul>
    </div>
  <div class="infoList">

    <li v-for="item in dataList">
      <img :src="item.img" />
      <div >
        <p v-text="item. title"><p>
        <section v-text="item.des"></section>
      </div>
    </li>
     
  </div>
</nav>
</template>

<script>
import initialData from '../assets/data/initialData';
import Swiper from './Swiper'
export default { 
  components: {
    Swiper
  },
  data(){
    return{
      dataList:initialData.index_List,
      subItem:[
        {
          img:'world_football',
          title:'天下足球'
        },
        {
          img:'fifa',
          title:'FIFA动态'
        },
        {
          img:'world_cup',
          title:'我爱世界杯'
        },
        {
          img:'history',
          title:'历史今天看'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
@function toRem($px) {
   @return $px / 37.5px * 1rem;
}
.index{
  background: #fff;
  width:toRem(750px);
  .speaker{
    width:100%;
    height: toRem(60px);
    background: no-repeat toRem(10px) center url(../assets/images/speaker.png);
    background-size: auto 80%;
    border-bottom: 1px solid rgba(174,174,174,.2);
    li{
      text-indent: toRem(60px);
      height: 100%;
      width:95%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      line-height: toRem(65px);
      font-size: toRem(26px);
      color:#444;
    }
  }
  .itemList{
    margin-top: toRem(40px);
    font-size: toRem(26px);
    color:#444;
    li{
      width:25%;
      float: left;
      height: toRem(100px);
      text-align: center;
      img{
        width:toRem(66px);
      }
    }
    &:after{
      content:'.';
      height: 0px;
      overflow: hidden;
      visibility: hidden;
      clear: both;
    };
  }
  .infoList{
    margin:toRem(20px) toRem(10px) toRem(120px);
    li{
      height: toRem(180px);
      border-bottom: 1px solid rgba(174,174,174,.2) ; 
      margin-bottom: toRem(10px);
      img{
        width:toRem(220px);
        height:toRem(160px);
        margin:toRem(10px);
        float: left;
      }
      div{
        width:toRem(490px);
        overflow: hidden;
        float: left;
        p{
          font-size:toRem(30px);
          color:#444;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        section{
          margin-top: toRem(10px);
          font-size:toRem(26px);
          line-height: toRem(35px);
          color:#999;
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }

      }
      &:after{     
        content:'.';
        height: 0px;
        overflow: hidden;
        visibility: hidden;
        clear: both;
      };
    }
  }
}
</style>

