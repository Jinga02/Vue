<template>
  <div>
    <input type="text" v-model.trim="todoTitle" @keyup.enter="createTodo" placeholder="할 일을 입력하고 ENTER">
  </div>
</template>

<script>
export default {
    name: "TodoForm",
    data(){
        return {
            todoTitle:null,
        }
    },
    methods:{
        createTodo(){
            if(this.todoTitle){
                this.$store.dispatch('createTodo', this.todoTitle)
            }else{
                alert("할 일을 입력하세요.")
            }
            this.todoTitle = null
        }
    }
}
</script>

<style>

</style>