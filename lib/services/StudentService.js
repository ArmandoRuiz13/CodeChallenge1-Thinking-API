class StudentService{
    static filterByCertification(students,certification){
        const studentwithCertification = students.filter((student) => student.haveCertification == certification);
        return studentwithCertification;

    }

    static getEmailStudentsCertification(students,certification){
        const studentwithC = students.filter((student) => student.haveCertification == certification);
        const  StudentsEmail = studentwithC.map((student) => student.email);
        return StudentsEmail 
    }
}
module.exports = StudentService;