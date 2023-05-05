<template>
  <div id="app">
    <h1>App.vue 입니다.</h1>
    <FirstCom />
  </div>
</template>

<script>
import FirstCom from '@/components/FirstComponent.vue'
export default {
  name: 'App',
  components: {
    FirstCom,
  }
}
</script>

<style>

</style>
