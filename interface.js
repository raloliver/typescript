var Student = (function () {
    function Student(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Student.prototype.register = function () {
        console.log('Estudante matrículado.');
    };
    return Student;
}());
function run(student) {
    student.register();
}
var student = new Student('Laura', 'laura@fernanda.lau', 1);
run(student);
