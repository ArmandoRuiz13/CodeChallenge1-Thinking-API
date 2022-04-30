const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/Reader");


class StudentController{
    static GetAllStudents(){
        const students = Reader.readJsonFile("visualpartners.json");
        return students
    }
    static GetEmailsStudents(certification){
        const students = Reader.readJsonFile("visualpartners.json");
        const StudentsEmails = StudentService.getEmailStudentsCertification(students,certification);
        return StudentsEmails
    }
    static GetStudentsUp500credits(){
        const students = Reader.readJsonFile("visualpartners.json");
        const StudentCredits = StudentService.StudentsWithCreditos(students,500);
        return StudentCredits
    }

}

module.exports = StudentController;