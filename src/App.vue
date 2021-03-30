<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <Test  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Test from '/src/components/Test.vue'

export default defineComponent({
  name: 'App',
  components: {
    Test
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 70px;
}
</style>