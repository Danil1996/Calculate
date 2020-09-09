"use strict";

window.addEventListener("load", function OnWindowLoaded() {
  let signs = [
    "AC",
    "ˆ",
    "(",
    ")",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  let calc = document.getElementById("calc");

  let textArea = document.getElementById("inputVal");

  signs.forEach(function (sign) {
    let signElement = document.createElement("div");
    signElement.className = "btn";
    signElement.innerHTML = sign;
    calc.appendChild(signElement);
  });

  document.querySelectorAll("#calculator .btn").forEach(function (button) {
    button.addEventListener("click", onButtonClick);
  });
  function onButtonClick(e) {
    if (e.target.innerHTML === "AC") {
      textArea.innerHTML = "0";
    } else if (e.target.innerHTML === "=") {
      let result = doubleOperands(
        searchNumberFloats(
          validationOfString(validationBrackets(textArea.value))
        )
      );
      alert(fuckingCalculator(result));
      let history = document.getElementById("History");
      let newHistory = document.createElement("p");
      newHistory.innerHTML = `${textArea.value} = ${result}`;
      history.appendChild(newHistory);
    } else if (textArea.innerHTML === "0") {
      textArea.innerHTML = e.target.innerHTML;
    } else {
      textArea.innerHTML += e.target.innerHTML;
    }
  }
  document.querySelector("body").addEventListener("keydown", onEnterpress);
  function onEnterpress(enter) {
    if (enter.keyCode === 13) {
      let result = doubleOperands(
        searchNumberFloats(
          validationOfString(validationBrackets(textArea.value))
        )
      );
      alert(fuckingCalculator(result));
      let history = document.getElementById("History");
      let newHistory = document.createElement("p");
      newHistory.innerHTML = `${textArea.value} = ${result}`;
      history.appendChild(newHistory);
    }
  }
  document
    .querySelector("textarea")
    .addEventListener("keyup", handlingInvalidTokens);

  function handlingInvalidTokens(event) {
    const arrayOfValidTokens = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "+",
      "-",
      "*",
      "/",
      "ˆ",
    ];
    const a = event.key;
    if (arrayOfValidTokens.indexOf(a) === -1) {
      textArea.value = textArea.value.replace(a, "");
    }
  }
});

// this.value = this.value.replace(/[a-zA-Zа-яА-Я\!\@\#\$\%\&\_\{\}\[\]\;\:\<\>\,\№\\''\\\s\\]/g, '')
