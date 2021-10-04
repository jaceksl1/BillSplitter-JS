const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const countBtn = document.querySelector(".count");
const cost = document.querySelector(".cost");
const costInfo = document.querySelector(".cost-info");
const error = document.querySelector(".error");
error.style.display = "none";

const checkValue = () => {
  if (price.value === "" || people.value === "" || tip.value === "") {
    error.textContent = "Fill all information!";
    error.style.display = "block";
  } else {
    countCost();
  }
};

const countCost = () => {
  const peopleNew = parseInt(people.value); //pareInt changes "" into numbers
  const priceNew = parseFloat(price.value);
  const tipNew = parseFloat(tip.value); //parseFloat changes "" whole numbers
  const sum = (priceNew + priceNew * tipNew) / peopleNew;
  costInfo.style.display = "block";
  cost.textContent = sum.toFixed(2);
  error.style.display = "none";
};

countBtn.addEventListener("click", checkValue);
