import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstMessage:"첫 state 입니다.",
    secondMessage:"두번째 state 입니다.",
    third:10,
    fourth:2,
    counter:0,
  },
  getters: {
    DIVISION(state){
      return state.third+state.fourth
    }
  },
  mutations: {
    SET_firstMessage(state, firstMessage){
      state.firstMessage = firstMessage
    },
    SET_COUNTER(state){
      state.counter++;
    }
  },
  actions: {
    changeMessage(context, firstMessage){
      // console.log(context)
      console.log(firstMessage)
      context.commit('SET_firstMessage', firstMessage)
    },
    printMessage(context){
      alert(context.state.secondMessage)
    },
    increase(context){
      context.commit("SET_COUNTER")
    }
  },
  modules: {
  }
})
