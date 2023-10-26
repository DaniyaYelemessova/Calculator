function add(number1, number2){
  return  number1 + number2
  }

function sub(number1, number2){
  return number1 - number2
  }

  function multiply(number1, number2){
    return number1 * number2
    }

const number1 = parseInt(prompt("Enter a number"));
const number2 = parseInt(prompt("Enter another number"));


window.alert(number1 + " - " + number2 + " = " + sub(number1, number2) + ".\n" +
number1 + "+" + number2 + "=" + add(number1,number2));