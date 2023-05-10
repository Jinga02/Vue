<template>
  <div class="menu-list">
    <h1>1. 음료를 고르세요.</h1>
    <MenuListItem
      v-for="menu in menuList"
      :key="menu.title"
      :menu="menu"
      @click.native="selectMenu(menu)"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import MenuListItem from '@/components/MenuListItem'

export default {
  name: 'MenuList',
  components: {
    MenuListItem
  },
  computed: {
    ...mapState([
      'menuList'
    ]),
    // menuList: function () {
    //   return this.$store.state.menuList
    // },
  },
  methods: {
    ...mapMutations(['updateMenuList']),
    selectMenu(menu) {
      this.updateMenuList(menu)
    },
    // selectMenu: function (menu) {
    //   this.$store.commit('updateMenuList', menu)
    // },
  },
}
</script>

<style>

</style>