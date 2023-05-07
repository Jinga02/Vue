<template>
  <div>
    <ul>
      <li v-for="(todo, index) in printTodo" :key="index">
        {{ todo.todoContext }}
      </li>
    </ul>
  </div>
  
  
</template>

<script>
export default {
  name: "ToDoList",
  computed:{
    printTodo(){
      return this.$store.state.todoList
    }
  }
}
</script>

<style>

</style>