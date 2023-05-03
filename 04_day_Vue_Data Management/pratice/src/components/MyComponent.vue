<template>
  <div class="MyComponent">
    <h1>MyComponent.vue입니다.</h1>
    <MyChild 
    static-props="MyComponent(부모)에서 MyChild(자식)으로" 
    :my-component-data="dynamicProps"
    @child-to-parent="parentGetEvent"
    @child-input="getDynamicData"/>
    
  </div>
</template>

<script>
import MyChild from '@/components/MyChild.vue'

export default {
    name: "MyComponent",
    components: { 
        MyChild,
    },
    data: function(){
        return{
            dynamicProps: "MyComponent에서 보낸 dynamicProps데이터",
        }
    },
    methods: {
        parentGetEvent(){
            console.log('MyChild에서 발생한 이벤트')
        },
        getDynamicData(input){
            console.log(`MyChild에서 입력한 ${input}을 출력`)
        }
    }
    
}
</script>

<style>
    .MyComponent{
        border: solid;
    }
</style>