import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const file = await readDatabase(process.argv[2]);
      const sortedFields = Object.keys(file).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      let responseText = 'This is the list of our students\n';

      sortedFields.forEach((field) => {
        const students = file[field];
        responseText += `Number of students in ${field}: ${
          students.length
        }. List: ${students.join(', ')}\n`;
      });

      response.status(200).send(responseText);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const studentsByField = await readDatabase(process.argv[2]);

      if (!studentsByField[major]) {
        response.status(200).send('List: ');
        return;
      }

      response.status(200).send(`List: ${studentsByField[major].join(', ')}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
