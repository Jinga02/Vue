<template>
  <div>
    <h1>Login Page</h1>
    <form @submit.prevent="login">
      <label for="username">username : </label>
      <input type="text" id="username" v-model="username"><br>

      <label for="password"> password : </label>
      <input type="password" id="password" v-model="password"><br>

      <input type="submit" value="login">
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return{
      username: null,
      password: null
    }
  },
  methods: {
    login(){
      this.$store.dispatch('login',{
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>
