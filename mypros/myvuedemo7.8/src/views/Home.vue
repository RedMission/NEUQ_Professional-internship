<template>
    <div>
      <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1']">
<!--            默认打开-->
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>商品列表</template>
              <el-menu-item-group>
                <el-menu-item index="1-1"><router-link to="productlist">商品列表</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link to="productinfo">商品信息</router-link></el-menu-item>
              </el-menu-item-group>
            </el-submenu>

          </el-menu>
        </el-aside>
        <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item ><router-link to="/logout">退出</router-link></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
          </el-header>

          <el-main>
            <router-view></router-view>
<!--            <el-table :data="tableData">-->
<!--              <el-table-column prop="date" label="ID" width="140">-->
<!--              </el-table-column>-->
<!--              <el-table-column prop="name" label="姓名" width="120">-->
<!--              </el-table-column>-->
<!--              <el-table-column prop="address" label="年龄">-->
<!--              </el-table-column>-->
<!--            </el-table>-->
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
    export default {
        name: "Home",
      data(){
          return {
            users:[]
          }
      },
      created() {
          //axios内部的then内的this是当前axios对象，而不是vue对象，因此把当前对象用vm指明
        var vm = this;
        this.axios({
          method:'get',
          url:''
        }).then(function (resp) {
          vm.users = resp.data.users
        });
      },
      methods:{
        // logout:function () {//退出，回到登陆页面
        //   this.$router.push("/Logout")
        //   }
      }
    }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
