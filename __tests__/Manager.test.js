// Using Manager constructor 
const Manager = require('../lib/Manager');

// Creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Leah', 500, 'lnbredemeyer@gmail.com', 13);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Leah', 500, 'lnbredemeyer@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 