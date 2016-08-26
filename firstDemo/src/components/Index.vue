<template>
      <swiper></swiper>
  <div class="speaker">
      <ul>
        <li>华东地区的冠军是擦神，但是他是一个不能fifa的玩家</li>
      </ul>
  </div>
  <div class="itemList">
    <ul>
      <li>
        <img src="../assets/images/world_football.png" />
        <p>天下足球</p>
      </li>
   
     <li>
        <img src="../assets/images/fifa.png" />
        <p>FIFA动态</p>
      </li>
      <li>
        <img src="../assets/images/world_cup.png" />
        <p>我爱世界杯</p>
      </li>
         <li>
        <img src="../assets/images/history.png" />
        <p>历史今天看</p>
      </li>
    </ul>
  </div>
<div class="infoList">
  <li>
    <img src='../assets/images/barcelona.jpg' />
    <div >
      <p>巴萨大将：队友实在太强了 我闭着眼睛都能踢球<p>
      <section>作为巴萨在这个夏天最昂贵的引援，安德烈-戈麦斯无疑会成为新赛季巴萨球迷关注的焦点，这对许多球员来说，无形中也是一种压力。而安德烈-戈麦斯在接受采访时却表示，在巴萨踢球是自己最好的选择，因为队友都太强了，自己闭着眼睛都能踢好球。</section>
    </div>
  </li>
    <li>
    <img src='../assets/images/hart.jpg' />
    <div >
      <p>英超失宠11球星:瓜帅弃哈特 穆帅铁腕下放小猪<p>
      <section>英超联赛已经揭幕，但转会窗口还没有关闭。对于一些球员来说，恐怕在接下来几天就会离开球队，由于失去了主教练和俱乐部的信任和关注，他们被逼到了球队边缘。</section>
    </div>
  </li>
    <li>
    <img src='../assets/images/barcelona.jpg' />
    <div >
      <p>英超失宠11球星:瓜帅弃哈特 穆帅铁腕下放小猪<p>
      <section>英超联赛已经揭幕，但转会窗口还没有关闭。对于一些球员来说，恐怕在接下来几天就会离开球队，由于失去了主教练和俱乐部的信任和关注，他们被逼到了球队边缘。</section>
    </div>
  </li>
    <li>
    <img src='../assets/images/barcelona.jpg' />
    <div >
      <p>英超失宠11球星:瓜帅弃哈特 穆帅铁腕下放小猪<p>
      <section>英超联赛已经揭幕，但转会窗口还没有关闭。对于一些球员来说，恐怕在接下来几天就会离开球队，由于失去了主教练和俱乐部的信任和关注，他们被逼到了球队边缘。</section>
    </div>
  </li>
    <li>
    <img src='../assets/images/barcelona.jpg' />
    <div >
      <p>英超失宠11球星:瓜帅弃哈特 穆帅铁腕下放小猪<p>
      <section>英超联赛已经揭幕，但转会窗口还没有关闭。对于一些球员来说，恐怕在接下来几天就会离开球队，由于失去了主教练和俱乐部的信任和关注，他们被逼到了球队边缘。</section>
    </div>
  </li>
</div>
</template>

<script>

import Swiper from './Swiper'
export default { 
  components: {
    Swiper
  }
}
</script>
<style scoped lang="scss">
@function toRem($px) {
   @return $px / 37.5px * 1rem;
}
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
  
</style>

