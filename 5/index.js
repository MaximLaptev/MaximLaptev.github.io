
function calculator() {
    let price = document.getElementsByName("price");
    let count = document.getElementsByName("count");
    let price2 = price[0].value;
    let count2 = count[0].value;
    let result = document.getElementById("result");
    let f1 = count2.match(/^\d+$/);
    let f2 = price2.match(/^\d+$/);
    if (f1 !== null && f2 !== null)
    {
        result.innerHTML = parseInt(price[0].value) * parseInt(count[0].value);
    }

    else if (f1 === null && f2 === null) 
    {
        result.innerHTML = "Данных нет или введены некорректно!";
    }

    else if (f1 === null && f2 !== null) 
    {
        result.innerHTML = "Количество не введено или введено некорректно!";
    }

    else if (f2 === null && f1 !== null )
    {
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
