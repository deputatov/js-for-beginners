let i = 0;
while (i < 11) {
  i += 0.2;
}
console.log("Закончили");

function random(min, max) {
  return min + Math.random() * (max - min);
}

function randomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const str = "Yo all! I wont to say you Yo cause I always say Yo";
const positions = [];
let pos = str.indexOf("Yo"); //start position
positions.push(pos);

while (true) {
  pos = str.indexOf("Yo", pos + 1);

  if (pos === -1) {
    break;
  }

  positions.push(pos);
}

function exercise_5() {
  const digits = [...Array(10).keys()];
  const empty = [];
  
  for (let index = 0; index <= digits.length; index += 1) {
    const number = digits[index]
    
    if (number % 2 !== 0) continue;
  
    empty.push(digits[index]) 
  }  
}

function exercise_6() {
  const digits = [...Array(10).keys()];
  const empty = [];
  const deleteCount = 1

  for (let index = 0; index <= digits.length; index += 1) {
    const number = digits[index]

    if (number % 2 !== 0) continue;

    empty.push(digits[index])
    digits.splice(index, deleteCount)
  }
}

function exercise_7(array) {
  return array.filter((number) => number % 2 === 0)
}