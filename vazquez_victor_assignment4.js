
// Victor Vazquez
//SDI 1408
//Project 4 Deliverable 4
//Word Problem Functions



// Global Variables

var theNumber = "100"
var theDigits = "787-309-3194";



//Enter a String and return a Number

var stringToNumber = function(number){
    
    
    var changeO = parseInt(number) + 5;
    
    console.log(changeO);
       
    changeO = changeO - 5;
    
    
    return changeO;
    
};


//Verify if string entered is a telephone number in the right format Function

var telephoneChecker = function(telNumber){
    
    if (telNumber.length === 12 || telNumber.charAt(3 && 7) === "-"){
        
        var itsCorrect = true;
        
        return itsCorrect;
    
        } else {
        
        var notCorrect = false;  
    
        return notCorrect;
    
        }
};



//Main Code/Callers

var outComesNumber = stringToNumber(theNumber);
console.log("The number is " + outComesNumber);

var verifyTel = telephoneChecker(theDigits);
console.log("The telephone number is " + verifyTel);
