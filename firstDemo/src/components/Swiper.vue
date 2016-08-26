<template>
  <div>
    <img src='../assets/images/demo1.jpg' />
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
@function toRem($px) {
   @return $px / 37.5px * 1rem;
}
div{
  width:toRem(750px);
  height: toRem(350px);
  img{
    width:100%;
    height: 100%;
  }
}

</style>
