<template>
  <div>
    <h1>{{ userName }}의 TEST입니다.</h1>
    <!-- <router-link :to="{name: 'home'}">Home</router-link> -->
    <input type="text" v-model="inputData" @keyup.enter="goToHello">
    <button @click="toHome">Home</button>

  </div>
</template>

<script>
export default {
  name:"testView",
  data(){
    return{
      userName: this.$route.params.userName,
      inpuData: null,
    }
  },
  methods:{
    toHome(){
      this.$router.push({name : 'home'})
    },
    goToHello(){
      this.$router.push({name:'hello', params:{userName: this.inputData}})
    }
  }
}
</script>

<style>

</style>
