const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const countBtn = document.querySelector(".count");
const cost = document.querySelector(".cost");
const costInfo = document.querySelector(".cost-info");
const error = document.querySelector(".error");
error.style.display = "none";
const localData = document.querySelector(".localData");

const now = new Date();
const elDate = document.querySelector(".element");
const elDateText = `
Time: ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}
Day: ${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}
`

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
  const li = document.createElement("li");
  li.setAttribute("id", "li");
  li.innerText = sum + "USD" + elDateText;
  console.log(li);
  localData.appendChild(li);
  document.body.append(localData);
  localStorage.setItem("li", li.innerText);
  const data = localStorage.getItem("li");
  console.log(localStorage);
};

countBtn.addEventListener("click", function () {
  checkValue();
  const clearBtn = document.querySelector(".clearBtn");
  clearBtn.style.display = "block";
  clearBtn.addEventListener("click", function () {
    costInfo.style.display = "none";
    people.value = "";
    price.value = "";
    tip.value = 0;
    error.textContent = "";
    clearBtn.style.display = "none";
  });
});

const btnClearLocalStorage = document.querySelector(".btnClearLocalStorage");
btnClearLocalStorage.addEventListener("click", function() {
localStorage.clear();
console.log(localStorage);
li.remove();  
})
