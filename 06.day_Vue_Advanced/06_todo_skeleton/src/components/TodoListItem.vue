<template>
  <div>
    <li @click="updateTodosStatus" :class="{completed: todoItem.completed}">
      <input type="checkbox" >
      {{ todoItem.todoContent }}
    </li>
    <button @click="removeTodo">REMOVE</button>
  </div>
  
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todoItem: Object,
  },
  methods:{
    removeTodo(){
      this.$store.dispatch("removeTodo", this.todoItem)
    },
    updateTodosStatus(){
      this.$store.dispatch("updateTodosStatus", this.todoItem)
    }
  }
}
</script>

<style>
  li{
    list-style: none;
  }
  .completed{
    text-decoration: line-through red;
  }
</style>
