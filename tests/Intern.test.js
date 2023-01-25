const Intern = require('../lib/Intern');

test("Can utilize the constructor to create this school for this instance", () => {
    const addlInfo = 'Iowa State';
    const intern = new Intern("MaSandra", 123, "masandra@123.com", addlInfo, "Intern");
    expect(intern.addlInfo).toBe(addlInfo);
  });