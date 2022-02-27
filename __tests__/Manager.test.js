const Manager = require("../lib/Manager");

describe(`manager`, () => {
  it(`should create a new manager object when initialized`, () => {
    const manager = new Manager();
    expect(typeof manager).toBe("object");
  });
});

it(`should set name via the constructor`, () => {
  const employee = new Manager("Joe", 1, "joe@gmail.com", 104);
  expect(employee.name).toBe("Joe");
});

it(`should return the name when getName method is called`, () => {
  const employee = new Manager("Joe", 1, "joe@gmail.com", 104);
  expect(employee.getName()).toBe("Joe");
});

it(`should return the Id when getId method is called`, () => {
  const employee = new Manager("Joe", 1, "joe@gmail.com", 104);
  expect(employee.getId()).toBe(1);
});

it(`should return the employee's email when getEmail method is called`, () => {
  const employee = new Manager("Joe", 1, "joe@gmail.com", 104);
  expect(employee.getEmail()).toBe("joe@gmail.com");
});

it(`should return the employee's email when getEmail method is called`, () => {
  const employee = new Manager("Joe", 1, "joe@gmail.com", 104);
  expect(employee.getOfficeNum()).toBe(104);
});

it(`should return the employee's role when getRole method is called`, () => {
  const employee = new Manager("Manager");
  expect(employee.getRole()).toBe("Manager");
});
