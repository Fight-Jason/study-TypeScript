// annotation 类型注解 - 人为定义变量类型
let count: number;
count = 123


// inference 类型判断 - 通过变量的值倒推变量类型
let countInference = 123;

function getTotal(one: number, two :number) {
    return one + two;
  }
  
var total = getTotal(1, 2);