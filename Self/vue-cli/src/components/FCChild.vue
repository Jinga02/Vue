<template>
  <div id="FCC">
    <h1>FCChild 입니다.</h1>
    {{ fcData }}
    <h1>Todo</h1>
    <input type="text" v-model="inputData" @keyup.enter="input">
    <button @click="input">Todo 추가하기</button>
    <ol>
        <li v-for="todo in todos" :key="todo.create_at">
            {{ todo.Input }}
        </li>
    </ol>
    <br><br>
    <button @click="makeStr">눌러봐라</button>
  </div>
</template>

<script>
export default {
    name: "FCChild",
    data(){
        return{
            inputData:"",
            todos : []
        }
    },
    props:{
        fcData:String,
    },
    methods:{
        makeStr(){
            this.$emit("make-str", "무슨 차이지")
        },
        input(){
            if(this.inputData.trim()){
                const item = {
                    Input : this.inputData,
                    completed : false,
                    create_at : new Date().getTime()
                }
                this.todos.push(item)
            }else{
                alert("할 일을 입력해주세요.")
            }
            this.inputData=""
        }
    }
}
</script>

<style>
    #FCC{
        border: solid;
    }
    
</style>


