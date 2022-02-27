const Intern = require("../lib/Intern");

describe(`intern`, () => {
  it(`should create a new intern object when initialized`, () => {
    const intern = new Intern();
    expect(typeof intern).toBe("object");
  });
  it(`should set name via the constructor`, () => {
    const employee = new Intern("Hayley", 3, "hayley@gmail.com", "Illinois State University");
    expect(employee.name).toBe("Hayley");
  });
  it(`should return the name when getName method is called`, () => {
    const employee = new Intern("Hayley", 3, "hayley@gmail.com", "Illinois State University");
    expect(employee.getName()).toBe("Hayley");
  });
  it(`should return the id when getId method is called`, () => {
    const employee = new Intern("Hayley", 3, "hayley@gmail.com", "Illinois State University");
    expect(employee.getId()).toBe(3);
  });
  it(`should return the employee's email when getEmail method is called`, () => {
    const employee = new Intern("Hayley", 3, "hayley@gmail.com", "Illinois State University");
    expect(employee.getEmail()).toBe("hayley@gmail.com");
  });
  it(`should return the employee's school when getSchool method is called`, () => {
    const employee = new Intern("Hayley", 3, "hayley@gmail.com", "Illinois State University");
    expect(employee.getSchool()).toBe("Illinois State University");
  });
  it(`should return the employee's role when getRole method is called`, () => {
    const employee = new Intern("Intern");
    expect(employee.getRole()).toBe("Intern");
  });
});
