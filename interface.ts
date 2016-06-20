/// <reference path="ISubscriber.ts" />
/// <reference path="IStudent.ts" />
/// <reference path="Student.ts" />


module subscription {  

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
}