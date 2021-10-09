let digits = [];
let zero = [" _ ","| |","|_|"];
let one = ["   ","|  ","|  "];
let two = [" _ "," _|","|_ "];
let three = [" _ "," _|"," _|"];
let four = ["   ", "|_|", "  |"];
let five = [" _ ", "|_ ", ""];
let six = [" _ ", "|_ ", "|_|"];
let seven = [" _ ", "  |", "  |"];
let eight = [" _ ", "|_|", "|_|"];
let nine = [" _ ", "|_|", "  |"];
let digits = [zero, one, two, three, four, five, six, seven, eight, nine];

function printDoubleDigit(value){
    switch(value){
        case (value = 0): function printSingles(){

        }
        
        case (value = 1):function printTens(){
        
        }
        
        case (value = 2):function printTwinties(){
        
        }
        
        case (value = 3):function printThirties(){
        
        }
        
        case (value = 4):function printFourties(){
            for (k = 0; k <= 9; k++) {

                for (b = 0; b <= 3; b++) {
                    console.log(four[b] + " " + digits[k][b])
                }

            }
            printFourties();
        }
        
        case (value = 5):function printFifties(){
            for (k = 0; k <= 9; k++) {

                for (b = 0; b <= 3; b++) {
                    console.log(five[b] + " " + digits[k][b])
                }

            }
            printFifties();
        }
        
        case (value = 6):function printSixties(){
             for(f=0;f<digits.length;f++)
           {
               
               for (i = 0; i < six.length; i++)
               {
                   console.log(six[i] + " " + digits[f][i])
               }
           }
            printSixties();
        }
        
        case (value = 7):function printSeventies(){
            
        
            for(f=0;f<digits.length;f++)
            {
                
                for (i = 0; i < seven.length; i++)
                {
                    console.log(seven[i] + " " + digits[f][i]);
                }
            }
        
            printSeventies();
        }
        
        case (value = 8):function printEighties(){
        
        }
        
        case (value = 9):function printNinties(){
        
        }
    }    
}
