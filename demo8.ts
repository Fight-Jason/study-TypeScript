// // interface 接口
// // type alias 类型别名
// // 两者区别 类型别名可以直接给类型，比如string，而接口必须代表对象
// interface Girl {
//     name: string;
//     age: number;
//     bust: number,
//     waistline?: number  // 分必选项
// }

// const girl = {
//     name: '杨璐',
//     age: 18,
//     bust: 94,
//     waistline: 27
// }

// let screenResume = (girl: Girl) =>  {
//     let { name, age, bust } = girl
//     age < 24 && bust >= 90 && console.log(name + "进入面试");
//     age > 24 || (bust < 90 && console.log(name + "你被淘汰"));
// }

// let getResume = (gilr: Girl) => {
//     let { name, age, bust, waistline } = girl
//     console.log(name + "年龄是:" + age);
//     console.log(name + "胸围是:" + bust);
//     waistline && console.log(name + "腰围是:" + waistline)
// }

// screenResume(girl);
// getResume(girl);