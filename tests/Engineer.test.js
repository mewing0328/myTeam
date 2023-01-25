const Engineer = require('../lib/Engineer');

test("Can utilize the constructor to create this GitHub account for this instance", () => {
    const addlInfo = 'mewing0328';
    const engineer = new Engineer("MaSandra", 123, "masandra@123.com", addlInfo, "Engineer");
    expect(engineer.addlInfo).toBe(addlInfo);
  });