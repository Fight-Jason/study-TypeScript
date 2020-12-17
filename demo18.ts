// 泛型是类型系统中的“参数”，主要作用是为了类型的重用


interface Girl {
  name: string;
}

class SelectGirl<T extends Girl> {
  constructor(private girls: T[]) {}
  getGirl(index: number): string {
    return this.girls[index].name;
  }
}

const selectGirl = new SelectGirl([
  { name: "小红" },
  { name: "小黄" },
  { name: "小紫" },
]);
console.log(selectGirl.getGirl(1));


interface LengthDefine {
  length: number;
}


// 类型约束 参数必须含有length属性并且值是number类型
function loggingIdentity<T extends LengthDefine>(arg: T): T {
  console.log(arg.length);

  return arg;
}

loggingIdentity({length:1});

const itemFun = {
  getName: (name)=>{
      return name||"Tom";
  },
  getAge: (age)=>{
      return age||20;
  }
}

// student后面紧接的 <T> 表示声明一个表示类型的变量，Value: T 表示声明参数是 T 类型的，后面的 : T 表示返回值也是 T 类型的

function student<T>(value: T): T {
  return value;
}
let a: string = student(itemFun.getName('Jack'));
let b: number = student(itemFun.getAge(18));
console.log(a, b);//Jack 18