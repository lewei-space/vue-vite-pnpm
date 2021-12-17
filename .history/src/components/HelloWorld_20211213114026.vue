<script lang="ts">
import { ref, defineComponent, inject } from "vue";
export default defineComponent({
  props: {
    msg: String,
  },
  setup() {
    const injectMsg = inject("providemsg");
    return {
      inputNum: ref("hello boy"),
      localMsg: ref("what do ou think"),
      injectMsg,
    };
  },
});
</script>

<template>
  <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
