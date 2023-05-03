<template>
  <div>
    <h1>소득세 계산기</h1>
    <Income />    
  </div>
</template>

<script>
import Income from '@/components/Income.vue'

export default {
  name: 'App',
  components: {
    Income,
  }
}
</script>

<style>
  div{
    text-align: center;
  }
</style>
