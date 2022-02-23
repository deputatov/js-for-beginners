let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(JSON.stringify(user));

const source = {
  0: "Yo!",
  name: "Vasya",
  age: 2,
  money: 100,
};

function getMultiplyNumeric_1(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value === "number") {
      return {
        ...acc,
        [key]: value,
        [key + "Clone"]: value * 2,
      };
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
}

function getMultiplyNumeric_2(obj) {
  let result = {}
  for (let key in obj) {
    const value = obj[key]
    if (typeof value === 'number') {
      result = {
        ...result, 
        [key]: value, 
        [key + 'Clone']: value * 2
      }
    } else {
      result = { ...result, [key]: value }
    }
  }

  return result
}

function clone(obj) {
  let result = {}

  for (let key in obj) {
    const value = obj[key]
    result = { ...result, [key]: value }
  }

  return result
}

function clone_2(obj) {
  return { ...obj };
}
