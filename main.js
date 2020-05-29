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
          if (getHistory().indexOf("=") != -1) {
            printHistory("");
            history = getHistory();
          }
          output = reverseNumberFormat(output);
          history = history + output;
          if (operator.id == "=") {
            if (getHistory() == "") {
              return;
            }
            let result = eval(history);
            history = history + operator.id;
            printHistory(history);
            printOutput(result);
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
    if (getHistory().indexOf("=") != -1) {
      printOutput("");
      printHistory("");
    }
    if (output != NaN) {
      let output = reverseNumberFormat(getOutput());
      if (getOutput().substr(getOutput().length - 1) == ".") {
        output = output + ".";
      }
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
  if (num === "" || num == "-") {
    return "";
  }
  const n = Number(num);
  if (!Number.isInteger(n)) {
    return n;
  }
  if (num.indexOf(".") != -1 && num.substr(num.length - 1) != ".") {
    return n;
  }
  let value = n.toLocaleString("en");
  if (num.substr(num.length - 1) == ".") {
    value = value + ".";
  }
  return value;
}
function reverseNumberFormat(num) {
  if (num == "-") {
    return num;
  }
  return Number(num.replace(/,/g, ""));
}
