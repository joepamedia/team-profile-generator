const Employee = require("./Employee");

class Intern extends Employee {
  constructor(school) {
    this.school = school;
  }
}

module.exports = Intern;
