<template>
  <div>
    <h1>Detail</h1>
    <p>글 번호 : {{ article?.id }}</p>
    <p>제목 : {{ article?.title }}</p>
    <p>내용 : {{ article?.content }}</p>
    <p>작성시간 : {{ article?.created_at }}</p>
    <p>수정시간 : {{ article?.updated_at }}</p>
  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'
export default {
  name: 'DetailView',
  data() {
    return{
      article:null,
    }
  },
  created() {
    this.getArticleDetail()
  },
  methods: {
    getArticleDetail(){
      // axios를 사용하여 API 서버로부터 특정 id의 게시글 데이터를 가져오고, 
      // 그 결과를 article 객체에 할당
      axios({
        method: 'get',
        // this.$route.params.id는 라우터를 통해 전달받은 게시글 id값
        url: `${API_URL}/api/v1/articles/${this.$route.params.id}/`,
      })
      .then((res) =>{
        // console.log(res)
        this.article = res.data
      })
      .catch((err => {
        console.log(err)
      }))
    }
  }
}
</script>
