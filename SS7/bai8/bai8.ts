function mergeObject<T,U>(obj1: T,obj2: U):T&U{
    let newObj={} as T&U;
    for(let key in obj1){
        newObj[key]=obj1[key];
    }
    for(let key in obj2){
        newObj[key]=obj2[key];
    }
    return newObj;
}
interface Person {
    name: string;
    age: number;
}

interface Address {
    city: string;
    country: string;
}
const person: Person = { name: "John", age: 30 };
const address: Address = { city: "New York", country: "USA" };

const merge = mergeObject(person, address);
console.log(merge);
