<template>
  <div class="border">
    <h1>This is MyComponent</h1>
    <MyChild static-props="component(부모)에서 child(자식)로"
    :my-props="dynamicProps"
    @child-to-parent="parentGetEvent"
    @child-input="getDynamicData"/>
    <!-- 앞의 key값(dynamic-props)이란 이름으로 뒤의 ""안에 오는 데이터(dynamicProps)를 전달하겠다. -->
  </div>
</template>

<script>
import MyChild from '@/components/MyChild'

export default {
  name: 'MyComponent',
  components: {
    MyChild,
  },
  // 데이터 생성
  data: function(){
    return {
      dynamicProps: "MyComponent에서 보낸 데이터다."
    }
  },
  methods: {
    parentGetEvent(inputData){
      console.log('자식 컴포넌트에서 발생한 이벤트')
      // 이벤트와 연결된 부모 컴포넌트의 핸들러 함수의 인자로 사용가능
      console.log(`child에서 보낸 ${inputData}를 받음`)
    },
    getDynamicData(input){
      console.log(`child에서 입력한 ${input}을 출력`)
  },
  }
}

</script>

<style>
  .border {
    border: solid;
  }
</style>
