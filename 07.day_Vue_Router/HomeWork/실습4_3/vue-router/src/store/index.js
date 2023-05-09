import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList: [
      {
        title: '아메리카노',
        price: 3000,
        selected: true, // 초기값
        image: 'https://source.unsplash.com/featured/?americano',
      },
      {
        title: '라떼',
        price: 4000,
        selected: false, // 초기값
        image: 'https://source.unsplash.com/featured/?latte',
      },
      {
        title: '카푸치노',
        price: 4500,
        selected: false, // 초기값
        image: 'https://source.unsplash.com/featured/?cappuccino',
      },
    ],
    sizeList: [
      {
        name: 'small',
        price: 0,
        selected: true, //초기값
      },
      {
        name: 'medium',
        price: 500,
        selected: false, //초기값
      },
      {
        name: 'large',
        price: 1000,
        selected: false, //초기값
      },
    ],
  },
  getters: {

  },
  mutations: {
    updateMenuList(state, selectedMenu) {
      // menuList의 값들 중, 사용자가 선택한 메뉴에 해당하는 객체의 selected 값을 true로 바꾼다.
      state.menuList.forEach((menu) => {
        if(menu === selectedMenu){
          menu.selected = true;
        }else{
          menu.selected = false;
        }
      })
      // const menu = state.menuList.find(item=> item.title === selectedMenu.title);
      // if(menu){
      //   menu.selected = true;
      // }
    },
    updateSizeList(state, selectedSize) {
      // state에 정의한 sizeList의 값들 중, 사용자가 선택한 사이즈에 해당하는 객체의 selected 값을 true로 바꾼다.
      state.sizeList.forEach((size) => {
        if(size === selectedSize){
          size.selected = true;
        }else{
          size.selected = false;
        }
      })
      // const size = state.sizeList.find(item=> item.name === selectedSize.name);
      // if(size){
      //   size.selected = true;
      // }
    },
    addOrder(state) {
      // state에 정의된 menuList와 sizeList의 값들 중, 사용자가 선택한 값들만 모아서 새로운 객체를 만들어 orderList에 추가한다.
      const menu = state.menuList.find((menu) => menu.selected === true);
      const size = state.sizeList.find((size) => size.selected === true);
      // const order = {menu : menu, size : size};
      // 이름이 같으면 축약 가능
      const order = {menu, size};
      state.orderList.push(order);
    },
  },
  actions: {

  },
  modules: {

  },
});