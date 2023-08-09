// blocking code
// In order to read the file, package being used is : "fs"
// fs.readFileSync() :: This method uses the sync style of comm
// readFileSync() --> Would use blocking style of comm

 

var fs = require("fs");
var data = fs.readFileSync('node1.txt');
var data2 = fs.readFileSync('node2.txt');


console.log(data2.toString());


console.log(data.toString());
console.log("Program Ended");