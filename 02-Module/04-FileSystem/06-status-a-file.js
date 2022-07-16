var fs = require('fs');

fs.stat('output2.txt', (err, stats) =>{
    if(err)
        return console.error(err);
    console.log(stats);

    // check file type
    console.log("isFile  ?" + stats.isFile());
    console.log("isDirectory ?"+ stats.isDirectory());
});