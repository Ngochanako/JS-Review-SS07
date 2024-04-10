interface Person{
    name:string;
    id:number;
}
interface Employee extends Person{
    employeeId:number;
}
let person: Person={
    name:"ngoc",
    id:12,
}
let employee:Employee={
    name:"hoa",
    id:1,
    employeeId:123
}
console.log(person);
console.log(employee)