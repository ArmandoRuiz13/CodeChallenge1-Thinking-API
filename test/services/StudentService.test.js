const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/Reader");
const students = Reader.readJsonFile("visualpartners.json");

describe("Prueba unitaria para StudentService", () =>{
    test("Prueba 1: Verificar estudiantes con certificacion", () => {
        const StudentWCertification = StudentService.filterByCertification(students,true);
        expect(StudentWCertification).not.toBeUndefined();
    });
    test("Prueba 2: Recepcion estudiantes dependiendo si tienen certificacion true o false", () => {
        const StudentsEmails = StudentService.getEmailStudentsCertification(students,true);
        expect(StudentsEmails).toContain("Todd@visualpartnership.xyz");
        expect(StudentsEmails).toContain("Sexton@visualpartnership.xyz");
        expect(StudentsEmails).toContain("Sharlene@visualpartnership.xyz");
    });
    test("Prueba 3: Recepcion estudiantes dependiendo los creditos", () => {
        const StudentCredits = StudentService.StudentsWithCreditos(students,500);
        expect(StudentCredits).not.toBeUndefined();
    });
});