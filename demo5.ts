// 定义函数返回值

function getToal(one: number,two: number) : number{
    return one + two
}

var total = getToal(1,2)

// 定义没有返回值的函数
function sayHello() : void{
    console.log("hello world")
}


// 参数对象类型的函数
function add({ one, two } : { one: number, two: number }) : number{
    return one + two;
  }
  
var total = add({ one: 1, two: 2 });