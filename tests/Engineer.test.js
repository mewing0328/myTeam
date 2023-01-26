const Engineer = require('../lib/Engineer');

test("Can utilize the constructor to create this GitHub account for this instance", () => {
    const addlInfo = 'mewing0328';
    const engineer = new Engineer("MaSandra", 123, "masandra@123.com", addlInfo, "Engineer");
    expect(engineer.addlInfo).toBe(addlInfo);
  });

  test('the getGitHub() function is working', async () => {
    const addlInfo = 'mewing0328';
    const engineer = new Engineer("MaSandra", 123, "masandra@123.com", addlInfo, "Engineer");
    expect(engineer.getGitHub()).toBe(addlInfo);
  });
  
  test('the engineer has "Engineer" in it', () => {
    const engineer = new Engineer("MaSandra", 123, "masandra@123.com", 'mewing0328', "Engineer");
    expect(engineer.role).toBe('Engineer');
  });
  
  test('the getRole() function is working', async () => {
    const role = 'Engineer';
    const engineer = new Engineer("MaSandra", 123, "masandra@123.com", 'mewing0328', "Engineer");
    expect(engineer.getRole()).toBe(role);
  });