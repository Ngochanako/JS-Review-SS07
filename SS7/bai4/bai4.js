"use strict";
function calculateSquare(n) {
    if (typeof (n) == "number") {
        return n * n;
    }
    else {
        let newArray = n.map((item) => {
            return item * item;
        });
        return newArray;
    }
}
console.log(calculateSquare([1, 2, 3]));
console.log(calculateSquare(5));
