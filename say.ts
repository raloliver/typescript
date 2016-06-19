class Student {
    fullName: string;
    constructor(public firstName, public lastName) {
        this.fullName = firstName + '' + lastName;
    }
}

interface IPerson {
    firstName: string;
    lastName: string;
}

function say(person: IPerson) {
    return "Hello" + person;
}

var user = new Student("Laura", "Fernanda");

console.log(say(user));