<template>
  <div id="app">
    <el-container>
      <el-header>
        <navbar />
      </el-header>

      <el-container>
        <el-aside style="width: 200px;">
          <sidebar />
        </el-aside>
        <el-main>
          <Content />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

export default {
  name: "app",
  components: {
    Navbar,
    Sidebar,
    Content
  }
};
</script>