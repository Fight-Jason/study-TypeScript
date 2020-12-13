
// //  类属性： getter属性关键字get  setter 属性关键词 set，不是方法是属性
// //  static 不需要 new() 实例也可以调用
// //  readonly 属性只读，不可修改
// class Xiaojiejie {
//     constructor(private _age:number){}
//     get age() {
//         return  this._age - 7
//     }
//     set age(age:number){
//         this._age = age + 7
//     }
// }

// const yanglu = new Xiaojiejie(25)
// yanglu.age = 25
// console.log(yanglu.age)

// class Girl {
//     sayLove() {
//       return "I Love you";
//     }
// }
// const girl = new Girl();
// console.log(girl.sayLove());



// class Person {
//     public readonly _name :string;
//     constructor(name:string ){
//         this._name = name;
//     }
// }

// const person = new Person('jspang')
// console.log(person._name)