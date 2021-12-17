<script setup>
import { ref,defineComponent } from 'vue'

defineProps({
  msg: String
})
export default defineComponent({
  setup() {
    return {
      inputNum: ref('hello boy'),
    }
  },
})
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

   <el-input v-model="inputNum" placeholder="Please input password" show-password />

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
