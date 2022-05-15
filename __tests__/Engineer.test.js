// Using Engineer constructor 
const Engineer = require('../lib/Engineer');

// Getting GitHub Username
test("Can set GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const engineer = new Engineer('Leah', 500, 'lnbredemeyer@gmail.com', testValue);

    expect(engineer.github).toEqual(testValue);
  });
  
  // Get roll from getRole()
  test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const engineer = new Engineer('Leah', 500, 'lnbredemeyer@gmail.com', "GitHubUser");

    expect(engineer.getRole()).toEqual(testValue);
  });
  
  // Get GitHub from getGethub()
  test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const engineer = new Engineer('Leah', 500, 'lnbredemeyer@gmail.com', testValue);

    expect(engineer.getGithub()).toEqual(testValue);
  });