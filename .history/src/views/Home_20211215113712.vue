<script>
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "../components/HelloWorld.vue";
import HelloVuex from "../components/HelloVuex.vue";
import { ref, provide } from "vue";
provide("providemsg", "providehello");
export default {
  components: {
    HelloVuex,
    HelloWorld,
  },
  setup() {
    
  },
};
</script>

<template>
  <el-row>
      <el-col :span="6">
          
      </el-col>
       <el-col :span="6">
      </el-col>
  </el-row>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
