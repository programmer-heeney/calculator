"use strict";

// Handle click on operator buttons
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    switch (operator.id) {
      case "clear":
        printHistory("");
        printOutput("");
        break;

      case "backspace":
        printOutput(reverseNumberFormat(getOutput().slice(0, -1)));
        break;

      default:
        let output = getOutput();
        let history = getHistory();
        if (output == "") {
          history = history.slice(0, -1) + operator.id;
          printHistory(history);
        }
        if (output != "") {
          output = reverseNumberFormat(output);
          history = history + output;
          if (operator.id == "=") {
            let result = eval(history);
            printOutput(result);
            printHistory("");
          } else {
            history = history + operator.id;
            printHistory(history);
            printOutput("");
          }
        }
    }
  });
});

// Handle click on number buttons
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    let output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      output = output + number.innerText;
      printOutput(output);
    }
  });
});

// Functions
function getHistory() {
  return document.getElementById("history-value").innerText;
}
function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}
function getOutput() {
  return document.getElementById("output-value").innerText;
}
function printOutput(num) {
  document.getElementById("output-value").innerText = getFormattedNumber(num);
}
function getFormattedNumber(num) {
  if (num == "" || num == "-") {
    return "";
  }
  const n = Number(num);
  const value = n.toLocaleString("en");
  return value;
}
function reverseNumberFormat(num) {
  if (num == "-") {
    return num;
  }
  return Number(num.replace(/,/g, ""));
}
