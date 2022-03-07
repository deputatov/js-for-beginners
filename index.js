const bind =
  (func, context, ...argsBound) =>
  (...args) =>
    func.apply(context, [...argsBound, ...args]);

function cachingDecorator(func) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(null, args);
    cache.set(key, result);
    return result;
  };
}

function timer() {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  setInterval(() => {
    seconds = (seconds + 1) % 60;
    console.log(`${hours}:${minutes}:${seconds}`);
  }, 1000);

  setInterval(() => {
    minutes = (minutes + 1) % 60;
  }, 60000);

  setInterval(() => {
    hours = (hours + 1) % 24;
  });
}

setInterval(() => {
  const date = new Date();
  console.log(date.toLocaleTimeString('ru-RU'));
}, 1000);
