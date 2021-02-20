import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// const app =require('express')()
// const mockerApi = require('mocker-api')
// mockerApi(app,require.resolve('./mocker/index'))
// app.listen(1234)

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
    // server:{
    //     proxy:{
    //         '/rest':'http://localhost:1234'
    //     }
    // }
});
