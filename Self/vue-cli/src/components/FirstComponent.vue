<template>
  <div>
    <h2>FirstComponent 입니다.</h2>
    <FCChild 
    :fc-data="FCData"
    @make-str="getMakeStr"
    />
  </div>
</template>

<script>
import FCChild from '@/components/FCChild.vue'
export default {
    name:"FirstCom",
    components:{
        FCChild,
    },
    data(){
        return{
            FCData: "FitstComponent에서 보낸 데이터 입니다."
        }
    },
    methods:{
        getMakeStr(Data){
            console.log(`FCChild에서 보낸 ${Data}`)
        }
    }

}
</script>

<style>

</style>