const StudentController = require("./../../lib/controllers/StudentsController");


describe("Prueba unitaria para StudentController", () =>{
    test("Prueba 1: Imprime lista de objetos de los estudiantes de visualpartners.json", () => {
        // Codogigo que vamos a utlizar tal cual
        const students = StudentController.GetAllStudents();
        // Validamos el codigo que esperamos
        expect(students).not.toBeUndefined();
    });
});