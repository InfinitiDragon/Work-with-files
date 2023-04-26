// Завдання №2 Написати функцію яка буде створювати файл на диску з певним контентом

const fs = require('fs');
    function createFileWithContent(filePath, content) {
        fs.writeFile(filePath, content, (err) => {
        if (err) {
         console.error(err);
    }   else {
         console.log(`The file ${filePath} has been saved with content: ${content}`);
    }
  });
}

createFileWithContent('file.txt', 'Hello, Teacher!');