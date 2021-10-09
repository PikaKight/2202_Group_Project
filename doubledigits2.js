let zero = [" _ ","| |","|_|"];
let one = ["   ","|  ","|  "];
let two = [" _ "," _|","|_ "];
let three = [" _ "," _|"," _|"];
let four = ["   ", "|_|", "  |"];
let five = [" _ ", "|_ ", " _|"];
let six = [" _ ", "|_ ", "|_|"];
let seven = [" _ ", "  |", "  |"];
let eight = [" _ ", "|_|", "|_|"];
let nine = [" _ ", "|_|", "  |"];
let digits = [zero, one, two, three, four, five, six, seven, eight, nine];

function printSingles(){

}
        
function printTens(){
        
}
        
function printTwenties(){
    for(x=0;x<digits.length;x++) {
        
        for (i = 0; i < two.length; i++)
        {
            console.log(two[i] + " " + digits[x][i]);
        }
    }
}     
        
function printThirties(){
    for(x=0;x<digits.length;x++) {
        
        for (i = 0; i < three.length; i++)
        {
            console.log(three[i] + " " + digits[x][i]);
        }
    }
}     
        
function printFourties(){
    for (k = 0; k < digits.length; k++) {

        for (b = 0; b < four.length; b++) {
            console.log(four[b] + digits[k][b])
        }

    }
}
        
function printFifties(){
    for (k = 0; k < digits.length; k++) {

        for (b = 0; b < five.length; b++) {
            console.log(five[b] + digits[k][b])
        }

    }
}
        
function printSixties(){
    for(f=0;f<digits.length;f++)
    {
        
        for (i = 0; i < six.length; i++)
        {
            console.log(six[i] + " " + digits[f][i])
        }
    }
}
        
function printSeventies(){
    for(f=0;f<digits.length;f++)
    {
        
        for (i = 0; i < seven.length; i++)
        {
            console.log(seven[i] + " " + digits[f][i]);
        }
    }
}

function printEighties(){
    let eighties = "";
    let firstDigit = digits[8];
    for (i=0; i < digits.length; i++){
        
        let secondDigit = digits[i];
        
        for (j = 0; j < 3; j++){
            eighties += firstDigit[j] + secondDigit[j];
            eighties += "\n"; 
        }
   }     
   console.log(eighties);
}
        
function printNinties(){
    let nineties = "";
    let firstDigit = digits[9];
    for (i=0; i < digits.length; i++){
        
        let secondDigit = digits[i];
        
        for (j = 0; j < 3; j++){
            nineties += firstDigit[j] + secondDigit[j];
            nineties += "\n"; 
        }
   }     
   console.log(nineties);
        
}

if (!module.parent){
    printTwenties();
    printThirties();
    printFourties();
    printFifties();
    printSixties();
    printSeventies();
    printEighties();
    printNinties();
}
