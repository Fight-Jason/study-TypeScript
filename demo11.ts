// 类访问类型属性
// public 允许在类内部和外部被调用
// private 只允许再类的内部被调用，外部不允许调用
// protected 允许在类内及继承的子类中使用
// class Person {
//     public name: string;
//     public sayHello() {
//         console.log(this.name + "say hello")
//     }
// }

// class Teacher extends Person {
//     public sayBye() {
//         this.name;
//     }
// }

// const person =  new Person();
// person.name = "jspang.com"
// console.log(person.name);