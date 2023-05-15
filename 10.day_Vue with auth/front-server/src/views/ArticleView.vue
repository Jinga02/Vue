<template>
  <div>
    <h1>Article Page</h1>
    <router-link :to="{ name: 'CreateView' }">[CREATE]</router-link>
    <ArticleList />
    <hr>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'
// import api from '@/store/api'
export default {
  name: 'ArticleView',
  components: {
    ArticleList,
  },
  computed:{
    isLogined(){
      return this.$store.getters.isLogined
    }
  },
  created() {
    this.getArticles()
  },
  methods: {
    getArticles() {
      if(this.isLogined){
        this.$store.dispatch('getArticles')  
      } 
      else{
         alert("로그인이 필요한 서비스 입니다.")
         this.$router.push({name: 'LoginView'})
      } 
      // api.get('articles/')
      // .then()
    }
  }
}
</script>

<style>

</style>
