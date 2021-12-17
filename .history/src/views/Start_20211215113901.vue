<script>
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloVuex from "../components/HelloVuex.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    HelloVuex
  },
  setup() {
    
  },
})
</script>

<template>
  <HelloVuex />
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
