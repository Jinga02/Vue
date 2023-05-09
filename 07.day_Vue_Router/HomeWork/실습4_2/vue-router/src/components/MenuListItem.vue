<template>
  <div 
  class="flex justify-between"
  :class="{isSelected: menu.selected}"
  @click="selected">
    <img :src="menu.image" alt="">
    <p>{{ menu.title }}</p>
    <p>{{ menu.price }}원</p>
  </div>
</template>

<script>
export default {
  props:{
    menu:Object,
  },
  methods:{
    selected(){
      this.$store.commit("updateMenuList", this.menu)
    }
  }
}
</script>

<style scoped>
  img{
    width: 50px;
    height: 50px;
  }
  .justify-between{
    justify-content: space-between;
    border: solid 2px ;
    border-radius: 16px;
    padding: 5px;
  }

  .isSelected{
    background-color: rgba(63, 62, 63, 0.705);
  }
</style>