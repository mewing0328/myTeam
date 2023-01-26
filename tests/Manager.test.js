const Manager = require('../lib/Manager');

test("Can utilize the constructor to create this office number for this instance", () => {
    const addlInfo = 123;
    const manager = new Manager("MaSandra", 123, "masandra@123.com", addlInfo, "Manager");
    expect(manager.addlInfo).toBe(addlInfo);
  });
 
test('the getOfficeNumber() function is working', async () => {
  const addlInfo = 123;
  const manager = new Manager("MaSandra", 123, "masandra@123.com", addlInfo, "Manager");
  expect(manager.getOfficeNumber()).toBe(addlInfo);
});

test('the manager has "Manager" in it', () => {
  const manager = new Manager("MaSandra", 123, "masandra@123.com", 6235, "Manager");
  expect(manager.role).toBe('Manager');
});

test('the getRole() function is working', async () => {
  const role = 'Manager';
  const manager = new Manager("MaSandra", 123, "masandra@123.com", 6235, "Manager");
  expect(manager.getRole()).toBe(role);
});