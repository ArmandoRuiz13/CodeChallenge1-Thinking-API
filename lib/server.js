const StudentController = require("./controllers/StudentsController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Thinking API welcome!"});
});

app.get("/v1/students",(request,response) =>{
    const students = StudentController.GetAllStudents();
    response.json(students);
});

app.get("/v1/students/emails",(request,response) =>{
    const StudentsEmails = StudentController.GetEmailsStudents();
    response.json("Estudiantes con certificado true :"+StudentsEmails);
});

app.get("/v1/students/credits",(request,response) =>{
    const StudentCredits = StudentController.GetStudentsUp500credits();
    response.json(StudentCredits);
});
app.listen(port, () => {
    console.log(`Visual Thinking API in localhost:${port}`);
});