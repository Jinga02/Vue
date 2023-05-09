<template>
  <div>
    <p>TodoList</p>
    <TodoListItemVue v-for="(todo, index) in TodoList" :key="index" :todoItem=todo />
    <button @click="removeAll">REMOVE ALL</button>
  </div>
</template>

<script>
import TodoListItemVue from './TodoListItem.vue'

export default {
  name: 'TodoList',
  components: {
    TodoListItemVue
  },
  computed: {
    TodoList() {
      return this.$store.state.todos
    },
  },
  methods:{
    removeAll(){
      this.$store.dispatch("removeAll")
    }
  }
}
</script>

<style>

</style>