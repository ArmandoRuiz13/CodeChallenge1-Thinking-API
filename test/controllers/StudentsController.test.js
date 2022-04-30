const StudentController = require("./../../lib/controllers/StudentsController");


describe("Prueba unitaria para StudentController", () =>{
    test("Prueba 1: Imprime lista de objetos de los estudiantes de visualpartners.json", () => {
        // Codogigo que vamos a utlizar tal cual
        const students = StudentController.GetAllStudents();
        // Validamos el codigo que esperamos
        expect(students).not.toBeUndefined();
    });
    test("Prueba 2: Recepcion estudiantes dependiendo si tienen certificacion true o false", () => {
        const StudentsEmails = StudentController.GetEmailsStudents();
        expect(StudentsEmails).toContain("Todd@visualpartnership.xyz");
        expect(StudentsEmails).toContain("Sexton@visualpartnership.xyz");
        expect(StudentsEmails).toContain("Sharlene@visualpartnership.xyz");
    });
    test("Prueba 3: Recepcion estudiantes dependiendo los creditos", () => {
        const StudentCredits = StudentController.GetStudentsUp500credits();
        expect(StudentCredits).not.toBeUndefined();
    });
});