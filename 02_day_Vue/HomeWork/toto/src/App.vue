<template>
  <div>
    <h1>Todo List</h1>
    <TodoForm/>
    <ToDoList/>
  </div>
</template>

<script>
import TodoForm from "@/components/ToDoForm.vue"
import ToDoList from "@/components/ToDoList.vue"
export default {
  name: 'App',
  components: {
    TodoForm,
    ToDoList
  }
}
</script>

<style>

</style>
