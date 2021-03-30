const sass = require('sass')
const fs = require('fs')
const file = './src/assets/index.scss'
const data = fs.readFileSync(file,'utf-8')
sass.render({
    // file,
    outFile:'./sss.css',
    data,
    importer(url)
},(err,res)=>{
    console.log(err);
    console.log(res);
})

