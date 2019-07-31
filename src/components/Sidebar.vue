<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <el-menu-item index="1"> 
      <span slot="title">Weclome come to C魅</span>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">作业集</span>
      </template>
      <el-menu-item-group>
        <span slot="title">老师</span>
        <el-menu-item index="1-1">发布</el-menu-item>
        <el-menu-item index="1-2">查看</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="学生">
        <el-menu-item index="1-3">提交</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <span slot="title">查看</span>
        <el-menu-item index="1-4-1">作业</el-menu-item>
      </el-submenu>
    </el-submenu>
   <el-submenu index="3">
        <template slot="title">
        <i class="el-icon-message"></i>
        <span slot="title">收藏夹</span>
      </template>
      <el-menu-item index="3-1">错题</el-menu-item>
      <el-menu-item index="3-2">好题</el-menu-item>
    </el-submenu>
    <el-menu-item index="4">
      <i class="el-icon-edit-outline"></i>
      <span slot="title">C魅社区</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-setting"></i>
      <span slot="title">随手小记</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false 
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

