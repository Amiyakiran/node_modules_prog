//import fs
//read a file
const fs = require('fs')


const getFileData = ()=>{
    fs.readFile('./text.txt','utf-8',(err,data)=>{
        if (err) throw err
        console.log(data)
    })
}

 
/* module.exports = {getFileData} */


//wirite to a file
fs.writeFile('./text.txt', 'Hello, world!', (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });
  

  getFileData() 


 /*  Working with Directories: You can create, read, and delete directories using methods like fs.mkdir(), fs.readdir(), and fs.rmdir(). */