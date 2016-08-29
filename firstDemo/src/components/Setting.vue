<template>
    <div class="myInfo">
      <section class="baseInfo">
          <img :src=`/static/images/setting/${myInfo.img}.jpg` />
          <div class="other">
            <p class="name" v-text="myInfo.name"></p>
            <p class="nickName" v-text="myInfo.nickName"></p>
          </div>
      </section>
      <section class="list">
        <ul>
          <li v-for="item in dataList">
            <img :src=`/static/images/setting/${item.img}.png` />    
            <p v-text="item.title"></p>      
          </li>
        </ul>
      </section>
    </div>
   
</template>

<script>
export default {
  data () {
    return {
      myInfo:{
        name:'陈斌',
        img:'head',
        nickName:'cb12hx'
      },
      dataList:[{
        img:'hp_personal_storage_box',
        title:'百宝箱'
      },
      {
        img:'my_documents',
        title:'我的文档'
      },
      {
        img:'my_pictures',
        title:'我的照片'
      },{
        img:'personal_loan',
        title:'我的钱包'
      },{
        img:'personal',
        title:'个人中心'
      }]
    }
  }
}
</script>
<style scoped lang="scss">
  @function toRem($px) {
     @return $px / 37.5px * 1rem;
  }
  .myInfo{
     
      width:100%;
      min-height: 100%;
      color:#444;
      .baseInfo{
        width: 100%;
        height: toRem(180px);
        margin:toRem(20px) 0px;
        background: #fff;
        img{
          width:toRem(140px);
          height:toRem(140px);
          margin:toRem(20px);
          border-radius: toRem(10px);
          float: left;
        }
        .other{
          float: left;
          margin-top: toRem(20px);
          .name{
            font-size: toRem(36px);
          }
          .nickName{
            font-size: toRem(30px);
          }
        }
        &:after{
          content:'.';
          clear: both;
          visibility: hidden;
          display: block;
          height: 0px;
        };
      }
    .list{
      margin-top:toRem(30px);
      li{
        height: toRem(100px);
        line-height: toRem(100px);
        margin-bottom: toRem(20px);
        background: #fff;

        img{
          margin:toRem(20px);
          width:toRem(60px);
          height: toRem(60px);
          float: left;
        }
        p{
          font-size: toRem(36px);
          float: left;
        }
          &:after{
          content:'.';
          clear: both;
          visibility: hidden;
          display: block;
        };
      }
    }  
  }
</style>