interface IStudent {
    name: string;
    email: string;
    age?: number;
    register(): void;
}

class Student implements IStudent {
    constructor(public name: string, public email: string, public age?: number) { }

    register(): void {
        console.log('Estudante matrículado.')
    }
}

function run(student: IStudent) {
    student.register();
}

var student = new Student(
    'Laura',
    'laura@fernanda.lau',
    1
);

run(student);