"use strict";
let $ = (id) => {
  return document.getElementById(id);
};

//Accessing DOM Elements
let Name = $("Name");
let weight = $("weight");
let height = $("height");
let subButton = $("subBtn");
let loading = $("loading");
let outputMesg = $("output");
let body = document.querySelector("body");

//variables used in this program
let Name_input, weight_input, height_input;

subButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (Name.value === "" || weight.value === "" || height.value === "") {
    alert("required field should not be empty");
    return;
  }
  Name_input = Name.value;
  weight_input = weight.value;
  height_input = height.value;
  if (height_input < 1 || weight_input < 1) {
    alert(
      "Height and weight cannot be 0 or negative! Please enter correct data!"
    );
    return;
  }
  calculateBMI();
  Name.value === "";
  weight.value === "";
  height.value === "";
  outputMesg.innerText = "";
  // body.style.backgroundColor = "red";
});

const calculateBMI = () => {
  //bmi = weight / Math.pow(height,2);
  let category = document.createElement("span");

  setTimeout(() => {
    loading.innerText = "Calculating .";
  }, 1000);

  setTimeout(() => {
    loading.innerText = "Calculating ..";
  }, 3000);

  setTimeout(() => {
    loading.innerText = "Calculating ...";
  }, 5000);

  setTimeout(() => {
    loading.innerText = "Results:";
    let BMI = weight_input / Math.pow(height_input, 2);
    if (BMI < 18.5) {
      category.innerText = "underweight.";
      outputMesg.innerText = `${Name_input} your bmi is ${BMI.toFixed(
        1
      )}, you are `;
      category.style.color = "yellow";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      category.innerText = "normal weight.";
      outputMesg.innerText = `${Name_input} your bmi is ${BMI.toFixed(
        1
      )}, you are `;
      category.style.color = "grey";
    } else if (BMI >= 25 && BMI <= 29.9) {
      category.innerText = "overweight.";
      outputMesg.innerText = `${Name_input} your bmi is ${BMI.toFixed(
        1
      )}, you are `;
      category.style.color = "orange";
    } else if (BMI >= 30 && BMI <= 34.9) {
      category.innerText = "obese.";
      outputMesg.innerText = `${Name_input} your bmi is ${BMI.toFixed(
        1
      )}, you are `;
      category.color = "#f54747";
    } else if (BMI >= 35) {
      category.innerText = "extremely obese.";
      outputMesg.innerText = `${Name_input} your bmi is ${BMI.toFixed(
        1
      )}, you are `;
      category.style.color = "red";
    } else {
      outputMesg.innerHTML =
        "<i>Error in calculating BMI, Make sure you have entered correct data<i>";
      outputMesg.style.color = "red";
    }
    outputMesg.append(category);
  }, 7000);
};
