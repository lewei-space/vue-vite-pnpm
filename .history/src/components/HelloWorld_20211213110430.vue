<script >
import { ref,defineComponent,inject } from 'vue'
export default defineComponent({
  props:{
    msg:String
  },
  setup() {
    const injectMsg=inject('providemsg')
    return {
      inputNum: ref('hello boy'),
      localMsg:ref('what do ou think'),
      injectMsg
    }
  },
})
const count = ref(0)
</script>

<template>
  <h1>fa msg: {{ msg }}</h1>
  <h2>local msg: {{ localMsg }}</h2>
   <h3>fa msg:    {{ injectMsg }}</h3>
   <el-input v-model="inputNum" placeholder="Please input password" show-password />
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
