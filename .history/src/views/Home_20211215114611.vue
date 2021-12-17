<script>
// import { setup } from "vue";
export default {

  setup(props,ctx) {
      const toPageRoute=(type)=>{
          if(type=='about'){
              console.log(ctx)
          }
      },
      return{
          toPageRoute
      }
  },
};
</script>

<template>
  <el-row>
    <el-col :span="6" :offset="6">
      <div @click="toPageRoute('about')">About</div>
    </el-col>
    <el-col :span="6">
      <div @click="toPageRoute('start')">Start</div>
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
