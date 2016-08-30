<template>
  <div>
    <h3>Count is {{ counterValue }}</h3>
     <button @click='increment'>Increment +1</button>
  </div>
</template>

<script>
import { getCount } from '../vuex/getters'
import { incrementCounter } from '../vuex/actions'
export default {
  vuex: {
    getters: {
      // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
      counterValue: getCount
    },
    actions: {
      increment: incrementCounter
    }
  }
}
</script>