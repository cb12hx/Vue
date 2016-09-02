<template>
  <nav>
    <div class="flag">
      <ul>
        <li v-for="item in nationList">
          <img :src=`/static/images/nationalFlag/${item.flag}.png` />
          <div>
            <p v-text=`${item.name}`></p>
            <section v-text="item.des"></section>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import initialData from '../assets/data/initialData';

export default {
  data () {
    return {      
      nationList: initialData.nation
    }
  }
}
</script>
<style lang="scss" scoped>
  @function toRem($px) {
    @return $px / 37.5px * 1rem;
  }
  
  .flag {
    width: toRem(730px);
    margin: toRem(20px) toRem(10px) toRem(120px);
    background: #fff;
    li {
      height: toRem(160px);
      border-bottom: 1px solid rgba(174, 174, 174, .2);
      margin-bottom: toRem(10px);
      &:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
      }
      ;
      img {
        width: toRem(160px);
        height: toRem(160px);
        margin: toRem(-20px) toRem(10px);
        float: left;
      }
      div {
        width: toRem(490px);
        overflow: hidden;
        float: left;
        p {
          font-size: toRem(30px);
          color: #444;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        section {
          margin-top: toRem(10px);
          font-size: toRem(26px);
          line-height: toRem(35px);
          color: #999;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
</style>