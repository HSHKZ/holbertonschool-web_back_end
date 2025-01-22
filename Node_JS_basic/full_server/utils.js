import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n').slice(1); // Ignore the header
        const students = lines.filter((line) => line.trim() !== '');
        const fields = {};

        students.forEach((student) => {
          const [firstName, lastName, age, field] = student.split(',');
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
        });

        resolve(fields);
      }
    });
  });
};

export default readDatabase;
