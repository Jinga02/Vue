import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: "message in store"
  },
  getters: {
    // getters는 state를 활용한 새로운 변수
    messageLength(state){
      return state.message.length
    },
    // 첫 번째 인자는 state / 두 번째 인자는 getters
    doubleLength(state, getters){
      return getters.messageLength * 2
    }
  },
  mutations: {
    // 첫 번째 인자는 state / 두 번째 인자는 payload
    // CHANGE_MESSAGE(state, message){
      // console.log(state)
      // console.log(message)
      // state.message = message
    // }
  },
  actions: {
    // mutations
    changeMessage(context, message){
      // CHANGE_MESSAGE라는 이름의 mutations 사용
      // commit(A, B)
      // A : 호출하고자 하는 mutations / 함수 B: payload
      context.commit('CHANGE_MESSAGE', message)
    }
  },
  modules: {
  }
})
