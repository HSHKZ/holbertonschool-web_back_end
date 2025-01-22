const express = require('express');
const fs = require('fs');

const app = express();

const countStudents = (database) => {
  return new Promise((resolve, reject) => {
    fs.readFile(database, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n').slice(1); // Ignore the header
        const students = lines.filter((line) => line.trim() !== '');
        const count = students.length;

        const fields = {};
        students.forEach((student) => {
          const [firstName, lastName, age, field] = student.split(',');
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
        });

        resolve({ count, fields });
      }
    });
  });
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const database = process.argv[2]; // Argument pour le fichier CSV
  if (!database) {
    res.send('This is the list of our students\nCannot load the database');
    return;
  }

  try {
    const { count, fields } = await countStudents(database);
    let response = `This is the list of our students\nNumber of students: ${count}\n`;

    for (const [field, students] of Object.entries(fields)) {
      response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }

    res.type('text/plain');
    res.send(response.trim());
  } catch (err) {
    res.send('This is the list of our students\nCannot load the database');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
