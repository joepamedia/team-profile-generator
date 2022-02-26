const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    // ask
    super(name, id, email);
    this.officeNum = officeNum;
  }
  getOfficeNum() {
    return this.officeNum;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
