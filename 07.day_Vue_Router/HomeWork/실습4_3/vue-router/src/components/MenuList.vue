<template>
  <div class="list-group">
    <h2>1. 음료를 고르세요</h2>
    <MenuListItem 
    class="MenuList"
    v-for="menu in menuList" 
    :key="menu.title" 
    :menu="menu"/>
  </div>
</template>

<script>
import MenuListItem from "@/components/MenuListItem.vue"

export default {
  name:"MenuList",
  components:{
    MenuListItem,
  },
  computed:{
    menuList(){
      return this.$store.state.menuList
    }
  }
}
</script>

<style>
  .MenuList{
    margin: 2px;
  }


</style>