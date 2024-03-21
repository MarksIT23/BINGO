console.log("Hello World.");
let B, I, N, G, O = false;  



generateRandomNumber(30);
function generateRandomNumber(max) {
    let randomNum = Math.floor(Math.random() * max) + 1;

    if (randomNum <= 15){
        B = true
        console.log(`Random number ${randomNum} is in B. 1 - 15`);

    } else if (randomNum >= 16 && randomNum <= 30) {
        I = true
     console.log(`Random number ${randomNum} is in I. 16 - 30`);

    } else if (randomNum >= 31 && randomNum <= 45) {
        N = true
         console.log(`Random number ${randomNum} is in N. 31 - 45`);

    }  else if (randomNum >= 46 && randomNum <= 60) {
        G = true
        console.log(`Random number ${randomNum} is in G. 46 - 60`);

    } else if (randomNum >= 61 && randomNum <= 75) {
         O = true
         console.log(`Random number ${randomNum} is in O. 61 - 75`);

    } else {
         console.log(`Random number is invalid`);
    
    } if (B == true && I == true && N == true && G == true && O == true) {
        console.log("BINGOOOOO!!!");
    }
}

//Genearte and store unique numbers
function updateT(min, max, count) {
    const numbers = new Set();
    while (numbers.size < count) {
        numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return Array.from(numbers);
}
const columns = ['b', 'i', 'n', 'g', 'o'];
for (let col of columns) {
    const numbers = updateT(columns.indexOf(col) * 15 + 1, columns.indexOf(col) * 15 + 15, 5);
    for (let i = 0; i < 5; i++) {
        document.getElementById(`${col}${i + 1}`).textContent = numbers[i];
    }
}
function instantBingo() {
    let max = 75;
    while (!(B && I && N && G && O)) {
        generateRandomNumber(max);
    }
}

window.onload = updateT;
window.onload = instantBingo;



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
