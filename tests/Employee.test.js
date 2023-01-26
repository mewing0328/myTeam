const Employee = require('../lib/Employee');

// name test
test("Can utilize the constructor to create this name for this instance", () => {
    const name = 'MaSandra';
    const employee = new Employee("MaSandra", 123, "masandra@123.com");
    expect(employee.name).toBe(name);
  });

test('the getName() function is working', async () => {
  const name = 'MaSandra';
  const employee = new Employee("MaSandra", 123, "masandra@123.com");
  expect(employee.getName()).toBe(name);
});


// ID test
test("Can utilize the constructor to create this id for this instance", () => {
  const id = 123;
  const employee = new Employee("MaSandra", 123, "masandra@123.com");
  expect(employee.id).toBe(id);
});

test('the getId() function is working', async () => {
const id = 123;
const employee = new Employee("MaSandra", 123, "masandra@123.com");
expect(employee.getId()).toBe(id);
});


// email test
test("Can utilize the constructor to create this email for this instance", () => {
  const email = "masandra@123.com";
  const employee = new Employee("MaSandra", 123, "masandra@123.com");
  expect(employee.email).toBe(email);
});

test('the getEmail() function is working', async () => {
const email = 'masandra@123.com';
const employee = new Employee("MaSandra", 123, "masandra@123.com");
expect(employee.getEmail()).toBe(email);
});