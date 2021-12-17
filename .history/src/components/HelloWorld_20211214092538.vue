<script lang="ts">
import { ref, defineComponent, inject, reactive } from "vue";
export default defineComponent({
  props: {
    msg: String,
  },
  setup() {
    const injectMsg = inject("providemsg");
    const state=reactive({
      list:[]
    })
    const addOne=()=>{
      console.log('state',state)
      state.list.push("111")
    }
    return {
      inputNum: ref("hello boy"),
      localMsg: ref("what do ou think"),
      injectMsg,
      // list:ref([])
      state,
      addOne
    };
  },
});
</script>

<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="18">
            <el-input v-model="inputNum" placeholder="Please input" />
          </el-col>
          <el-col :span="6">
            <el-button type="primary" @click="addOne()">sure</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <div v-for="(item,index) in state.list" :key="index">
          <el-row>
            <el-col :span="4">
              {{index}}
            </el-col>
            <el-col :span="20">
              {{item}}
            </el-col>
          </el-row>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.el-header,
.el-footer {
  border: 1px solid #eee;
  // background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  border: 1px solid #eee;

  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 800px;
}

.el-main {
  border: 1px solid #eee;

  // background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
/* // input */
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

function inputNum(inputNum: any) {
  throw new Error("Function not implemented.");
}

function inputNum(inputNum: any) {
  throw new Error("Function not implemented.");
}

function inputNum(inputNum: any) {
  throw new Error("Function not implemented.");
}
