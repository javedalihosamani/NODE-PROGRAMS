const readLine = require('readline');
const fs = require('fs');

const txt = readLine.createInterface({
    input: fs.createReadStream("myFile.txt")
});

var li = 0;
txt.on("line", (data)=>{
    li++;
    console.log(`Line ${li} : ${data}`);
});