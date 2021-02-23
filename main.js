import { calculate } from "./calculate.js";

window.actie = function(el) {
    const uitkomst = calculate(document.getElementById('a').value, document.getElementById('b').value, el.value);
    document.getElementById('result').innerHTML = uitkomst;
}