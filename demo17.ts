// 泛型指的是泛指的类型

// 泛型定义
// function join<JSPang>(first: JSPang, second: JSPang) {
//     return `${first}${second}`;
// }
// join<string>("jspang", ".com");
// join<number>(1, 2);



// 多个泛型定义
function join<T, P>(first: T, second: P) {
    return `${first}${second}`;
}
join<number, string>(1, "2");