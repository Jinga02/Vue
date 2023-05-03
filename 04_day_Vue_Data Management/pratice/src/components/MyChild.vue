<template>
  <div class="MyChild">
    <h1>MyChild.vue 입니다.</h1>
    <p>{{ staticProps }}</p>
    <p>{{ myComponentData }}</p>
    <button @click="childToParent">클릭하던가</button>
    <input type="text" v-model='childInputData' @keyup.enter="childInput">
  </div>
</template>

<script>
export default {
    name : "MyChild",
    data: function(){
      return{
        childInputData: null,
      }
    },
    props:{
        staticProps: String,
        myComponentData: String,
    },
    methods:{
      childToParent: function(){
        this.$emit('child-to-parent')
        // console.log('MyChild에서 발생한 이벤트')
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