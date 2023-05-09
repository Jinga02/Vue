<template>
  <div>
    <p>Todo</p>
    <input type="text" v-model="todoContent" @keyup.enter="addTodo">
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      todoContent: null,
    }
  },
  methods: {
    addTodo(){
      if(this.todoContent)
      this.$store.dispatch("addTodo", this.todoContent)
      else{
        alert("할 일을 입력해주세요.")
      }
      this.todoContent = ""
    }
  }
}
</script>

<style>

</style>