interface obj1{
    name:string,
    id:number,
}
interface obj2{
    name:string,
    className:string,
}
//union lấy thuộc tính 1 trong 2 obj1 hoặc obj2 hoặc cả 2
type obj= obj1 | obj2;
let n:obj={name:"ngoc",className:"m"}
let x:obj={id:1,className:"k"}//lỗi
console.log(n);
//interfection bắt buộc có tất cả các thuộc tính có ở cả 2 object
type obj3=obj1&obj2;
let m:obj3={id:3,name:"ng",className:"d"}
console.log(m);