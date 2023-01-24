const Employee = require('../lib/Employee');

test("Can utilize the constructor to create this name for this instance", () => {
    const name = "MaSandra";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });