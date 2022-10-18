window.addEventListener('DOMContentLoaded', function (event) {
  const pric1Divan = 20000;
  const pric2Stul = 5000;
  const pric3Shkaf = 12000;
  const priceProm = 0;
  let price = pric1Divan;
  let priceAll = priceProm;
  let radioElementCustom = document.getElementById("radioElement"); 
  let selectElementMySelect = document.getElementsByName("selectElementMebel");
  let checkElementMyCheck = document.getElementById("checkElement");
  selectElementMySelect[0].addEventListener("change", function(event) {
    let select = event.target;
    if (select.value === "ElementDivan") {
      priceAll = priceProm;
      price = pric1Divan;
      radioElementCustom.classList.add("d-none");
      checkElementMyCheck.classList.add("d-none");
    }
    if(select.value === "ElementStul") {
      checkElementMyCheck.classList.add("d-none");
      document.getElementById("radio1").checked = true;
      priceAll = priceProm;
      price = pric2Stul;
      radioElementCustom.classList.remove("d-none");
    }
    if(select.value === "ElementShkaf"){
      radioElementCustom.classList.add("d-none");
      priceAll = priceProm;
      price = pric3Shkaf;
      document.getElementById("check").checked = false;
      checkElementMyCheck.classList.remove("d-none");
    }
  });
  const priceCheck = 500;
  const priceCheckUnchecked = 0;
  let checkedEnd = document.getElementById("check");
checkedEnd.addEventListener("change", function () {
  if (checkedEnd.checked) {priceAll = priceCheck;} 
  else {priceAll = priceCheckUnchecked;}
});
  const rad1Price = 500;
  const rad2Price = 1000;
  const rad3Price = 3000;
  let radiosEnd = document.querySelectorAll(".pis input[type=radio]");
  radiosEnd.forEach(function (currentRadio) {
    currentRadio.addEventListener("change", function (event) {      
        let radiosEnd = event.target;
        if (radiosEnd.value === "valueRadio1") {      
          priceAll = rad1Price;
          console.log(radiosEnd.value);
        }
        if (radiosEnd.value === "valueRadio2") {
          priceAll = rad2Price;
          console.log(radiosEnd.value);
        }
        if (radiosEnd.value === "valueRadio3") {
          priceAll = rad3Price;
          console.log(radiosEnd.value);
        }
    });
});
let calc = document.getElementById("calculateResult");
let k = document.getElementsByName("count");
let resultEnd = document.getElementById("result");
calc.addEventListener("change", function () {
  let countEnd = k[0].value;
  let prov = countEnd.match(/^\d+$/);
  if (prov !== null) {resultEnd.innerHTML=(priceAll + price) * parseInt(k[0].value);}
  else {resultEnd.innerHTML = "Количество введено неверно или отсутствует";}

});
});
