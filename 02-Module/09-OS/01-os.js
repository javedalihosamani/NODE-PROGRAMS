var os = require('os');

// console.log("OS.CPUS()==>", JSON.stringify(os.cpus()));
console.log("OS.CPUS()==>", os.cpus());
console.log("OS.ORCH()==>", os.arch());
console.log("OS.ENDIANNESS()==>", os.endianness());
console.log("OS.FREEMEM()==>",os.freemem());
console.log("OS.HOSTNAME()==>", os.hostname());
console.log("OS.HOMEDIR()==>", os.homedir());
console.log("OS.PLATFORM()==>", os.platform());
console.log("OS.RELEASE()==>", os.release());
console.log("OS.TEMPDIR()==>", os.tmpdir());
console.log("OS.TOTALMEM()==>", os.totalmem());
console.log("OS.UPTIME()==>", os.uptime());
console.log("OS.TYPE()==>", os.type());