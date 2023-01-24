const Manager = require('../lib/Manager');

test("Can utilize the constructor to create this office number for this instance", () => {
    const addlInfo = 123;
    const manager = new Manager("MaSandra", 123, "masandra@123.com", addlInfo, "Manager");
    expect(manager.addlInfo).toBe(addlInfo);
  });