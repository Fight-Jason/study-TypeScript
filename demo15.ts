
// 类型断言就是通过断言的方式确定传递过来的准确值

interface Waiter {
    anjiao: boolean;
    say: () => {};
}

interface Teacher {
    anjiao: boolean;
    skill: () => {};
}


// as关键字,用来限制child的类型。
function judgeWho(animal: Waiter | Teacher) {
    if (animal.anjiao) {
        (animal as Teacher).skill();
    } else {
        (animal as Waiter).say();
    }
}


// 类型保护-typeof 语法
function add(first: string | number, second: string | number) {
    if (typeof first === "string" || typeof second === "string") {
      return `${first}${second}`;
    }
    return first + second;
  }

 add(1,2)



// 类型保护 -instanceof语法
class NumberObj {
    count: number;
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
      return first.count + second.count;
    }
    return 0;
}

addObj({count:1},{obj:"obj"})