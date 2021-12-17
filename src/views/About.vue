<script>
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "../components/HelloWorld.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    HelloWorld
  },
  setup() {
    
  },
})
</script>

<template>
<el-row>
  <el-col>
    About TodoList
  </el-col>
</el-row>
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style>
</style>
