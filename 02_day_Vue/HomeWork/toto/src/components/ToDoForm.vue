<template>
  <div>
    <input type="text" v-model="todoItem" @keyup.enter="addTodo">
    <button @click="ㅇ">완료된 할 일 지우기</button>
  </div>
</template>

<script>
export default {
  name:"TodoForm",
  data(){
    return{
      todoItem:"",
    }
  },
  methods:{
    addTodo(){
      if(this.todoItem){
        this.$store.dispatch('addTodo', this.todoItem)
      }else{
        alert("할 일을 입력해주세요.")
      }
      this.todoItem= ""
    }
  }
}
</script>

<style>

</style>