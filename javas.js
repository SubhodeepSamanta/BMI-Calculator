let modeBtn = document.querySelector(".button");
let body = document.querySelector("body");
var textElement = document.querySelector(".intro");
let mode = "lightMode";

modeBtn.addEventListener("click", () => {
  if (mode === "lightMode") {
    mode = "darkMode";
    body.classList.add("darkMode");
    body.classList.remove("lightMode");
    textElement.style.color = "white";
  } else {
    mode = "lightMode";
    body.classList.add("lightMode");
    body.classList.remove("darkMode");
    textElement.style.color = "black";
  }
});

const calculateButton = document.querySelector(".lower");
const maleRadioButton = document.getElementById("male");
const femaleRadioButton = document.getElementById("female");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("Weight");

calculateButton.addEventListener("click", calculateBMI);

function calculateBMI() {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    calculateButton.innerHTML =
      "Please enter valid values for height and weight.";
    return;
  }

  const bmi = weight / ((height / 100) * (height / 100));

  let category;

  if (maleRadioButton.checked || femaleRadioButton.checked) {
    category = getBMICategory(bmi);
    calculateButton.innerHTML = `<p>Your BMI is ${bmi.toFixed(2)}. ${
      category.text
    }</p>`;
    calculateButton.style.backgroundColor = category.color;
  } else {
    calculateButton.innerHTML = "<p>Please select your gender.</p>";
  }
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return {
      text: "Your BMI suggests you are underweight.",
      color: "rgb(250, 166, 127)",
    };
  } else if (bmi >= 18.5 && bmi < 25) {
    return {
      text: "Your BMI suggests you are within a healthy weight range.",
      color: "rgb(120, 190, 120)",
    };
  } else if (bmi >= 25 && bmi <= 29.9) {
    return {
      text: "Your BMI suggests you are overweight.",
      color: "rgb(209, 207, 90)",
    };
  } else {
    return {
      text: "Your BMI suggests you are obese.",
      color: "rgb(196, 87, 87)",
    };
  }
}
