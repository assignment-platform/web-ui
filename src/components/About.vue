<template>
<div>
    <el-container>
      <el-header>
        <Navbar />
      </el-header>

      <el-container>
        <el-aside style="width: 200px;">
          <Sidebar />
        </el-aside>
        <el-main>
          <Content />
        </el-main>
      </el-container>
    </el-container>
     <router-link to="/logout">退出登录</router-link>
  </div>
 
</template>

<script>
import Axios from "axios";
import Content from './Content'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
export default {
   components:{
     Content,
     Sidebar,
     Navbar
   },
  created() {
    Axios.get("http://localhost/user/about", { withCredentials: true })
      .then(response => (response.data))
      .catch(error => {
        console.log(error);
        this.$router.push('/login')
      });
  }
};
</script>

