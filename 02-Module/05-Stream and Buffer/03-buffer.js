var buffer = Buffer.alloc(10); // Allocate memory location
console.log(buffer);

var buf1 = Buffer.alloc(15, 'b');
console.log(buf1);

var unsafebuff = Buffer.allocUnsafe(30);
console.log(unsafebuff);

var bufarray1 = Buffer.from([100, 599, 300, 122, 500]);
console.log("Total array elements = "+  bufarray1.length);