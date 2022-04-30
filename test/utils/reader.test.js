const Reader = require("./../../lib/utils/reader");

describe("Prueba unitaria para Reader", () =>{
    test("Prueba 1 Imprime lista de objetos de los estudiantes de visualpartners.json", () => {
        // Codogigo que vamos a utlizar tal cual
        const students = Reader.readJsonFile("visualpartners.json");
        // Validamos el codigo que esperamos
        expect(students).not.toBeUndefined();
    });
});
module.exports = Reader;