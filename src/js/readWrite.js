const fs = require("fs");
const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let message = "";

fs.readFile("news1.md",function(error,data){
    if(error) {
        console.log(error);
    }
    message = data.toString();
})

console.log("----------------")

rl.question("Напишите: ", date => {
    fs.writeFile("news1.md",message+date,function(error){
        if(error) {
            return console.log(error);
        }
        console.log("Успешно");
    });
    rl.close();

    fs.readFile("news1.md",function(error,data){
        if(error) {
            console.log(error);
        }
        console.log(data.toString());
    })
});