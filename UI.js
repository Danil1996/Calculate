// подключение функций к HTML
butt.onclick = function () {
    const message = document.getElementById("expression").value;
    let verificationString = doubleOperands(
      searchNumberFloats(validationOfString(validationBrackets(message)))
    );
    let result = fuckingCalculator(verificationString);
  
    alert(result);
  
    let history = document.getElementById("History");
    let newHistory = document.createElement("p");
    newHistory.innerHTML = `${message} = ${result}`;
    history.appendChild(newHistory);
  };
  