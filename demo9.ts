// interface Girl {
//     name: string,
//     age: number,
//     bust: number,
//     waistline?: number,
//     [propname: string]:  any, //定义任意属性,确定属性和可选属性都必须是它的子属性
//     say(): string,
// }

// //  接口继承
// interface Teacher extends Girl {
//     teach(): string
// }


// const girl = {
//     name: '杨璐',
//     age: 18,
//     bust: 94,
//     waistline: 24,
//     sex: '女',
//     say: ()=> {
//         return '居居女孩'
//     }
// }

// const girl2 = {...girl,teach: ()=> "英语老师" }

// let screenResume = (girl: Girl) =>  {
//     let { name, age, bust } = girl
//     age < 24 && bust >= 90 && console.log(name + "进入面试");
//     age > 24 || (bust < 90 && console.log(name + "你被淘汰"));
// }

// let getResume = (girl: Teacher) => {
//     let { name, age, bust, waistline, sex, say, teach } = girl
//     console.log(name + "年龄是:" + age);
//     console.log(name + "胸围是:" + bust);
//     waistline && console.log(name + "腰围是:" + waistline)
//     sex && console.log(name + "性别是" + sex)
//     say && console.log(`${name}是:${say()}并且是${teach()}`)
// }

// screenResume(girl);
// getResume(girl2);