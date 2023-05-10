<template>
  <div>
    <button class="BUTTON" @click="addOrder">장바구니 담기</button>
    <div class="order">
      <ul><h2>주문 내역</h2>
        <p class="sum">총 {{ sumOrderCounter }}건 : {{sumOrderPrice}}원</p>
        <OrderListItem 
        v-for="(order, idx) in orderList" :key="idx"
        :order="order"/>
      </ul>
    </div>
  </div>
</template>

<script>
import OrderListItem from "@/components/OrderListItem.vue"
// import { mapMutations } from "vuex"
export default {
  components:{
    OrderListItem
  },
  methods:{
    addOrder(){
      this.$store.commit("addOrder")
    }
  },
  computed:{
    orderList(){
      return this.$store.state.orderList
    },
    sumOrderCounter(){
      return this.$store.getters.sumOrderCounter
    },
    sumOrderPrice(){
      return this.$store.getters.sumOrderPrice
    }
  }
}
</script>

<style scoped>
  .BUTTON{
    width: 990px;
    height: 50px;
    border-radius: 16px;
    background-color: rgb(0, 152, 86);
    color: white;
    font-size: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .order{
    background-color: rgba(128, 128, 128, 0.219);
    border-radius: 16px;
    text-align: left;
  }

  .order > ul{
    padding-top: 30px;
  }

  .sum{
    font-weight: bold;
  }


</style>