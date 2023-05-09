import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[
    createPersistedState(),
  ],
  state: {
    todos: [
    ]
  },
  getters: {
    allTodos(state){
      return state.todos.length
    },
    completedTodos(state){
      const completedTodos = state.todos.filter((todo) => {
        return todo.completed === true
      })
      return completedTodos.length
    },
    uncompletedTodos(state, getters){
      return getters.allTodos - getters.completedTodos
    }
  },
  mutations: {
    ADD_TODO(state, todo){
      state.todos.push(todo)
    },
    REMOVE_TODO(state, todoItem){
      const index = state.todos.indexOf(todoItem)
      state.todos.splice(index, 1)
    },
    UPDATE_TODOS_STATUS(state, todoItem){
      state.todos = state.todos.map((todo) => {
        if(todo === todoItem){
          todo.completed = !todo.completed
        }
        return todo
      })
    },
    REMOVE_ALL(state){
      state.todos = state.todos.filter((todo) => {
        !todo.completed
      })
    }
    // LOAD_TODOS(state) {
    //   const localStorageTodos = localStorage.getItem('todos')
    //   const parsedTodos = JSON.parse(localStorageTodos)
    //   state.todos = parsedTodos
    // },
  },
  actions: {
    addTodo(context, todoContent){
      const todo ={
        todoContent : todoContent,
        completed : false
      }
      context.commit("ADD_TODO", todo)

    },
    removeTodo(context, todoItem){
      context.commit("REMOVE_TODO", todoItem)

    },
    updateTodosStatus(context, todoItem){
      context.commit("UPDATE_TODOS_STATUS", todoItem)
    },
    removeAll(context){
      context.commit("REMOVE_ALL")
    }
    // saveTodosLocalStorage(context){
    //   const jsonTodos = JSON.stringify(context.state.todos)
    //   localStorage.setItem("todos", jsonTodos)
    // },
    // loadTodos(context) {
    //   context.commit('LOAD_TODOS')
    // },
  },
  modules: {
  }
})
