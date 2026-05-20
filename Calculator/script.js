const display = document.getElementById("display");

// Add values to display
function appendValue(value) {
    display.value += value;
}

// Clear all
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch {
        alert("Invalid Expression");
    }
}
