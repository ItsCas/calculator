/* Delen van twee waarden*/
import { divide } from "./divide.js";
import { multiply } from "./multiply.js";
import { substract } from "./substract.js";
import { add } from "./add.js";

function calculate(a, b, operator) {
    "use strict";
    let c = 0;
    switch (operator) {
        case "+":
            c = add(a, b);
            break;
        case "-":
            c = substract(a, b);
            break;
        case "*":
            c = multiply(a, b);
            break;
        case "/":
            c = divide(a, b);
            break;
        default:
            c = "error";
    }
    return c;
}

export { calculate };