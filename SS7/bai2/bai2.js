"use strict";
function validatePerson(obj) {
    if ('age' in obj && 'name' in obj && 'address' in obj) {
        return true;
    }
    return false;
}
let student = {
    name: "ngoc",
    age: 18
};
console.log(validatePerson(student));
