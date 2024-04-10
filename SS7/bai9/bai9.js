"use strict";
function cal(n) {
    if (typeof (n) == "number") {
        return n * n;
    }
    else if (typeof (n) == "string") {
        return n.length;
    }
    else {
        return n.reduce((total, num) => {
            return total + num;
        }, 0);
    }
}
console.log(cal([1, 2, 3]));
