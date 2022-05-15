const Employee = require('../lib/Employee');

// Creates Employee object
test('Can create new Employee object', () => {
    // Arrange Act Assert
    const employee = new Employee('Leah', 500, 'lnbredemeyer@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

// Get name from getName()
test('Gets Employee name', () => {
    const employee = new Employee('Leah', 500, 'lnbredemeyer@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
})

// Gets ID from getID()
test('Gets Employee ID', () => {
    const employee = new Employee('Leah', 500, 'lnbredemeyer@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
})

// Gets email from getEmail()
test('Gets Employee email', () => {
    const employee = new Employee('Leah', 500, 'lnbredemeyer@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})

// Gets roll from getRole()
test('Gets role of Employee', () => {
    const employee = new Employee('Leah', 500, 'lnbredemeyer@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 