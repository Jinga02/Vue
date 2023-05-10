import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList:[]
  },
  getters: {
  },
  mutations: {
    ADD_TODO(state, todoItem){
      state.todoList.push(todoItem)
    }
  },
  actions: {
    addTodo(context, todoContext){
      const todoItem={
        todoContext: todoContext,
        completed: false,
      }
      context.commit("ADD_TODO", todoItem)
    },
    clearAll(context){
      
    }
  },
  modules: {
  }
})
