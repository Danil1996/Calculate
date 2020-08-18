"use strict";
// let expression = doubleOperands(
//   searchNumberFloats(
//     validationOfString(validationBrackets(" 400 ++ 2.55 + ( - 3 + 2 ) "))
//   )
// );
// Проверка на повтор операндов
function doubleOperands(array) {
  let arrayOperands = ["ˆ", "*", "/", "+"];

  array.forEach((item, index, array) => {
    for (let i = 0; i < array.length; i++) {
      if (item === arrayOperands[i]) {
        for (let j = 0; j < arrayOperands.length; j++) {
          if (array[index + 1] === arrayOperands[j]) {
            alert(`Чувачёк, ошибочка с операндами, иди исправляй, я жду`);
          } else {
            continue;
          }
        }
      }
    }
  });
  return array;
}
//проверка на равное количество скобок
function validationBrackets(string) {
  let bA = ["(", ")"];
  let pos = [0, 0];
  let iteration = [0, 0];

  for (let i = 0; i < bA.length; ) {
    let foundPos = string.indexOf(bA[i], pos[i]);
    if (foundPos == -1) {
      i++;
    } else {
      pos[i] = foundPos + 1;
      iteration[i]++;
    }
  }
  if (iteration[0] === iteration[1]) {
    return string;
  } else {
    alert(
      `Чувак в этом выражение ошибка, беда с скобками. Иди проверяй и возврашайся`
    );
  }
}
//проверка на наличие неподдерживаюшихся знаков и букв
function validationOfString(string) {
  let regexp = /[a-zA-Z\!\@\#\$\%\&\_\{\}\[\]\;\:\<\>\,]/g;
  let a = string.match(regexp);
  if (a === null) {
    return string;
  } else {
    alert(
      `Чувак в этом выражение ошибка, пшел и нашел нормально выражение без вот этого =>(${a})`
    );
  }
}
//разбор строки на массив и уборка пробелов
function stringSplit(string) {
  const arrayOfString = string.split("");
  arrayOfString.forEach((item, index, arrayOfString) => {
    if (item === " ") {
      arrayOfString.splice(index, 1);
      return arrayOfString;
    }
  });
  return arrayOfString;
}
//соединение плаваюшей точки и целых чисел
function parseNumberFloat(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  return result;
}
//поиск целых чисел и плаваюшей точки
function searchNumberFloats(string) {
  let array = stringSplit(string);
  array.forEach((item, index, array) => {
    if (item >= 0) {
      for (let i = 1; i < array.length; i++) {
        if (parseInt(array[index + i], 10) >= 0) {
          continue;
        } else if (parseInt(array[index + 1], 10) !== 0) {
          return array;
        } else {
          let delateCount = index + i;
          let a = array.splice(index, delateCount);
          let result = parseNumberFloat(a);
          array.splice(index, 0, result);
          return array;
        }
      }
    } else if (item === ".") {
      for (let i = 1; i < array.length; i++) {
        if (parseInt(array[index + i], 10) >= 0) {
          continue;
        } else {
          let b = index + i;
          let c = index - 1;
          let delateCount = b - c;
          let a = array.splice(index - 1, delateCount);
          let result = parseNumberFloat(a);
          array.splice(index - 1, 0, result);
          return array;
        }
      }
    }
  });
  return array;
}
//калькулятор
function simpleCalculate(array) {
  const a = parseFloat(array[0], 10);
  const b = parseFloat(array[2], 10);
  const c = array[1];

  if (c === "*") {
    return a * b;
  } else if (c === "/") {
    return a / b;
  } else if (c === "+") {
    return a + b;
  } else if (c === "-") {
    return a - b;
  } else if (c === "ˆ") {
    return a ** b;
  } else {
    return "Какая то херь!";
  }
}
//поиск и обработка унарного минуса
function findingAndHandlingUnaryMinus(arrayOperands, array) {
  array.forEach((item, index, array) => {
    for (let i = 0; i < array.length; i++) {
      if (item === arrayOperands[i]) {
        if (array[index + 1] === "-") {
          let result = array[index + 2] * -1;
          array.splice(index + 1, 2, result);
          return array;
        } else {
          return array;
        }
      } else if (item === "-") {
        if (array[0] === "-") {
          let result = array[1] * -1;
          array.splice(0, 2, result);
          return array;
        } else if (array[index + 1] === "-") {
          let result = array[index + 2] * -1;
          array.splice(index + 1, 2, result);
          return array;
        }
      }
    }
  });
  return array;
}
//проверка на наличие скобок
function checkingForThePresenceOfBrackets(array) {
  let closeBracket = array.indexOf(")");
  let openBrackets = array.lastIndexOf("(");
  if (closeBracket === -1 && openBrackets === -1) {
    return false;
  } else {
    return true;
  }
}
//поиск закрываюшейся скобки
function indexSearchOfCloseBrackets(array) {
  let closeBracket = array.indexOf(")");
  if (closeBracket === -1) {
    return false;
  } else {
    return closeBracket;
  }
}
//поиск открываюшейся скобки
function indexSearchOfOpenBrackets(array) {
  let closeBracket = array.indexOf(")");
  let openBrackets = array.lastIndexOf("(", closeBracket);
  if (openBrackets === -1) {
    return false;
  } else {
    return openBrackets;
  }
}
//обработка скобок
function spliceForBracketsCountSplice(
  indexOfOpenBrackets,
  array,
  indexOfCloseBrackets
) {
  array.splice(indexOfOpenBrackets, 1);
  array.splice(indexOfCloseBrackets - 1, 1);
  let delateCount = indexOfCloseBrackets - indexOfOpenBrackets - 1;
  let playground = array.splice(indexOfOpenBrackets, delateCount);
  let answer = fuckingCalculator(playground);

  array.splice(indexOfOpenBrackets, 0, answer);
  return array;
}
//поиск операндов
function searchIndexOfOperand(operandsArray, array) {
  for (let index = 0; index < operandsArray.length; index++) {
    let i = array.indexOf(operandsArray[index]);
    if (i >= 0) {
      return i;
    } else {
      continue;
    }
  }
}
//проверка на наличие операндов в массиве
function checkingIfThereIsOperand(operandsArray, array) {
  for (let index = 0; index < operandsArray.length; index++) {
    let i = array.includes(operandsArray[index]);
    if (i === true) {
      return i;
    } else {
      continue;
    }
  }
}
//вырезание необходимых чисел и операнда
function spliceCountSplice(index, array) {
  let playground = array.splice(index - 1, 3);
  let answer = simpleCalculate(playground);
  array.splice(index - 1, 0, answer);
  return array;
}
//верификация
function verificationAndCalculation(operands, array) {
  for (let i = 0; i < array.length; i++) {
    let verifiedArray = checkingIfThereIsOperand(operands[i], array);
    if (verifiedArray === true) {
      while (verifiedArray === true) {
        let index = searchIndexOfOperand(operands[i], array);
        if (typeof index == "number") {
          spliceCountSplice(index, array);
        } else {
          verifiedArray = false;
        }
      }
    } else {
      continue;
    }
  }
}
//главный блок
function fuckingCalculator(arrayOfExpression) {
  let arrayOperands = ["(", "ˆ", "*", "/", "+"];
  findingAndHandlingUnaryMinus(arrayOperands, arrayOfExpression);

  let bracketsArray = checkingForThePresenceOfBrackets(arrayOfExpression);

  if (bracketsArray === true) {
    while (bracketsArray === true) {
      let indexOfOpenBrackets = indexSearchOfOpenBrackets(arrayOfExpression);
      let indexOfCloseBrackets = indexSearchOfCloseBrackets(arrayOfExpression);
      if (
        typeof indexOfOpenBrackets == "number" &&
        typeof indexOfCloseBrackets == "number"
      ) {
        spliceForBracketsCountSplice(
          indexOfOpenBrackets,
          arrayOfExpression,
          indexOfCloseBrackets
        );
      } else {
        bracketsArray = false;
      }
    }
  }
  let operands = [["ˆ"], ["*", "/"], ["+", "-"]];
  verificationAndCalculation(operands, arrayOfExpression);

  if (arrayOfExpression.length === 2) {
    if (arrayOfExpression[0] < 0) {
      arrayOfExpression.splice(1, 0, "+");
      spliceCountSplice(1, arrayOfExpression);
      return arrayOfExpression;
    } else if (arrayOfExpression[0] > 0) {
      arrayOfExpression.splice(1, 0, "-");
      spliceCountSplice(1, arrayOfExpression);
      return arrayOfExpression;
    } else {
      return arrayOfExpression;
    }
  }
  return arrayOfExpression;
}
