<template>
  <div class="border">
    <h1>This is MyComponent</h1>
    <!-- 자식 컴포넌트 사용 -->
    <MyChild />
  </div>
</template>

<script>
// 자식 컴포넌트 불러오기
import MyChild from '@/components/MyChild'

export default {
    name : 'MyComponent',
    // 자식 컴포넌트 등록
    components : {
      MyChild,
    }
}
</script>

<style>
  .border {
    border: solid;
  }
</style>

