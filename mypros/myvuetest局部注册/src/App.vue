<template>
  <div id="app">
    <MyHeader></MyHeader>
    <MyContent></MyContent>
  </div>
</template>

<script>
  import Header from "./components/Header";
  import Content from "./components/Content";
  import Bottom from "./components/Bottom";
export default {
  name:'app',
  data(){},
  components:{//对象 键值对
    "MyHeader":Header,
    "MyContent":Content,
    "MyBottom":Bottom
  }

}

</script>

<style>

</style>
