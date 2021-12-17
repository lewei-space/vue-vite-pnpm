<script lang="ts">
import { ref,defineComponent } from 'vue'
export default defineComponent({
  props:{
    msg:String
  },
  setup() {
    return {
      inputNum: ref('hello boy'),
      localMsg:ref('what do ou think')
    }
  },
})
const count = ref(0)
</script>

<template>
  <h1>fa msg{{ msg }}</h1>
  <h2>local msg{{ localMsg }}</h2>
   <el-input v-model="inputNum" placeholder="Please input password" show-password />
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
