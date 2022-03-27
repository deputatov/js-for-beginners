'use strict'

const fio = 'Леонтьев Сергей Дмитриевич';

function getInitials(fio) {
  return fio
    .split(' ')
    .map((value) => value[0])
    .join('');
}

function map(collection, callback) {
  const result = [];
  for (const item of collection) {
    const newItem = callback(item);
    result.push(newItem);
  }
  return result;
}

const collection = [
  'кришна',
  'кришна',
  'харе',
  'харе',
  'харе',
  'харе',
  'кришна',
  'кришна',
  '0_o',
];

function unique(collection) {
  const set = new Set(collection);
  return Array.from(set);
}

function reduce(collection, callback, init) {
  let acc = init;
  for (const item of collection) {
    acc = callback(acc, item);
  }
  return acc;
}

function filter(collection, callback) {
  const result = [];
  for (const item of collection) {
    if (callback(item)) {
      result.push(item);
    }
  }
  return result;
}

const fields = {
  name: {
    type: 'string',
    value: 'Вася',
  },
  age: {
    type: 'number',
    value: 20,
  },
  bdate: {
    type: 'string',
    value: '11.09.2010',
  },
  math: {
    type: 'number',
    value: 5,
  },
  rusLang: {
    type: 'number',
    value: 4,
  },
  geometry: {
    type: 'number',
    value: 5,
  },
};

function getNumbersSum(collection) {
  return Object.values(collection)
    .filter(({ type }) => type === 'number')
    .reduce((acc, { value }) => acc + value, 0);
}

const arr = [1, 2, 3];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(arr)