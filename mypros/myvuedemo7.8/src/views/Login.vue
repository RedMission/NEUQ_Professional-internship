<template>
    <div class="login-box">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item align="center">
          <el-button type="primary" @click="onSubmit('form')">登陆</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>

    </div>
</template>

<script>
    export default {
      name: "Login",
      data() {
        return {
          form: {
            name: '',
            password:''
          },
          rules: { //表单验证规则
            name:[
              { required: true, message: '请输入用户名', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            password:[
              { required: true, message: '请输入密码', trigger: 'blur' },
              { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
            ],

          }
        }
      },
      methods:{
        onSubmit(formName){
          this.$refs[formName].validate((valid) => {
            var vm = this;
            if (valid){
              // alert('submit!');
              this.axios({
                method:'get',
                url:'http://localhost:8090/login?name'+vm.form.name+'&password'+vm.form.password
              }).then(function (resp) {
                // console.log(resp)
                resp.data = "success";
                if (resp.data=="success"){
                  //登陆成功
                  this.$router.push("/Home")
                }else {
                  vm.$message.error('用户名或密码错误')
                }
              })
            }else {
              this.$message.error('用户名或密码格式错误');
              return false;
            }
          });
        }
      }
    }
</script>

<style scoped>
  .login-box{
    width: 400px;
    height: 200px;
    border-radius: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    margin: 150px auto;    /*外边距*/
    padding: 40px 40px 20px 0px;

  }
</style>
