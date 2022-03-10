const animal = {
  jumps: null,
};

const rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // ? (1) true
/* Обращение к свойству rabbit.jumps находит данное свойство непосредственно в объекте и читает его, не используя прототип: */
delete rabbit.jumps;
console.log(rabbit.jumps); // ? (2) null
/* После удаление свойства из объекта rabbit свойство jumps автоматически берётся из прототипа */
delete animal.jumps;
console.log(rabbit.jumps); // ? (3) undefined
/* После удаление свойства из объекта animal данного свойства нет ни в объекте ни в прототипах */

// const hamster = {
//   stomach: [],
//   eat(food) {
//     this.stomach.push(food);
//   },
// };
// const speedy = {
//   __proto__: hamster,
//   stomach: [],
// };
// const lazy = {
//   __proto__: hamster,
//   stomach: [],
// };
// // Этот хомяк нашёл еду
// speedy.eat('apple');
// onsole.log(speedy.stomach); // ['apple']
// // У этого хомяка тоже есть еда
// console.log(lazy.stomach); // ['apple']

function Hamster() {
  this.stomach = [];
}

Hamster.prototype.eat = function (food) {
  this.stomach.push(food);
};

const speedy = new Hamster();
const lazy = new Hamster();

speedy.eat('apple');
speedy.eat('banana');
console.log(speedy.stomach);

lazy.eat('plum');
console.log(lazy.stomach);
