<script lang="ts">
import { ref, defineComponent, inject, reactive } from "vue";
import { Edit, Share, Delete, Search, Grape } from "@element-plus/icons-vue";

export default defineComponent({
  props: {
    msg: String,
  },
  components: { Edit, Share, Delete, Search, Grape },

  setup() {
    const injectMsg = inject("providemsg");
    const state = reactive({
      list: [],
      inputNum: ref("hello boy"),
      color:null
    });
    const addOne = () => {
      console.log("state", state);
      state.list.unshift({
        name: "数据" + state.list.length,
        value: state.inputNum,
      });
      state.inputNum = "hello boy" + state.list.length;
    };
    //颜色对象
  const Color=()=>{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    state.color = 'rgba('+ r +','+ g +','+ b +',0.8)';
    return 'rgba('+ r +','+ g +','+ b +',0.8)';
  }
    return {
      localMsg: ref("what do ou think"),
      injectMsg,
      state,
      addOne,
      Color
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
          <el-col :span="20">
            <el-input v-model="state.inputNum" placeholder="Please input" />
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="addOne()">ADD</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <div class="mainDis">
          <div
            class="oneState"
            v-for="(item, index) in state.list"
            :key="index"
          >
            <el-divider></el-divider>
            <el-row>
              <el-col :span="6">
                <div class="allGrape">
                  <div class="oneGrape" v-for="(items,indexs) in index+1" :key="indexs">
                  <el-icon><grape :style="{color:Color()}" /></el-icon>
                </div>
                </div>
              </el-col>
              <el-col :span="2"> 排序:{{ index + 1 }} </el-col>
              <el-col :span="4">
                {{ item.name }}
              </el-col>
              <el-col :span="8">
                {{ item.value }}
              </el-col>
              <el-col :span="2">
                <el-icon>
                  <delete style="color: red; cursor: pointer" />
                </el-icon>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.mainDis {
  width: 100%;
  height: 100%;
}
.oneState {
}
.allGrape{
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.oneGrape{
  width: 25%;
}
///
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
  // text-align: center;
  // line-height: 160px;
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

function inputNum(arg0: string, state: { list: any[]; }, inputNum: any) {
  throw new Error("Function not implemented.");
}

function inputNum(arg0: string, state: { list: any[]; }, inputNum: any) {
  throw new Error("Function not implemented.");
}
