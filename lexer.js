const fs = require('fs')

const { init, parse } = require('es-module-lexer');
(async () => {
  // either await init, or call parse asynchronously
  // this is necessary for the Web Assembly boot
  await init;

  const source = fs.readFileSync('./dy.js','utf-8')

const [imports, exports] = parse(source);
console.log(imports);
})();