const Employee = require("../lib/Employee");

describe(`employee`, () => {
  it(`should create a new employee object when initialized`, () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });
});

it(`should set name via the constructor`, () => {
  const employee = new Employee("Joe", 1, "joe@gmail.com");
  expect(employee.name).toBe("Joe");
});

it(`should return the name when getName method is called`, () => {
  const employee = new Employee("Joe", 1, "joe@gmail.com");
  expect(employee.getName()).toBe("Joe");
});

it(`should return the Id when getId method is called`, () => {
  const employee = new Employee("Joe", 1, "joe@gmail.com");
  expect(employee.getId()).toBe(1);
});

it(`should return the employee's email when getEmail method is called`, () => {
  const employee = new Employee("Joe", 1, "joe@gmail.com");
  expect(employee.getEmail()).toBe("joe@gmail.com");
});

it(`should return the employee's role when getRole method is called`, () => {
  const employee = new Employee("Employee");
  expect(employee.getRole()).toBe("Employee");
});
