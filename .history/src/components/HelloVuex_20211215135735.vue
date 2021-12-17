<script lang="ts">
import { ref, defineComponent, inject, reactive } from "vue";
import { Edit, Share, Delete, Search, Grape } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    msg: String,
  },
  components: { Edit, Share, Delete, Search, Grape },
  setup() {
    const store = useStore();
    const storeState = store.state;
    const injectMsg = inject("provide msg");
    const state = reactive({
      list: storeState.list,
      inputNum: ref(),
      color: null,
      oneData: null,
      dialogVisible: false,
      oneIndex: null,
      pleaseInput: "Please input add value",
      searchKey: null,
    });
    // add
    const addOne = () => {
      if (!state.inputNum) {
        ElMessage.error("please input your data");
        return;
      }
      store.commit("addTodo", {
        name: "数据" + state.list.length,
        value: state.inputNum,
        status: false,
      });
      state.inputNum = "hello boy" + state.list.length;
    };
    // delete
    const deleteOne = (index) => {
      store.commit("delTodo", index);
    };
    // all delete
    const deleteAll = () => {
      store.commit("clearTodo", state.list);
    };
    // edit
    const editOne = (index) => {
      state.oneIndex = index;
      state.oneData = state.list[index];
      state.dialogVisible = true;
    };
    const cancelConfirm = (type) => {
      state.dialogVisible = false;
      if (type == "confirm") {
        store.commit("editTodo", {
          data: state.oneData,
          index: state.oneIndex,
        });
      } else {
        state.oneData = {};
      }
    };
    // select
    const searchOne = () => {
      state.searchKey = state.inputNum;
      state.pleaseInput = "please input your search key";
      const middleArr = [];
      if (state.searchKey != null) {
        state.list.forEach((item) => {
          if (item.value.indexOf(state.searchKey) != -1) {
            middleArr.push(item);
          }
        });
        state.list = middleArr;
      } else {
        state.list = storeState.list
      }
    };
    //random color
    const Color = () => {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      return "rgba(" + r + "," + g + "," + b + ",1)";
    };
    return {
      // data
      localMsg: ref("what do ou think"),
      injectMsg,
      state,
      // funciton
      editOne,
      Color,
      addOne,
      deleteOne,
      cancelConfirm,
      searchOne,
      deleteAll,
      store,
      storeState,
    };
  },
});
</script>

<template>
  <el-container>
    <el-aside width="200px">helloVuex</el-aside>
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="15">
            <el-input
              v-model="state.inputNum"
              :placeholder="state.pleaseInput"
            />
          </el-col>
          <el-col :span="3">
            <el-button type="primary" @click="addOne()">ADD</el-button>
          </el-col>
          <el-col :span="3">
            <el-button type="primary" :icon="Search" @click="searchOne()"
              >Search</el-button
            >
          </el-col>
          <el-col :span="3">
            <el-button type="primary" @click="deleteAll()">delete</el-button>
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
              <el-col :span="2">
                <el-checkbox v-model="item.status"></el-checkbox>
              </el-col>
              <el-col :span="6">
                <div class="allGrape">
                  <div
                    class="oneGrape"
                    v-for="(items, indexs) in index + 1"
                    :key="indexs"
                  >
                    <el-icon><grape :style="{ color: Color() }" /></el-icon>
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                {{ item.name }}
              </el-col>
              <el-col :span="4" :style="{ color: Color() }">
                {{ item.value }}
              </el-col>
              <el-col :span="3">
                <el-icon @click="deleteOne(index)">
                  <delete style="color: red; cursor: pointer" />
                </el-icon>
              </el-col>
              <el-col :span="3">
                <el-icon @click="editOne(index)">
                  <edit style="cursor: pointer" />
                </el-icon>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- /////dialog/////// -->
        <el-dialog
          v-model="state.dialogVisible"
          title="edit your choose one data"
          width="50%"
        >
          <el-form
            label-position="top"
            label-width="100px"
            :model="state.oneData"
          >
            <el-form-item label="Name">
              <el-input v-model="state.oneData.name"></el-input>
            </el-form-item>
            <el-form-item label="Value">
              <el-input v-model="state.oneData.value"></el-input>
            </el-form-item>
          </el-form>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="cancelConfirm('cancel')">Cancel</el-button>
              <el-button type="primary" @click="cancelConfirm('confirm')"
                >Confirm</el-button
              >
            </span>
          </template>
        </el-dialog>
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
.allGrape {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.oneGrape {
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
  padding: 0 !important;
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
