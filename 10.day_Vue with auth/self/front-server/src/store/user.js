// import axios from "axios";
// const API_URL = 'http://127.0.0.1:8000'




// export default{
//   state : {
//     token : null
//   },
//   getters: {
//     isLogined(state){
//       return state.token != null ? true : false;
//     }
//   },
//   mutations: {
//     SAVE_TOKEN(state, token){
//     state.token = token
//     // 요청을 보내고 응답을 받은 Token을 state에 저장하는 것 까지 signUp과 동일
//     router.push({name : 'ArticleView'})
//     }
//   },
//   actions: {
//     signUp(context, payload){
//       const username = payload.username
//       const password1 = payload.password1
//       const password2 = payload.password2
    
//       axios({
//         method: 'post',
//         url: `${API_URL}/accounts/signup/`,
//         data:{
//           username, password1, password2
//         }
//       })
//       .then(res=>{
//         console.log(res.data)
//         console.log(res.data['key'])
//         context.commit('SIGN_UP', res.data.key)
//       })
//       .catch(err=>{
//         console.log(err)
//       })
//     },
//     login(context, payload){
//       const username = payload.username
//       const password = payload.password
//       axios({
//         method: 'post',
//         url: `${API_URL}/accounts/login/`,
//         data:{
//           username, password
//         }
//       })
//       .then(res=>{
//         console.log('로그인 성공')
//         context.commit('SAVE_TOKEN', res.data.key)
//       })
//       .catch(err=>{
//         console.log(err)
//       })
//     }
//   }
// }
