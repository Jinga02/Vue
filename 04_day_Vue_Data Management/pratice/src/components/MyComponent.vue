<template>
  <div class>
    <h1>MyComponent.vue입니다.</h1>
    <MyChild 
    :component-props="componentMessage" 
    :fuck-message="fuckMessage"
    @child-to-parent="parentGetEvent"
    />
  </div>
</template>

<script>
import MyChild from '@/components/MyChild.vue'

export default {
    name: "MyComponent",
    components:{
        MyChild,
    },
    data: function(){
        return{
            componentMessage: "MyComponent에서 보낸 메시지 입니다.",
            fuckMessage: "FuckFuckFuckFuckFuckFuckFuckFuckFuckFuckFuckFuckFuckFuckFuck"
        }
    },
    methods: {
        parentGetEvent(inputData){
            console.log(`MyChild에서 보낸 ${inputData}`)
        }
    }
}
</script>

<style>

</style>