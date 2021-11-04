<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <span class="cursor-pointer hover:text-red" >sss</span>
    <Test />
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

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 70px;
}

.test {
   color:black
}

.m-2{
    color:red;
}
</style>