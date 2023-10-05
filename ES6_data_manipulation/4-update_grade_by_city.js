export default function updateStudentGradeByCity(listOfStudent, city, newGrades) {
    const students = listOfStudent.filter((student) => student.location === city).map((st) => ({ ...st, grade: newGrades[0].grade || 'N/A'}));
    return students
}