
// Victor Vazquez
//SDI 1408
//Project 4 Deliverable 4
//Word Problem Functions



// Global Variables

var theNumber = "100"
var theDigits = "787-309-3194";
var theEmail = "victorvazco@fullsail.com";
var theArrayMath = ["4","78",89,45,"What Up!"];


//Enter a String and return a Number

var stringToNumber = function(number){
    
    
    var changeO = parseInt(number) + 5; // math to confirm that string has been changed number that can be worked with... this because in my browser I do not notice any color difference in the console
    
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




//Verify if email entered is correct

var checkEmail = function(email){
    
    var stop = email.length;
    
    var beginEnd = email.lastIndexOf(".")+1;
    

    
    if (email.substring(0,stop) === "@" || email.substring(beginEnd,stop) === "com"){
        
        var yesCorrect = true;
        return yesCorrect;
    
      } else {
        
        var nonCorrect = false;  
    
    }
        return nonCorrect;

};





//Add only the number characters in an array that includes strings

var addArray = function(arrayInfo){
    
    var theMath = arrayInfo[0] + arrayInfo[1] + arrayInfo[2] + arrayInfo[3] + arrayInfo[4];
    
    return theMath;
    
};





//Main Code/Callers

var outComesNumber = stringToNumber(theNumber);
console.log("The number is " + outComesNumber);

var verifyTel = telephoneChecker(theDigits);
console.log("The telephone number is " + verifyTel);

var emailChecker = checkEmail(theEmail);
console.log("This is a " + emailChecker + " email address.");

var theMathelator =addArray(theArrayMath);
console.log("The total is " + theMathelator);
