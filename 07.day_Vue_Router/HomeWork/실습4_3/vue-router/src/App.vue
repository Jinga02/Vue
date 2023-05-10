<template>
  <div id="app">
    <h1>Coffe Order App</h1>
    <div class="up">
      <div class="flex">
        <MenuList/>
        <SizeList/>
      </div>
    </div>
    <div id="order">
      <OrderList/>
    </div>
  </div>
</template>

<script>
import MenuList from "@/components/MenuList.vue"
import SizeList from "@/components/SizeList.vue"
import OrderList from "@/components/OrderList.vue"
export default {
  components:{
    MenuList,
    SizeList,
    OrderList
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

.up{
  background-color: rgba(128, 128, 128, 0.219);
  border-radius: 16px;
  padding: 10px;
}
.list-group{
    padding: 10px;
    margin: 6px;
    border: solid 2px;
    border-radius: 12px;
    flex:auto;
  }

</style>