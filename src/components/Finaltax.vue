<template>
  <div>
    <h2>결정세액 : {{ finalTax }} 만원</h2>
  </div>
</template>

<script>
export default {
  props: {
    afterTax: Number,
    taxCredit: Number,
  },
  computed: {
    finalTax: function () {
      return this.afterTax - this.taxCredit >= 0
        ? this.afterTax - this.taxCredit
        : 0;
    },
  },
};
</script>

<style></style>
