<template>
  <div id="app">
    <h1>Todo</h1>
    <p> All Todo : {{ allTodos }}</p>
    <p> Completed Todo : {{ completedTodos}}</p>
    <p> UnCompleted Todo : {{ uncompletedTodos }}</p>
    <TodoForm/>
    <TodoList />
  </div>
</template>

<script>
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm,
  },
  computed:{
    allTodos(){
      return this.$store.getters.allTodos
    },
    completedTodos(){
      return this.$store.getters.completedTodos
    },
    uncompletedTodos(){
      return this.$store.getters.uncompletedTodos
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
