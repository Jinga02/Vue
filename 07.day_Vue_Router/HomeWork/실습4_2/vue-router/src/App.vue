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
  margin: 0 auto;
  margin-top: 60px;
  width: 1000px;
  text-align: center;
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