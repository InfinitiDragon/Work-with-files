// Завдання №3 Написати функцію, яка буде додавати вміст до раніше створеного файлу

const fs = require('fs');

function appendToFile(filePath, content) {
  fs.appendFile(filePath, content, (err) => {
    if (err) throw err;
    console.log('Content was appended to file');
  });
}

appendToFile('file.txt', 'Hello');