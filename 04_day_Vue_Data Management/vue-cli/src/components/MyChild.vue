<template>
  <div>
    <h3>This is child component</h3>
    <p>{{ staticProps }}</p>
    <p>{{ myProps }}</p>
    <button @click="childToPartent">클릭하세요.</button>
    <input type="text" v-model="childInputData" @keyup.enter="childInput">
  </div>
</template>

<script>
export default {
  name: 'MyChild',
  data: function(){
    return{
      childInputData: null,
    }
  },
  props: {
    staticProps: String,
    myProps: String,
  },
  methods: {
    childToPartent: function(){
      // 이벤트를 발생(emit)시킬 때 인자로 데이터를 전달 가능
      this.$emit('child-to-parent', 'child Data')
    },
    childInput: function(){
      this.$emit('child-input', this.childInputData)
      this.childInputData=""
    }
  }
}
</script>

<style>
  
</style>
