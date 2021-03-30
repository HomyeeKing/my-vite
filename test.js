const fs = require("fs");
const MarkdownIt = require("markdown-it");
const matter = require("gray-matter");
const MagicString = require('magic-string')
const markdown = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
});
const sourceFile = "sourcemap.js"
const raw = fs.readFileSync(sourceFile, "utf-8");
const s = new MagicString(raw)


s.overwrite(0,raw.length,`\nconst ttt = 123;\n console.log(ttt)`)

const map = s.generateMap({
    file:'sss.js.map',
    source:sourceFile
})

fs.writeFile('sss.js.map',map.toString(),()=>{})
fs.writeFile('sss.js',`${s.toString()}\n//# sourceMappingURL=sss.js.map\n//#sourceMappingURL=${map.toUrl()}`,()=>{})