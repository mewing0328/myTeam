const Intern = require('../lib/Intern');

test("Can utilize the constructor to create this school for this instance", () => {
    const addlInfo = 'Iowa State';
    const intern = new Intern("MaSandra", 123, "masandra@123.com", addlInfo, "Intern");
    expect(intern.addlInfo).toBe(addlInfo);
  });

  test('the getSchool() function is working', async () => {
    const addlInfo = 'Iowa State';
    const intern = new Intern("MaSandra", 123, "masandra@123.com", addlInfo, "Intern");
    expect(intern.getSchool()).toBe(addlInfo);
  });
  
  test('the engineer has "Engineer" in it', () => {
    const intern = new Intern("MaSandra", 123, "masandra@123.com", 'Iowa State', "Intern");
    expect(intern.role).toBe('Intern');
  });
  
  test('the getRole() function is working', async () => {
    const role = 'Intern';
    const intern = new Intern("MaSandra", 123, "masandra@123.com", 'Iowa State', "Intern");
    expect(intern.getRole()).toBe(role);
  });