<template>
  <div 
  class="flex justify-between"
  :class="{isSelected:size.selected}"
  @click="selected">
    <p>{{ size.name }}</p>
    <p>{{ size.price }}원</p>
  </div>
</template>

<script>
export default {
  props:{
    size:Object,
  },
  methods:{
    selected(){
      this.$store.commit("updateSizeList", this.size)
    }
  }
}
</script>

<style scoped>
  .justify-between{
    justify-content: space-between;
    border: solid 2px ;
    border-radius: 16px;
    padding: 5px 10px;
    height: 100%;
  }

  .isSelected{
    background-color: rgb(0, 152, 86);
    color: white;
  }

  p{
    font-size: 20px;
  }
</style>