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

function printDoubleDigit(value){
    
    switch(value){
        case (value == 0): 
            function printSingles(){

            }
            break;
        
        case (value == 1):
            function printTens(){
        
            }
            break;

        case (value == 2):
            function printTwinties(){
          
            }
            break;
        
        case (value == 3):
            function printThirties(){
        
            }
            break;

        
        case (value == 4):
            function printFourties(){
                for (k = 0; k < digits.length; k++) {

                    for (b = 0; b < four.length; b++) {
                        console.log(four[b] + digits[k][b])
                    }

                }
                printFourties();
            }
            break;
        
        case (value == 5):
            function printFifties(){
                for (k = 0; k < digits.length; k++) {

                    for (b = 0; b < five.length; b++) {
                        console.log(five[b] + digits[k][b])
                    }

                }
                printFifties();
            }
            break;
        
        case (value == 6):
            function printSixties(){
                for(f=0;f<digits.length;f++)
                {
                    
                    for (i = 0; i < six.length; i++)
                    {
                        console.log(six[i] + " " + digits[f][i])
                    }
                }
                printSixties();
    
            }
            break;
        
        case (value == 7):
            function printSeventies(){
                for(f=0;f<digits.length;f++)
                {
                    
                    for (i = 0; i < seven.length; i++)
                    {
                        console.log(seven[i] + " " + digits[f][i]);
                    }
                }
            
                printSeventies();
            }
        break;
        
        case (value == 8):
            
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
            break;
        
        case (value == 9):
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
            
    }    
}
printDoubleDigit(8);
printDoubleDigit(9);
