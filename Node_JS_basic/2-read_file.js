// counts all students in the CSV file and prints out the Number and the Name of the students.

const fs = require('fs');

function countStudents(fileName) {
  const studentsByField = {};
  const fieldsCount = {};
  let totalStudents = 0;

  try {
    // open and read the CSV
    const content = fs.readFileSync(fileName, 'utf-8');
    const lines = content.trim().split('\n');

    // Go through the file Line by Line
    for (let i = 1; i < lines.length; i += 1) {
      if (lines[i]) {
        totalStudents += 1;
        const [firstName, , , field] = lines[i].split(',');

        // Add students
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstName);

        // Count the students and add 1
        if (fieldsCount[field]) {
          fieldsCount[field] += 1;
        } else {
          fieldsCount[field] = 1;
        }
      }
    }

    // Print the Studentnumber
    console.log(`Number of students: ${totalStudents}`);

    // Print Studentnumber per Field
    for (const [field, count] of Object.entries(fieldsCount)) {
      console.log(`Number of students in ${field}: ${count}. List: ${studentsByField[field].join(', ')}`);
    }
  } catch (error) {
    // If Error occures report it
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
