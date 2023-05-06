<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{ firstState }} </h1>
    <h1>{{ secondState }}</h1>
    <h1>{{ hap }}</h1>
    <h1>third + fourth = {{ DIVISION }}</h1>
    <h1>{{ counter }}</h1>
    <button @click="increaseCounter"></button>
    <input type="text" @keyup.enter="changemessage" v-model="inputData" placeholder="입력하면 첫 state...를 바꿈">
    <br><br>
    <button @click="printMessage">누르면 secondMessage 알람 발생</button>
</div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data(){
    return{
      inputData : null
    }
  },
  methods:{
    changemessage(){
      if(this.inputData){
        const newMessage = this.inputData
      this.$store.dispatch("changeMessage", newMessage)
      }else{
        alert("값을 입력하세요.")
      }
      this.inputData=null
    },
    printMessage(){
      this.$store.dispatch("printMessage")
    },
    increaseCounter(){
      this.$store.dispatch("increase")
    }
  },
  computed:{
    firstState(){
      return this.$store.state.firstMessage;
    },
    secondState(){
      return this.$store.state.secondMessage;
    },
    hap(){
      return this.$store.state.third + this.$store.state.fourth;
    },
    DIVISION(){
      return this.$store.getters.DIVISION;
    },
    counter(){
      return this.$store.state.counter;
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
