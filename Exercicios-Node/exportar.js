console.log(exports === this)
this.a = 1
exports.b = 2
module.exports.c = 3

console.log(this)
console.log(exports)
console.log(module.exports)