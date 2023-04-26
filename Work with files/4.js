// Завдання №4 Створити функцію, яка буде 
// видаляти файл з диску, якщо він існує. Якщо файл 
// не існує, то така помилка має бути 
// оброблена використовуючи конструкцію try ... catch. 

const fs = require('fs');

function deleteFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`Файл "${filePath}" був видалений`);
    } else {
      console.log(`Файл "${filePath}" не існує`);
    }
  } catch (error) {
    console.error(error);
  }
}

deleteFile('file.txt');