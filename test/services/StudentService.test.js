const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/Reader");
const students = Reader.readJsonFile("visualpartners.json");

describe("Prueba unitaria para StudentService", () =>{
    test("Prueba 1: Verificar estudiantes con certificacion", () => {
        const explorersInNode = StudentService.filterByCertification(students,true);
        expect(explorersInNode).not.toBeUndefined();
    });
});