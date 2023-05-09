// import createPersistedState from 'vuex-persistedstate'

const myModule={
  plugins: [
    // createPersistedState({
    //   paths: ['level'],
    //   getState: (key) => JSON.parse(localStorage.getItem(key)),
    //   setState: (key, state) => localStorage.setItem(key, JSON.stringify(state)),
    // }),
  ],
  state:{
    level:20
  },
  mutations:{
    INCREMENT_LEVEL(state){
      state.level++
    },
    DECREMENT_LEVEL(state){
      state.level--
    }
  },
  actions:{
    incrementLevel(context){
      context.commit('INCREMENT_LEVEL')
    },
    decreamentLevel(context){
      context.commit('DECREMENT_LEVEL')
    }
  },
}

export default myModule
