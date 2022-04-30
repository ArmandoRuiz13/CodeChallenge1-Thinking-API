const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/Reader");


class StudentController{
    static GetAllStudents(){
        const students = Reader.readJsonFile("visualpartners.json");
        return students
    }

}

module.exports = StudentController;