<template>
  <div id="app">
    <h1>길이 {{ messageLength }}의 메시지 {{ msg }}를 입력받음</h1>
    <h1>{{ age }}</h1>    
    <h3>x2 : {{ doubleLength }}</h3>
    <!-- 배열로 사용시 changeMessage 호출 시 인자로 직접 값을 넘겨주어야 한다.-->
    <input type="text" @keyup.enter="onsubmit" v-model="inputData">
    <h1>{{ level }}</h1>
    <button @click="upLevel">levelUp</button>
    <button @click="downLevel">levelDown</button>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
  },
  // created(){
  //   this.$store.dispatch('loadMessage')
  // },
  computed: {
    // 두 가지는 같은 동작을 한다.
    ...mapState(['age']),
    // state의 message를 msg로 사용하겠다.
    ...mapState({
      msg: state => state.message,
      level: state => state.myModule.level
    }),
    ...mapGetters(['messageLength', 'doubleLength']),
    // messageLength() {
    //     return this.$store.getters.messageLength
    // },
    // doubleLength() {
    //     return this.$store.getters.doubleLength
    // },
  },
  data() {
    return {
      inputData: null,
    }
  },
  methods: {
    // 배열로 사용 
    // ...mapActions(['changeMessage'])
    // 객체로 사용
    ...mapActions({
      actionsChangeMessage: 'changeMessage',
      upLevel:"incrementLevel",
      downLevel:"decreamentLevel"
    }),
    onsubmit(){
      const newMessage = this.inputData
      this.actionsChangeMessage(newMessage)
      this.inputData= null
    },
    // upLevel(){
    //   this.$store.dispatch("incrementLevel")
    // }
    // changeMessage() {
    //   const newMessage = this.inputData
    //   this.$store.dispatch('changeMessage', newMessage)
    //   this.inputData = null
    // },
  },
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
