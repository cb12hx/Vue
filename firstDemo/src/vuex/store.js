import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

const state = {
  // 应用启动时，count 置为0
  count: 0,
 
}


const mutations = {
  REDIRECT(state, currentIndex) {
    state.barList.map((item,index)=>{
      var rObj=/active/g
      item.className=item.className.replace(rObj,'');     
    })
    state.barList[currentIndex].className+=' active';
    state.currentIndex=currentIndex;
  },
   // mutation 的第一个参数是当前的 state
  // 你可以在函数里修改 state
  INCREMENT (state, amount) {    
    state.count = state.count + amount
  }
}


export default new Vuex.Store({
  state,
  mutations
});
