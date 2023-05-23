const Maybe = function(x) {
    this.__value = new Maybe(x)
}
Maybe.of = function(x) {
    return this.__value
}
Maybe.prototype.isNothing = function(x) {
    // 简化版
    return (this.__value === null || this.__value === undefined);
}
Maybe.prototype.map = function(f){
    return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
}