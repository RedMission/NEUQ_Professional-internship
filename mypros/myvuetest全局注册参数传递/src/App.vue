<template>
  <div id="app">
<!--    <MyContent :MyTitle="msg" :btnfn="FCfn"></MyContent>-->
    <MyContent :MyTitle="msg" @newName="msg=$event"></MyContent>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg:'hello vue!'
    }
  },
  methods:{
    FCfn:function(m){//参数在此例中由调用的子组件传入
      this.msg = m;
    }
  },
}
</script>

<style>

</style>
