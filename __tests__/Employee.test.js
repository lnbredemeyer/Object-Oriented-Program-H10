const Employee = require('../lib/Employee');

test('Can create new Employee object', () => {
    // Arrange Act Assert
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
})

test('Can set name to employee object', () => {
    const employeeName = "Leah";
    const employee = new Employee('Leah');
    expect(employee.name).toBe(employeeName);
})

test('Can set id to eployee object', () => {
    const employeeId = "100";
    const employee = new Employee('Leah', 100);
    expect(employee.id).toBe(employeeId)
})

test('Can get name with getName on employee object', () => {
    const employeeName = "Leah";
    const employee = new Employee('Leah');
    expect(employee.getName).toBe(employeeName);
})