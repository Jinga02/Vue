<template>
  <div id="app">
    <!-- <h1>"{{ message }}" 의 길이는 {{ messageLength }} </h1> -->
    <!-- <h2>X2 : {{ doubleLength }}</h2> -->
    <h1>{{ message }}</h1>
    <input type="text" @keyup.enter="changeMessage" v-model="inputData">
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      inputData: null,
    }
  },
  methods:{
    changeMessage(){
      const newMessage = this.inputData
      // dispatch(A, B) 
      // A : 호출하고자 하는 actions 함수 B : 넘겨주는 데이터(payload)
      this.$store.dispatch('changeMessage', newMessage)
      this.inpuData = null
    }
  },
  computed: {
    message(){
      return this.$store.state.message
    },
    messageLength(){
      return this.$store.getters.messageLength
    },
    doubleLength(){
      return this.$store.getters.doubleLength
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
