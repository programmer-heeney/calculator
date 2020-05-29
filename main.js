"use strict";

// Handle click on operator buttons
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    alert("The operator clicked:" + operator.id);
  });
});

// Functions
function getHistory() {
  return document.getElementById("history-value").innerText;
}
function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}
function getOutput(num) {
  return document.getElementById("output-value").innerText;
}
function printOutput(num) {
  document.getElementById("output-value").innerText = getFormattedNumber(num);
}
function getFormattedNumber(num) {
  if (num == "") {
    return num;
  }
  const n = Number(num);
  const value = n.toLocaleString("en");
  return value;
}
function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}
