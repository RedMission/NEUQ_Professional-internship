<template>
    <div>
      {{id}}商品列表
    </div>
</template>

<script>
    export default {
        name: "Producets.vue",
      data(){
          return{
            id:this.$route.params.id
          }
      }
    }
</script>

<style scoped>

</style>
