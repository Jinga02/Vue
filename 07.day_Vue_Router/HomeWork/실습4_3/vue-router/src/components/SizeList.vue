<template>
<div class="list-group">
    <h2>2. 사이즈를 고르세요.</h2>
    <SizeListItem 
    class="sizeList"
    v-for="size in sizeList" :key="size.name"
    :size="size"/>
  </div>
</template>

<script>
import SizeListItem from "@/components/SizeListItem.vue"

export default {
  name:"SizeList",
  components:{
    SizeListItem,
  },
  computed:{
    sizeList(){
      return this.$store.state.sizeList
    }
  }
}
</script>

<style>
  .sizeList{
    margin: 2px;
  }

</style>