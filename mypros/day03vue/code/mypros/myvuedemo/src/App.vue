<template>
  <div id="app">
    <div style="width:50%" class="container">
      <div>
        <h3>Regist</h3>
        <h5>Email</h5>
        <input type="text" class="form-control" v-model="mail" /><br />
        {{mail}}
        <h5>Password</h5>
        <input type="password" class="form-control" v-model="password" /><br />
        {{password}}
        <h5>Gender</h5>
        <input type="radio" name="gender" v-model="gender" value="female" />男
        <input type="radio" name="gender" v-model="gender" value="male" />女<br />
        <h5>Hobby</h5>
        <input type="checkbox" name="hobby" v-model="hobby" value="music">音乐
        <input type="checkbox" name="hobby" v-model="hobby" value="movie">电影
        <input type="checkbox" name="hobby" v-model="hobby" value="sport">运动
        <br/>
        <button type="button" class="btn btn-success" @click="registfn">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from './components/Header'
export default {
  name: 'app',
  data(){
    return {
      mail:'',
      password:'',
      gender:'',
      hobby:''
    }

  },
  methods:{
    registfn:function(){

      this.axios({
        method:'get',
        url:'http://localhost:8090/regist?mail='+this.mail+'&password='+this.password,

      }).then(function (response) {
        console.log(response.data)
      });



    }
  }







}
</script>
<style>

</style>
