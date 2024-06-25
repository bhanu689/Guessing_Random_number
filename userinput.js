const readline = require("readline")

const rl=readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

function greet(name){
    console.log(`Hello,${name}`);
    rl.close()
}
rl.question("what is your name?:",
    greet
);
