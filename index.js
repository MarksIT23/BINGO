
console.log("Hello World.");

generateRandomNumber(30);

function generateRandomNumber(max) 
{
    let randomNum = Math.floor(Math.random() * max) + 1;

if (randomNum <= 15){
    return console.log(`Random number ${randomNum} is in B. 1 - 15`);
} else if (randomNum >= 16 && randomNum <= 30) {
return console.log(`Random number ${randomNum} is in I. 16 - 30`);
} else if (randomNum >= 31 && randomNum <= 45) {
    return console.log(`Random number ${randomNum} is in N. 31 - 45`);
}  else if (randomNum >= 46 && randomNum <= 60) {
    return console.log(`Random number ${randomNum} is in G. 46 - 60`);
}
else if (randomNum >= 61 && randomNum <= 75) {
    return console.log(`Random number ${randomNum} is in O. 61 - 75`); 
} 
else 
{
return console.log(`Random number is invalid`);
}
return console.log(randomNum);
}


//switch
//
//    switch(randomNum){
//        case randomNum == 1:
//        console.log(`Random number is in B.`)
//        break;
//        case randomNum == 16:
//        console.log(`Random number is in I`)
//        break;
//        case randomNum == 31:
//        console.log(`Random number is in N`)
//        break;
//        case randomNum == 46:
//        console.log(`Random number is in G`)
//        break;
//        case randomNum == 61:
//        console.log(`Random number is in O`)
//        break;
//    }
//    }
