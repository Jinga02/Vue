<template>
  <div 
  class="flex justify-between"
  :class="{isSelected:size.selected}"
  @click="selected">
    {{ size.name }}
    {{ size.price }}원
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
    padding: 5px;
    height: 100%;
  }

  .isSelected{
    background-color: rgba(63, 62, 63, 0.705);
  }
</style>