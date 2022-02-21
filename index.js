'use strict'

function min_0 (n1, n2, n3, n4) {
  return [n1, n2, n3, n4].sort((a,b) => a-b)[0];
}

function min_1 () {
  return [...arguments].sort((a, b) => a-b)[0];
}

function min_2 (...args) {
  return args.sort((a, b) => a-b)[0];
}

const min_3 = (n1, n2, n3, n4) => {
  let min = n1;

  if (n2 < min) {
    min = n2
  }

  if (n3 < min) {
    min = n3
  }

  if (n4 < min) {
    min = n4
  }

  return min;
}


function getNumber () {
  let num;

  do {
    num = +prompt("Введите валидное число", '')
  } while (Number.isNaN(num))
}

const validator = num => num > 18

function getNumberWithValidator (validator) {
  let num;

  do {
    num = +prompt("Введите валидное число", '')
  } while (validator(num))
}