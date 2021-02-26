<template>
  <div id="app">
    <div class="container">
<!--      <span>-->
<!--        <router-link to="/Home">首页</router-link>-->
<!--      </span>-->
<!--      <span>-->
<!--        <router-link to="/Producets">商品列表</router-link>-->
<!--      </span>-->
<!--   修改bootstrap导航栏-->
      <div class="row">
        <ul class="nav nav-pills">
          <li role="presentation"><router-link to="/Home">首页</router-link></li>
          <li role="presentation"><router-link to="/Producets/1">食品</router-link></li>
          <button type="button" @click="btnfn">返回</button>
          <li role="presentation"><router-link to="/Producets/2">服饰</router-link></li>
          <li role="presentation"><router-link to="/Producets/3">家电</router-link></li>
        </ul>
      </div>
      <div class="row" id="rv">
        <router-view></router-view>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {//键：值

    }
  },
  methods:{
    btnfn:function () {
      this.$router.push("/Home");
    }
  },
}
</script>

<style>
  #rv{
    border: 1px solid darkslateblue;
  }
</style>
