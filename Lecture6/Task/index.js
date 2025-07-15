const fs = require("fs");

fs.readFile("../demo.txt", "utf-8", function(err, data1) {
    if (err) return console.log(err);
    console.log(data1);

fs.readFile("../demo2.txt", "utf-8", function(err, data2) {
    if (err) return console.log(err);
    console.log(data2);

const result = data1 + data2

fs.writeFile("../result.txt", result, function(err, data) {
    if (err) return console.log(err);
    console.log(data);
})
})
})