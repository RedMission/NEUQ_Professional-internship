<template>
  <div id="app">
    <MyContent :MyTitle="msg"  @newName="msg=$event" ></MyContent>
  </div>
</template>

<script>
  import MHeader from './components/Header'
export default {
  name: 'app',
  data(){
    return {
      msg:'hello vue!!'
    }
  },
  components:{
    "MHeader":MHeader
  },
  methods:{
    FCfn:function(m){//hello java
      this.msg = m;
    }
  }

}
</script>
<style>

</style>
