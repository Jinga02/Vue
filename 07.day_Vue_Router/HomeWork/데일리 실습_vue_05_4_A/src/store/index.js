import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: JSON.parse(sessionStorage.getItem('orderList')) || [],
    sizeList: [
      {
        name: 'small',
        price: 0,
        selected: true, // 초기값
      },
      {
        name: 'medium',
        price: 500,
        selected: false,
      },
      {
        name: 'large',
        price: 1000,
        selected: false,
      },
    ],
    menuList: [
      { 
        title: '아메리카노',
        price: 3000,
        selected: true,
        image: 'https://source.unsplash.com/featured/?americano'
      },
      { 
        title: '라떼',
        price: 4000,
        selected: false,
        image: 'https://source.unsplash.com/featured/?latte',
      },
      { 
        title: '카푸치노',
        price: 4500,
        selected: false,
        image: 'https://source.unsplash.com/featured/?capucchino',
      },
    ],
    optionList: [
      {
        type: '샷',
        price: 500,
        count: 0,
      },
      {
        type: '바닐라 시럽',
        price: 500,
        count: 0,
      },
      {
        type: '카라멜 시럽',
        price: 500,
        count: 0,
      },
    ],
  },
  getters: {
    totalOrderCount: function (state) {
      return state.orderList.length
    },
    totalOrderPrice: function (state) {
      return state.orderList.reduce((acc, order) => {
        const price = order.menu.price 
        const size = order.size.price
        const option = order.option.reduce((acc, op) => acc + op.price , 0)
        return acc + price + size + option
      }, 0)
    },
  },
  mutations: {
    addOrder: function (state) {
      // const menu = state.menuList.find((menu) => menu.selected)
      // const size = state.sizeList.find((size) => size.selected)

      // const order = { menu, size }
      // state.orderList.push(order)

      let selectedMenu = {}
      let selectedSize = {}

      state.menuList.forEach(menu => {
        if (menu.selected) {
          selectedMenu = menu
        }
      })
      state.sizeList.forEach(size => {
        if (size.selected) {
          selectedSize = size
        }
      })
      const option = state.optionList

      const order = {
        menu: selectedMenu,
        size: selectedSize,
        option: option,
      }
      state.orderList.push(order)
      sessionStorage.setItem('orderList', JSON.stringify(state.orderList))
    },
    updateMenuList: function (state, selectedMenu) {
      // state.menuList = state.menuList.map((menu) => {
      //   if (menu.title === selectedMenu.title) {
      //     menu.selected = true
      //   } else {
      //     menu.selected = false
      //   }
      //   return menu
      // })

      console.log(selectedMenu)
      for (let i = 0; i < state.menuList.length; i++) {
        const menu = state.menuList[i]
        if (menu.title === selectedMenu.title) {
          menu.selected = true
        } else {
          menu.selected = false
        }
      }
    },
    updateSizeList: function (state, selectedSize) {
      // state.sizeList = state.sizeList.map((size) => {
      //   if (size.name === selectedSize.name) {
      //     size.selected = true
      //   } else {
      //     size.selected = false
      //   }
      //   return size
      // })      
      for (let i = 0; i < state.sizeList.length; i++) {
        const size = state.sizeList[i]
        if (size.name === selectedSize.name) {
          size.selected = true
        } else {
          size.selected = false
        }
      }
    },
    updateOptionList: function (state, newOption) {
      // state.optionList = state.optionList.map((option) => {
      //   if (option.type === newOption.type) {
      //     option = newOption
      //   } 
      //   return option
      // })

      const newOptions = []
      state.optionList.forEach(option => {
        if (option.type === newOption.type) {
          newOptions.push(newOption)
        } else {
          newOptions.push(option)
        }
      })

      state.optionList = newOptions
    }, 
  },
  actions: {
  },
  modules: {
  }
})


// (novice)
// export default new Vuex.Store({
//   state: {
//     orderList: [],
//     sizeList: [
//       {
//         name: 'small',
//         price: 0,
//         selected: true, // 초기값
//       },
//       {
//         name: 'medium',
//         price: 500,
//         selected: false,
//       },
//       {
//         name: 'large',
//         price: 1000,
//         selected: false,
//       },
//     ],
//     menuList: [
//       { 
//         title: '아메리카노',
//         price: 3000,
//         selected: true,
//         image: 'https://source.unsplash.com/featured/?americano'
//       },
//       { 
//         title: '라떼',
//         price: 4000,
//         selected: false,
//         image: 'https://source.unsplash.com/featured/?latte',
//       },
//       { 
//         title: '카푸치노',
//         price: 4500,
//         selected: false,
//         image: 'https://source.unsplash.com/featured/?capucchino',
//       },
//     ],
//     optionList: [
//       {
//         type: '샷',
//         price: 500,
//         count: 0,
//       },
//       {
//         type: '바닐라 시럽',
//         price: 500,
//         count: 0,
//       },
//       {
//         type: '카라멜 시럽',
//         price: 500,
//         count: 0,
//       },
//     ],
//   },
//   mutations: {
//     addOrder: function (state) {
//       // const menu = state.menuList.find((menu) => menu.selected)
//       // const size = state.sizeList.find((size) => size.selected)

//       const option = state.optionList

//       const order = { menu, size, option }
//       state.orderList.push(order)
//     },
//     updateMenuList: function (state, selectedMenu) {
//       state.menuList = state.menuList.map((menu) => {
//         if (menu.title === selectedMenu.title) {
//           menu.selected = true
//         } else {
//           menu.selected = false
//         }
//         return menu
//       })
//     },
//     updateSizeList: function (state, selectedSize) {
//       state.sizeList = state.sizeList.map((size) => {
//         if (size.name === selectedSize.name) {
//           size.selected = true
//         } else {
//           size.selected = false
//         }
//         return size
//       })
//     },
//     updateOptionList: function (state, newOption) {
//       state.optionList = state.optionList.map((option) => {
//         if (option.type === newOption.type) {
//           option = newOption
//         } 
//         return option
//       })
//     }, 
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
