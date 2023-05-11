import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [
      {
        id: 1,
        title: '제목',
        content: '내용'
      },
      {
        id: 2,
        title: '제목2',
        content: '내용2'
      },
    ],
  },
  getters: {
  },
  mutations: {
    GET_ARTICLES(state, articles){
      state.articles = articles
    }
  },
  actions: {
    // API를 호출하여 응답받은 데이터를 애플리케이션의 상태로 설정하고, 컴포넌트에서 상태를 조회하여 렌더링한다.
    // 이를 통해 백엔드와 프론트엔드를 분리하고, API를 통해 데이터를 효율적으로 관리할 수 있다.
    getArticles(context){
      axios({
        method : 'get',
        url : `${API_URL}/api/v1/articles/`,
      })
      .then((res) => {
        // console.log('res', context)
        context.commit('GET_ARTICLES', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
