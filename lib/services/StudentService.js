class StudentService{
    static filterByCertification(students,certification){
        const studentwithCertification = students.filter((student) => student.haveCertification == certification);
        return studentwithCertification;

    }
    // static getEmailStudentsCertification(certification){
    //     const StudentsEmail = studentwithCertification.map((student) => ) 
    // }
}
module.exports = StudentService;