"use strict";
function mergeObject(obj1, obj2) {
    let newObj = {};
    for (let key in obj1) {
        newObj[key] = obj1[key];
    }
    for (let key in obj2) {
        newObj[key] = obj2[key];
    }
    return newObj;
}
const person = { name: "John", age: 30 };
const address = { city: "New York", country: "USA" };
const merge = mergeObject(person, address);
console.log(merge);
