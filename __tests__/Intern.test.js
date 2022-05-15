// Using Intern constructor 
const Intern = require('../lib/Intern');

// Get 
test("Can set school via constructor", () => {
    const intern = new Intern('Leah', 500, 'lnbredemeyer@gmail.com', 'ASU');

    expect(intern.school).toEqual(expect.any(String));
  });
  
  //
  test("getRole() should return \"Intern\"", () => {
    const intern = new Intern('Leah', 500, 'lnbredemeyer@gmail.com', "ASU");

    expect(intern.getRole()).toEqual("Intern");
  });
  
  //
  test("Can get school via getSchool()", () => {
    const intern = new Intern('Leah', 500, 'lnbredemeyer@gmail.com');

    expect(intern.getSchool()).toEqual(expect.any(String));
  });