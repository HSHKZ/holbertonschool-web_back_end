import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    const database = process.argv[2]; // Récupérer le chemin de la base de données

    try {
      const fields = await readDatabase(database);
      let response = 'This is the list of our students\n';

      Object.keys(fields).sort().forEach((field) => {
        response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      });

      res.status(200).type('text/plain').send(response.trim());
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const database = process.argv[2];
    const major = req.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(database);
      const students = fields[major] || [];
      res.status(200).type('text/plain').send(`List: ${students.join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
