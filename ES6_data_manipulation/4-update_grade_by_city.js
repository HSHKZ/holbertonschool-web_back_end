export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  if (!Array.isArray(listOfStudents) || !Array.isArray(newGrades)) {
    return [];
  }
  const studentsByCity = listOfStudents.filter((student) => student.location === city);
  studentsByCity.forEach((student) => {
    const matchingGrade = newGrades.find((newGrade) => student.id === newGrade.studentId);
    // eslint-disable-next-line no-param-reassign
    student.grade = matchingGrade ? matchingGrade.grade : 'N/A';
  });
  return studentsByCity.map((student) => student);
}
