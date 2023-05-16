import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

import userModule from '@/store/modules/user.js';

// import router from '../router';

const API_URL = process.env.VUE_APP_API_URL;
// console.log(API_URL);

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    articles: [],
  },

  mutations: {
    GET_ARTICLES(state, articles) {
      state.articles = articles;
    },
  },
  actions: {
    getArticles(context) {
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/articles/`,
        headers: {
          Authorization: `Token ${context.state.user.token}`,
        },
      })
        .then((res) => {
          // console.log(res, context)
          context.commit('GET_ARTICLES', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {
    user: userModule,
  },
});
