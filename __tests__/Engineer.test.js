const Engineer = require("../lib/Engineer");

describe(`engineer`, () => {
  it(`should create a new engineer object when initialized`, () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe("object");
  });
  it(`should set name via the constructor`, () => {
    const employee = new Engineer("Joe", 1, "joe@gmail.com", "joepamedia");
    expect(employee.name).toBe("Joe");
  });
  it(`should return the name when getName method is called`, () => {
    const employee = new Engineer("Joe", 1, "joe@gmail.com", "joepamedia");
    expect(employee.getName()).toBe("Joe");
  });
  it(`should return the id when getId method is called`, () => {
    const employee = new Engineer("Joe", 1, "joe@gmail.com", "joepamedia");
    expect(employee.getId()).toBe(1);
  });
  it(`should return the employee's email when getEmail method is called`, () => {
    const employee = new Engineer("Joe", 1, "joe@gmail.com", "joepamedia");
    expect(employee.getEmail()).toBe("joe@gmail.com");
  });
  it(`should return the employee's Github when getGithub method is called`, () => {
    const employee = new Engineer("Joe", 1, "joe@gmail.com", "joepamedia");
    expect(employee.getGithub()).toBe("joepamedia");
  });
  it(`should return the employee's role when getRole method is called`, () => {
    const employee = new Engineer("Engineer");
    expect(employee.getRole()).toBe("Engineer");
  });
});
