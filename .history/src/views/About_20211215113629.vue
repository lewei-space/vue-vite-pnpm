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
  <HelloWorld msg="Hello Vue 3 + Vite" />
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
