<script>
// import { setup } from "vue";
import { useRoute, useRouter } from "vue-router";
// 引入的useRoute,useRouter 相当于vue2的 this.$route()，this.$router()
export default {
  setup(props, ctx) {
    const toPageRoute = (type) => {
      if (type == "about") {
        router.push({
            name:'About'
        })
      }else{
         router.push({
            name:'Start'
        }) 
      }
    };
    const route = useRoute();
    const router = useRouter();
    return {
      toPageRoute,
      route,
      router,
    };
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


