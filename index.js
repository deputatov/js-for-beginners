'use strict'

function exercise_1() {
  let i = 3;
  while (i) {
    console.log(i--);
  }
  /*
  Инструкция while вычисляет выражение в скобках и преобразует результат к логическому типу (https://tc39.es/ecma262/#sec-runtime-semantics-whileloopevaluation)
  пока выражение истинно выполняем тело цикла как только условие станет ложным цикл остановится
    
  В теле цикла к переменной i применяется постфиксный оператор "--" а точнее постфиксный декремент (https://tc39.es/ecma262/#sec-postfix-decrement-operator)
  постфиксный декремент уменьшает значение на единицу переменной i но возвращает старое значение (которое было до уменьшения)
  Вывод 3, 2, 1
*/
}

function exercise_2() {
  let i = 0;
  while (i < 3) {
    console.log(`number ${i}!`);
    i += 1;
  }
}

function exercise_3() {
  // solution 1
  const isPrime = (n) => {
    if (n < 2) {
      return false;
    }

    for (i = 2; i <= n / 2; i += 1) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  };

  const solution_1 = [...Array(100).keys()].filter(isPrime);

  // solution 2
  const solution_2 = [];

  outer: for (let i = 2; i < 100; i += 1) {
    for (let j = 2; j < i; j += 1) {
      if (i % j === 0) {
        continue outer
      }
    }
    solution_2.push(i)
  }
  // solution 2
}

// http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html?id=l10n/pluralforms#plural-forms
function exercise_4(n) {
  if (n % 10 === 1 && n % 100 !== 11) {
    console.log('апельсин')
  } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
    console.log('апельсина')
  } else {
    console.log('апельсинов')
  }
}