<template>
    <div>
      商品列表...
      {{MyTitle}}
      <button type="button" @click="doClick">点我</button>
    </div>
</template>

<script>
    export default {
        name: "Content.vue",
        props:{
          'MyTitle':{
            type:String,
            required:true,
            default:'XX'
          },
          'btnfn':{
            type:Function
          }
        },
      methods:{
          doClick(){
            this.$emit('newName','hello js');
          }
      }
    }
</script>

<style scoped>

</style>
