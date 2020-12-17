//  枚举类型
enum Status {
  MASSAGE,
  SPA,
  DABAOJIAN,
}

function getServe(status: any) {
  if (status === Status.MASSAGE) {
    return "massage";
  } else if (status === Status.SPA) {
    return "spa";
  } else if (status === Status.DABAOJIAN) {
    return "dabaojian";
  }
}

const result = getServe(Status.SPA);

console.log(`我要去${result}`);
console.log(Status.MASSAGE, Status[1]);