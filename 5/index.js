
function calculator() {
    let price = document.getElementsByName("price");
    let count = document.getElementsByName("count");
    let price2 = price[0].value;
    let count2 = count[0].value;
    let result = document.getElementById("result");
    let answer1 = count2.match(/^\d+$/);
    let answer2 = price2.match(/^\d+$/);
    if (answer1 !== null && answer2 !== null){
        result.innerHTML = parseInt(price[0].value) * parseInt(count[0].value);
    }

    else if (answer1 === null && answer2 === null) {
        result.innerHTML = "Данных нет или введены некорректно!";
    }

    else if (answer1 === null && answer2 !== null) {
        result.innerHTML = "Количество не введено или введено некорректно!";
    }

    else if (answer2 === null && answer1 !== null ){
        result.innerHTML = "Цена не введена или введена некорректно!";
    }
    return false;
  }

 function сlick() {
    alert("Результат");
  }

  window.addEventListener("DOMContentLoaded", function (event) {
    let b = document.getElementById("result");
    b.addEventListener("click", сlick);
  });
