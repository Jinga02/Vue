import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstMessage:"첫 state 입니다.",
    secondMessage:"두번째 state 입니다.",
    // third:10,
    // fourth:2,
    counter:0,
  },
  getters: {
    // DIVISION(state){
      // return state.third+state.fourth
    // },
    doubleCounter(state){
      return state.counter * 2
    },
    quadrupleCounter(state, getters){
      return getters.doubleCounter * 2
    }
    
  },
  mutations: {
    SET_FIRSTMESSAGE(state, firstMessage){
      state.firstMessage = firstMessage
    },
    INCREASE_COUNTER(state){
      state.counter++;
    },
    DECREASE_COUNTER(state){
      state.counter--;
    }
  },
  actions: {
    changeMessage(context, firstMessage){
      // console.log(context)
      console.log(firstMessage)
      context.commit('SET_FIRSTMESSAGE', firstMessage)
    },
    printMessage(context){
      alert(context.state.secondMessage)
    },
    increase(context){
      context.commit("INCREASE_COUNTER")
    },
    decrease(context){
      context.commit("DECREASE_COUNTER")
    }
  },
  modules: {
  }
})
