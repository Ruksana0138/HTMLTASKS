let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// REAL CALCULATOR % LOGIC
function percentage() {
  let exp = display.value;

  let match = exp.match(/(\d+\.?\d*)([+\-*/])(\d+\.?\d*)$/);

  if (match) {
    let base = parseFloat(match[1]);
    let operator = match[2];
    let percentValue = parseFloat(match[3]);

    let result = (base * percentValue) / 100;

    display.value = exp.replace(/(\d+\.?\d*)$/, result);
  } else {
    // simple % (like 50% → 0.5)
    display.value = eval(exp) / 100;
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}