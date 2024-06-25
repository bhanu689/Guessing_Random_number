const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

const player ={
    username:"",
    attempts:0,
};

const options = {
    min:1,
    max:100,
    thresh: 5,
    goal:-1,
    maxAttempts : 10,
};

function setgoal(){
    console.log("Generating goal...")
    const goal = Math.floor(Math.random * (options.max - options.min +1)+)
    takeguess()
}

function takeguess(){
    rl.question(`make a random guess:`,(guess)=>{
        if (guess = options.goal){
            player.attempts +=1;
            console.log(`you guessed it right in ${player.attempts} attempts. Congratualations`)
        }
        rl.close();
        process.exit(0);
    })

}

const maxThresh = options.goal + options.thresh;
const minThresh = options.goal-options.thresh;

if(guess >= minThresh && guess <= maxThresh){
    console.log("you are close")

}else if(guess >= maxThresh){
    console.log("Guess the lower number")
}else{
    console.log("Guess the higher number")
}
attempts+=1;
if(player.attempts>maxAttempts){
    console.log("you lost")
    rl.close();
process.exit(0);
}
else{
    takeguess();
 

}

enrollUser();