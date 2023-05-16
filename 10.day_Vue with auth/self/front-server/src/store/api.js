import axios from "axios";
import store from "@/store/index";

const API_URL = 'http://127.0.0.1:8000';

const api = axios.create({
  baseURL: `${API_URL}/api/v1`,
});

api.get('articles/')

// store에 token 값이 있으면 Authorization 헤더에 `Token 토큰` 설정
// 없다면 Authorization 헤더를 쓰지 말아달라

api.interceptors.request.user(config=>{
  const token = store.state.token;
  if(token){
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export default api;