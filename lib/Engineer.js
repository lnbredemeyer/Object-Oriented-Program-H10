// Creating the Engineer

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email)
    }
    getGethub() {
        return this.getGethub;
    }
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;