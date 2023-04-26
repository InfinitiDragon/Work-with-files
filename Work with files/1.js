// Завдання №1 Написати функцію, яка буде читати вміст файлу на диску і виводити його значення на екран

const fs = require('fs')
    function readAndPrintFileContent(filePath){
        fs.readFile(filePath, 'utf8' , (err , data) => {
            if (err) console.log(err);
            else console.log(data);
        })
    }

    readAndPrintFileContent('file.txt')