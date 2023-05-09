<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{name : 'home'}">Home</router-link> |
    <button @click="toHome">Home으로</button>
    <br>
    <input type="text" @keyup.enter="goToHello" v-model="inputData">
  </div>
</template>


<script>
export default {
  name: 'AboutView',
  data(){
    return{
      inputData: null,
    }
  },
  methods:{
    toHome(){
      // index.js에 만든 const routes의 home
      this.$router.push({name : 'home'})
    },
    goToHello(){
      // router 페이지 이동을 hello로 그리고 params가 담기는데 userName이름으로 this.inputData를 담는다.
      this.$router.push({name:'hello', params:{userName: this.inputData}})
    }
  }
}
</script>

