<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
  
    <el-menu-item index="1">  <i class="el-icon-tickets"></i></el-menu-item>
    <el-menu-item index="2">
      <el-input v-model="input" placeholder="请输入内容" ></el-input>
       <el-button plain  id="an">搜索</el-button>
    </el-menu-item>
    <el-submenu index="3" id="daohang">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" >我的工作台</el-menu-item>
    <el-menu-item index="4" >我的工作台</el-menu-item>
    <div class="ss">
    <el-menu-item index="5" ><el-button type="success" id="dl" >个人资料</el-button></el-menu-item>
    </div>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '2'
    };
  },
  methods: {
    handleSelect() {}
  }
};
</script>
<style>
 #an {
   margin-left: 20px;
 }
 #daohang {
   margin-left: 80px;
 }
 /* #dl {
  margin-left: 520px;
 } */
 .ss {
   height: 30px;
   line-height: 30px;
   width: 100px;
   float: right;
 }
</style>
