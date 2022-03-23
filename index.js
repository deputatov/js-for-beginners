'use strict';

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function cb(err, result) {
        if (err) reject(err);
        else resolve(result);
      }
      args.push(this, ...args);
      fn.call(this, ...args);
    });
  };
}

async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then((res) => console.log(res));
}
