<template>
  <div id="app">
    <h1>Coffe Order App</h1>
    <div class="flex">
      <MenuList/>
      <SizeList/>
    </div>
  </div>
</template>

<script>
import MenuList from "@/components/MenuList.vue"
import SizeList from "@/components/SizeList.vue"
export default {
  components:{
    MenuList,
    SizeList
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}

.flex{
  display: flex;
  flex-direction: row;
}

.flex > div{
  margin: 6px;
  border: solid 2px;
  border-radius: 12px;
  flex:auto;
}

</style>