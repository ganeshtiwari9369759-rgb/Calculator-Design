const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function appendOperator(operator) {
    if (display.value === "") return;
    const lastChar = display.value.slice(-1);
    if ("+-*/".includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function appendDot(dot) {
    let current = display.value;
    if (current === "") {
        display.value = "0.";
        return;
    }
    const parts = current.split(/[-+*/]/);
    const lastNumber = parts[parts.length - 1];
    if (!lastNumber.includes(".")) {
        display.value += dot;
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
