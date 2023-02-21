`use strict`;

// Selecting the diffent html element.
const firstNumberInput = document.querySelector(`#firstnumber`);
const secondNumberInput = document.querySelector(`#secondnumber`);
const operatorInput = document.querySelector(`#operator`);
const clearBtn = document.querySelector(`#clear`);
const calculateBtn = document.querySelector(`#calculate`);
const ulResults = document.querySelector(`#results`);
const checkboxBtn = document.querySelector(`#doround`);
const decimals = document.querySelector(`#decimals`);

// Creating diffent variables to hold a value in
let firstNumber;
let secondNumber;
let resultValue;
let result;
let roundingUp;

window.addEventListener(`DOMContentLoaded`, settingUp);

function settingUp() {
  console.log(`settingUp`);
  //Call clearResults on click
  clearBtn.addEventListener(`click`, clearResults);
  //Call calculate on click
  calculateBtn.addEventListener(`click`, calculate);
}

function clearResults() {
  console.log(`clearResults`);
  //clear the result list
  ulResults.textContent = ``;
}

function calculate() {
  console.log(`calculate`);

  //Taking the value and input into the variable
  firstNumber = parseInt(firstNumberInput.value);
  secondNumber = parseInt(secondNumberInput.value);
  operator = operatorInput.value;

  // Looing what operator there is choicen and calculate
  if (operator === `add`) {
    resultValue = parseInt(firstNumber) + parseInt(secondNumber);
  } else if (operator === `sub`) {
    resultValue = firstNumber - secondNumber;
  } else if (operator === `mul`) {
    resultValue = firstNumber * secondNumber;
  } else if (operator === `div`) {
    resultValue = firstNumber / secondNumber;
  }

  // Looking if the checkbox i checked.
  if (checkboxBtn.checked == true) {
    // Take the decimals value, and add it to a variable
    roundingUp = parseInt(decimals.value);
    // Take the result and round it up
    resultValue = resultValue.toFixed(roundingUp);
  }

  firstNumberInput.value = resultValue;

  // Creating a html list element
  result = document.createElement(`li`);
  result.textContent = resultValue;
  // Pasing the list element in the DOM.
  ulResults.appendChild(result);
  // Adding scroll to the result list
  ulResults.scrollTop = ulResults.scrollHeight;
}