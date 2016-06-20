interface ISubscriber {
    isSubscriber: boolean
}

interface IStudent {
    name: string;
    email: string;
    age?: number;
    register(): void;
}

// implementação de múltiplas interfaces
class Student implements IStudent, ISubscriber {
    constructor(
        public name: string, 
        public email: string, 
        public isSubscriber,
        public age?: number
        
    ) { 

    }

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
    true,
    1
);

run(student);