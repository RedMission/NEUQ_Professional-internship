<template>
    <div>
      子组件div
      {{MyTitle}}
<!--      <button type="button" @click="btnfn('调用父组件函数')">测试子传父</button>-->
      <button type="button" @click="doClick">测试子传父</button>
    </div>
</template>

<script>
    export default {
        name: "Content.vue",
      props:{
        'MyTitle':{
          type:String,
          required:true,
          default:'XXXX'
        },
        'btnfn':{
          type:Function
        }
      },
      methods:{
          doClick(){
            this.$emit('newName','改变后');//将args发射出去
          }
      }
    }
</script>

<style>

</style>
