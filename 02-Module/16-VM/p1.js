const vm = require('vm');

let obj = {
    "title":"JS",
    "duration":"1 Month",
    "fee":12345
};

console.log("Initial OBJ Value : \n", obj);

vm.createContext(obj);
vm.runInContext(`title = "AngularJS";fee+=1000`,obj);
console.log(`After Update = \n`, obj);