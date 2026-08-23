//generate random Number 

let randomNumber = parseInt((Math.random())*100+1)
console.log(randomNumber);

let chances = 0

for(let index=1; index<=100; index++){
    let InputNumber = Number(prompt("Enter the guessed Number : "));
    if(randomNumber===InputNumber){
        console.log("you guessed it right");
        console.log(`Score : ${100-index}`);
        break;
    }
    else if(InputNumber>randomNumber){
        console.log("you are going much greater TRY AGAIN");
        chances++;
    }
    else{
        console.log("you are going much lesser TRY AGAIN ");
        chances++;
    }

    
}