var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ClassExample;
(function (ClassExample) {
    var Person = /** @class */ (function () {
        function Person(_name, _age) {
            this.name = _name;
            this.age = _age;
        }
        Person.prototype.getInfo = function () {
            return this.name;
        };
        return Person;
    }());
    var Docent = /** @class */ (function (_super) {
        __extends(Docent, _super);
        function Docent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.skills = [];
            return _this;
        }
        Docent.prototype.getInfo = function () {
            return "Prof. " + _super.prototype.getInfo.call(this) + ", age: " + this.age;
        };
        Docent.prototype.addSkill = function (_skill) {
            this.skills.push(_skill);
        };
        return Docent;
    }(Person));
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(_name, _age) {
            var _this = _super.call(this, _name, _age) || this;
            _this.matriculation = Student.nextNumber;
            Student.nextNumber++;
            return _this;
        }
        Student.prototype.getInfo = function () {
            return this.matriculation + ": " + _super.prototype.getInfo.call(this);
        };
        Student.nextNumber = 0;
        return Student;
    }(Person));
    var courses = [];
    var course = { name: "Physics", students: [] };
    course.docent = new Docent("Einstein", 71);
    course.docent.addSkill("Relativity");
    var student = new Student("Heisenberg", 49);
    course.students.push(new Student("Hawking", 8), student);
    courses.push(course);
    courses.push({
        name: "Art",
        students: [student, new Student("Dali", 46)]
    });
    for (var _i = 0, courses_1 = courses; _i < courses_1.length; _i++) {
        var course_1 = courses_1[_i];
        console.log("Course: " + course_1.name);
        if (course_1.docent)
            console.log("• Docent: " + course_1.docent.getInfo());
        else
            console.warn("• No docent assigned to this course");
        for (var _a = 0, _b = course_1.students; _a < _b.length; _a++) {
            var student_1 = _b[_a];
            console.log("• Student " + student_1.getInfo());
        }
    }
})(ClassExample || (ClassExample = {}));
//# sourceMappingURL=ClassExample.js.map