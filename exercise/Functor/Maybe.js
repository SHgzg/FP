const Maybe = function(x) {
    this.__value = x
}
Maybe.of = function(x) {
    return new Maybe(x)
}
Maybe.prototype.isNothing = function(x) {
    // 简化版
    return (this.__value === null || this.__value === undefined);
}
Maybe.prototype.map = function(f){
    return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
}
/*
1、Maybe与Container相似，但Maybe会先检查自己是否为空值，然后才调用map()传进来的函数
*/ 

console.log(Maybe.of(999));
console.log(Maybe.of(1).map(x=>x+2));