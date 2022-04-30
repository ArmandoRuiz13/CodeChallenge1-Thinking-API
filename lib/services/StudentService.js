class StudentService{
    static filterByCertification(students){
        const studentwithCertification = students.filter((student) => student.haveCertification == true);
        return studentwithCertification;

    }
}
module.exports = StudentService;