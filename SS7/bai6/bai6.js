"use strict";
function print(chuoi) {
    if (Array.isArray(chuoi)) {
        for (let btn of chuoi) {
            console.log(btn);
        }
    }
    else {
        console.log(chuoi);
    }
}
print(["ngoc", "kkkk"]);
