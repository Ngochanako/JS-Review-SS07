"use strict";
function calculateArea(obj) {
    if (obj.name == "square") {
        if (typeof obj.sideLength == "number") {
            return obj.sideLength ** 2;
        }
    }
    if (obj.name == "circle") {
        if (typeof obj.radious == "number") {
            return obj.radious ** 2 * 3.14;
        }
    }
}
console.log(calculateArea({ name: "square", sideLength: 20, radious: "" }));
