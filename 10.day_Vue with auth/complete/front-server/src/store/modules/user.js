import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL;

export default {
  state: {
    token: null,
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false;
    },
  },
  mutations: {
    // signup & login -> 완료하면 토큰 발급
    SAVE_TOKEN(state, token) {
      state.token = token;
      //   router.push({ name: 'ArticleView' }); // store/index.js $router 접근 불가 -> import를 해야함
    },
  },
  actions: {
    signUp(context, payload) {
      const username = payload.username;
      const password1 = payload.password1;
      const password2 = payload.password2;

      axios({
        method: 'post',
        url: `${API_URL}/accounts/signup/`,
        data: {
          username,
          password1,
          password2,
        },
      })
        .then((res) => {
          // console.log(res)
          // context.commit('SIGN_UP', res.data.key)
          context.commit('SAVE_TOKEN', res.data.key);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    login(context, payload) {
      const username = payload.username;
      const password = payload.password;

      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data: {
          username,
          password,
        },
      })
        .then((res) => {
          context.commit('SAVE_TOKEN', res.data.key);
        })
        .catch((err) => console.log(err));
    },
  },
};
