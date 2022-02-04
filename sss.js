let a = 1;
function test() {
  const a = 2;
  new Function("a", "console.log(a)")(a);
}
test();
