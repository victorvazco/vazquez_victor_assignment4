
// Victor Vazquez
//SDI 1408
//Project 4 Deliverable 4
//Word Problem Functions



// Global Variables

var theNumber = "100"
var theDigits = "787-309-3194";
var theEmail = "victorvazco@fullsail.com";
var theDecimal = 56.8796545;
var theWebSite = "https://www.fullsail.com";
var theSeparate = "a,b,c";
var separateComa = ",";
var separateSlash = "/";
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





//Verify if email entered is true

var checkEmail = function(email){
    
    var stop = email.length;
    
    var beginEnd = email.lastIndexOf(".");
    

    
    if (email.substring(0,stop) === "@" || email.substring(beginEnd,stop) === ".com"){
        
        var yesCorrect = true;
        return yesCorrect;
    
      } else {
        
        var nonCorrect = false;  
    
    }
        return nonCorrect;

};





//Decimal Function

var keepAdecimal = function(numberToCHange){
    
    var decimal = numberToCHange.toFixed(3)
    
    return decimal;
    
};




//String Separator Function NOT WORKING YET

var changeSeparator = function(stringToSeparate,coma,slash){
    
    var stop = stringToSeparate.length;
    
    if (stringToSeparate.substring(0,stop) === ","){
        
       console.log("somein");
        
    }
};





//Verify if web address is true Function

var verifyWeb = function(address){
    
    var begin = address.lastIndexOf(".");
    var finish = address.length;
    
    if (address.substring(0,7) === "https://" || "http://"){
          
    var confirmed = true;
        
    return confirmed;

    } else {
        
    var denied = false;  
        
    }
    
    return denied;


};



//Add only the number characters in an array that includes strings NOT WORKING in my mind nor here YET!

var addArray = function(str){
    
 
    
};





//Main Code/Callers

var outComesNumber = stringToNumber(theNumber);
console.log("The number is " + outComesNumber);

var verifyTel = telephoneChecker(theDigits);
console.log("The telephone number is " + verifyTel);

var emailChecker = checkEmail(theEmail);
console.log("This is a " + emailChecker + " email address.");

var decimalator = keepAdecimal(theDecimal,3);
console.log("The decimal moved three spaces: " + decimalator + ".");

var webolator = verifyWeb(theWebSite);
console.log("This is a " + webolator + ' website address');

//var replacer = changeSeparator(theSeparate,separateComa,separateSlash);
//console.log("This is the finished product, " + changeSeparator);



//var theMathelator =addArray(theArrayMath);
//console.log("The total is " + theMathelator);
