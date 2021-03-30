import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path'
// const app =require('express')()
// const mockerApi = require('mocker-api')
// mockerApi(app,require.resolve('./mocker/index'))
// app.listen(1234)

// https://vitejs.dev/config/
export default defineConfig({
    root:'./test',
	plugins: [vue()],
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'src'),
            '~assets':path.resolve(__dirname,'src/assets')
        }
    }
    // server:{
    //     proxy:{
    //         '/rest':'http://localhost:1234'
    //     }
    // }
});
