<template>
  <div class="order-overview">
    <div class="order-overview-result">
      <h1 class="order-overview-title">주문 내역</h1>
      <p>총 {{ totalOrderCount }}건: {{ totalOrderPrice }}원</p>
    </div>
    <ul class="order-overview-list">
      <OrderListItem
        v-for="order in orderList" 
        :key="order.title"
        :order="order"
      />
    </ul>
  </div>
</template>

<script>
import OrderListItem from '@/components/OrderListItem'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'OrderList',
  components: {
    OrderListItem,
  },
  computed: {
    ...mapState(['orderList']),
    ...mapGetters(['totalOrderCount', 'totalOrderPrice']),
    // orderList: function () {
    //   return this.$store.state.orderList
    // },
    // totalOrderCount: function () {
    //   return this.$store.getters.totalOrderCount
    // },
    // totalOrderPrice: function () {
    //   return this.$store.getters.totalOrderPrice
    // },
  },
}
</script>

<style>
.order-overview {
  margin-bottom: 100px;
  background: #F3F4F6;
  padding: 24px;
  border-radius: 12px;
}

.order-overview-list {
  gap: 1rem;
}

.order-overview-list > li:last-child {
  margin-bottom: 24px;
}
</style>