/**
 * Created by likai on 2017/4/20.
 */

var ctx =1;
var func1 = function (ctx,next){
    next();
}
var func2 = function (ctx,next){
    next();
}
var p = Promise.resolve(
   func1(ctx,function next(){

     return  Promise.resolve(
           func2(ctx,function next(){
               return ++ctx;
           })
       )
   })
)
p.then(function(ctx){
    console.log(ctx);
})

