<template>
  <div>
    <h2>산출세액 : {{ afterTax }}</h2>
  </div>
</template>

<script>
export default {
    name : "Tax-rate",
    props:{
        tax:Number,
        taxBase: String,
    },
    computed:{
        afterTax:function(){
            if (this.taxBase <= 1200){
                return Math.round(this.taxBase * 0.06)
            }else if(this.taxBase <= 4600){
                return Math.round(this.taxBase * 0.15)
        }
    }
}
}
</script>

<style>

</style>