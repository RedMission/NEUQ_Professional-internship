<template>
  <aside class="sidebar" :class="{'sidebar-hide': !openNav}">
    <el-menu :default-active="selectMenu" class="sidebar-menu" :collapse="!openNav"
             :collapse-transition="false" :router="true" style="background-color: rgb(126, 170, 210)">
      <template v-for="menu in user.accessMenu">
<!--        权限控制-->
        <el-menu-item v-if="!menu.children" :key="menu.name" :index="menu.path">
          <i :class="menu.icon" v-if="menu.icon" style="color: #3f699a"></i>
          <span slot="title" style="color: #36608a">{{menu.title}}</span>
        </el-menu-item>
        <the-submenu :key="menu.name" :subMenu="menu" v-else></the-submenu>
      </template>
    </el-menu>
  </aside>
</template>

<script>
import TheLayoutSubSidebar from './TheLayoutSubSidebar'
import { mapState } from 'vuex' // 获取用户权限列表user.permissions

export default {
  name: 'TheLayoutSidebar',
  props: ['openNav'],
  components: {
    'the-submenu': TheLayoutSubSidebar
  },
  computed: {
    selectMenu () {
      return this.$route.meta.menuPath || this.$route.path
    },
    ...mapState(['user']) // 获得当前登陆用户的用户权限列表
  }
}
</script>

<style scoped lang="scss">
  .sidebar {
    float: left;
    width: 240px;
    height: 100%;
    border-right: 1px solid #e6e6e6;
    overflow: auto;

    .sidebar-menu {
      border: none;
      height: 100%;
    }
  }

  .sidebar-hide {
    width: 65px;
  }
</style>
