const OPERATIONS = {
  '+': (x ,y) => x + y,
  '-': (x ,y) => x - y,
  '*': (x ,y) => x * y,
  '/': (x ,y) => x / y,
  '%': (x, y) => x % y,
};

class SuperMath {
  constructor () {
  this.input();
  }

  input() {
    do {
      this.x = parseInt(prompt(`Enter the number for "x"?`).trim());
    } while (isNaN(this.x));

    do {
      this.y = parseInt(prompt(`Enter the number for "y"?`).trim());
    } while (isNaN(this.y));

    do {
      this.znak = prompt(`Enter the number for znak: ${this.getOperations()} ?`);
    } while (!OPERATIONS[this.znak]);

    return this;
  }

  check() {
    const confirmUser = confirm(`Do you want to perform the operation '${this.znak}' with the numbers ${this.x} and ${this.y}?`);
    return confirmUser ? OPERATIONS[this.znak](this.x, this.y) : this.input().check();
  }

  getOperations() {
    return Object.keys(OPERATIONS).join(', ');
  }
}

const math = new SuperMath();

console.log(math.check());