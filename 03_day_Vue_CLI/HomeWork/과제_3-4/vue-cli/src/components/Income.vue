<template>
  <div>
    <label for="money">연봉 입력 (만원) : </label>
    <input id="money" type="number" v-model.number="money" />
    <br>
    <label for="tax">세액 감면액 (만원) : </label>
    <input id="tax" type="number" v-model.number="tax" />
    <hr>

    <h2>종합소득금액 : {{ money }} 만원</h2>
    <h2>종합소득공제 : (-) 150 만원</h2>
    <h2>과세표준 : {{ taxBase }} 만원</h2>

    <Taxrate :tax="tax" :taxBase="taxBase" />
  </div>
</template>

<script>
import Taxrate from '@/components/Taxrate.vue'

export default {
    name : "In-come",
    data() {
        return {
            money:0,
            tax:0,
        }
    },
    components:{
        Taxrate,
    },
    computed :{
        taxBase : function(){
            return this.money - 150 >= 0 ? this.money - 150 : 0;
        }
    }
}
</script>
    
<style>

</style>