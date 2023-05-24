let Left = function(x) {
    this.__value = x
}

Left.of = function(x){
    return new Left(x)
}

Left.protptype.map = function(f){
    return this
}

let Right = function(x) {
    this.__value = x
}

Right.prototype.of = function(x){
    return new Right(x)
}

Right.protptype.map = function(f){
    return new Rights(f(this.__value))
}
