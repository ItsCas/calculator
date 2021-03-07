import { calculate } from "./calculate.js";

function actie(el) {
    const uitkomst = calculate(parseFloat(document.getElementById('a').value), parseFloat(document.getElementById('b').value), el.value);
    document.getElementById('result').innerHTML = uitkomst;
}
const operator = document.getElementById("operator");
operator.addEventListener('change', function() {
    actie(this);
});