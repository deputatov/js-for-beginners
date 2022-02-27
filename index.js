const calculator = {
  init(lval, rval) {
    this.lval = lval;
    this.rval = rval;
  },

  add() {
    return this.lval + this.rval;
  },

  diff() {
    return this.lval - this.rval;
  },
};

const obj = {}

function A() {
  return obj
}

function B() {
  return obj
}

class Calc {
  constructor(lval) {
    this.lval = lval
  }

  add(rval) {
    this.lval += rval
    return this.lval
  }

  min(rval) {
    this.lval -= rval
    return this.lval
  }

  div(rval) {
    this.lval /= rval
    return this.lval
  }

  mult(rval) {
    this.lval *= rval
    return this.lval
  }
}
