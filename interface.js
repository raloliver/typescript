var Student = (function () {
    function Student(name, email, isSubscriber, age) {
        this.name = name;
        this.email = email;
        this.isSubscriber = isSubscriber;
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
var student = new Student('Laura', 'laura@fernanda.lau', true, 1);
run(student);
