const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(github) {
    this.github = github;
  }
}

module.exports = Engineer;
