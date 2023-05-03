<template>
  <div>
    <label for="money">연봉 입력 (만원): </label>
    <input id="money" type="number" v-model.number="money" />
    <br />
    <label for="tax">세액감연액 (만원): </label>
    <input id="tax" type="number" v-model.number="taxCredit" />

    <hr />

    <h2>종합소득금액: {{ money }} 만원</h2>
    <h2>종합소득공제: (-) 150 만원</h2>
    <h2>과세표준 : {{ taxBase }} 만원</h2>

    <hr />

    <Taxrate v-bind:taxCredit="taxCredit" v-bind:taxBase="taxBase"></Taxrate>
  </div>
</template>

<script>
import Taxrate from '@/components/Taxrate.vue';

export default {
  data() {
    return {
      money: 0,
      taxCredit: 0,
    };
  },
  components: {
    Taxrate,
  },
  computed: {
    taxBase: function () {
      return this.money - 150 >= 0 ? this.money - 150 : 0;
    },
  },
};
</script>

<style></style>
