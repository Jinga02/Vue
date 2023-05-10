<template>
  <div>
      <li>
        <img :src="order.menu.image" alt="">
        <div>
          <p>{{ order.menu.title }}</p>
          <p>사이즈 : {{ order.size.name }}</p>
        </div>
        <hr>
      </li>
    
    
  </div>
</template>

<script>
export default {
  props:{
    order:Object,
  },
}
</script>

<style scoped>
  
  img{
    width: 50px;
    height: 50px;
    border-radius: 16px;
    display: inline-block;
    vertical-align: middle; /* 이미지와 span 태그를 수직 가운데 정렬하기 위해 */
  }

  li{
    list-style: none;
    align-items: center;
  }


</style>