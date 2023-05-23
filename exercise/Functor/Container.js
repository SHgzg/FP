//基本函子Container（Identity）

const Container = function(x) {
    this.__value = x;
};
//01-构建基本容器
Container.of = function (x) {return new Container(x);};
console.log(Container.of(666))
/*小节
1、使用Container.of作为构造器，避免new
2、将值储存进Container容器
*/
/*问题
1、包裹存储的目的是什么？
2、如何处理容器内的值？
    - .__value？
3、容器中放几个值？
*/

//02-操作容器内的值
Container.prototype.map = function(f) {
    return Container.of(f(this.__value))
}
console.log(Container.of(666).map(x => x+333))
/*小节
1、在容器原型上添加 map() 方法用以操作容器内的值
2、将对容器内储存值的操作结果放入一个新的容器并返回
3、保持在不离开Container的情况下持续操作容器内部的值
*/
/*问题
1、旧容器内的值会被储存多久？（不重要）
2、如何处理一个数据拆分成多个？（重要）
*/
/*Tip
1、functor 是实现了map()并遵守【一些规则】的容器类型
*/