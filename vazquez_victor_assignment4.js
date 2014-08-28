
// Victor Vazquez
//SDI 1408
//Project 4 Deliverable 4
//Word Problem Functions



// Global Variables

var theNumber = "100"
var theDigits = "787-309-3194";
var theEmail = "victorvazco@fullsail.com";
var theDecimal = 56.8796545;
var theAmountSpaces = 3;
var theWebSite = "https://www.fullsail.com";
var theDate = new Date("July 17 1983");
var theDateToday = new Date();
var theTypeDate = "hours";//tested "days" as well


//Enter a String and return a Number

var stringToNumber = function(number){
    
    
    var changeO = parseInt(number) + 5; // math to confirm that string has been changed number that can be worked with... this because in my browser I do not notice any color difference in the console
    
    console.log(changeO);
       
    changeO = changeO - 5;
    
    
    return changeO;
    
};





//Verify if string entered is a telephone number in the right format Function

var telephoneChecker = function(telNumber){
    
    if (telNumber.length === 12 && telNumber.charAt(3 && 7) === "-"){
        
        var itsCorrect = true;
        
        return itsCorrect;
    
        } else {
        
        var notCorrect = false;  
    
        return notCorrect;
    
        }
};





//Verify if email entered is true // NOT WORKING // want to include @ is included

var checkEmail = function(email){
    
    var stop = email.length;
    var beginEnd = email.lastIndexOf(".");
    
    if (email.indexOf("@") == -1 ) {
        
        var nonCorrect1 = false;
        
        return nonCorrect1;
    
    } else if (email.substring(beginEnd,stop) === "."){
        
        var yesCorrect = true;
        return yesCorrect;
    
      } else {
        
        var nonCorrect = false;  
    
    }
        return nonCorrect;

};





//Decimal Function

var keepAdecimal = function(numberToCHange,decimalSpaces){
    
    var decimal = numberToCHange.toFixed(decimalSpaces)
    
    return decimal;
    
};





//Verify if URL starts with https:// or http:// Function

var verifyWeb = function(address){
    
    if (address.substring(0,7) === "https://" || "http://"){
          
    var confirmed = true;
        
    return confirmed;

    } else {
        
    var denied = false;  
        
    }
    
    return denied;


};





//Compare Dates Funktion

var Dating = function(present,past,time){
    
    if ( time === "days" ) {
    
    var compareDates = (theDateToday - theDate)/1000/60/60/24
    
    var roundedUp = Math.round(compareDates);
    
    } else if (time === "hours") {
        
        var compareDates = (theDateToday - theDate)/1000/60/60
    
    var roundedUp = Math.round(compareDates);
    
    }
    return roundedUp;

};







//Main Code/Callers

var outComesNumber = stringToNumber(theNumber);
console.log("The number is " + outComesNumber);

var verifyTel = telephoneChecker(theDigits);
console.log("The telephone number is " + verifyTel);

var emailChecker = checkEmail(theEmail);
console.log("This is a " + emailChecker + " email address.");

var decimalator = keepAdecimal(theDecimal,theAmountSpaces);
console.log("The decimal moved three spaces: " + decimalator + " .");

var webolator = verifyWeb(theWebSite);
console.log("This is a " + webolator + ' website address');

var dateonator = Dating(theDateToday,theDate,theTypeDate);
console.log("I have been alive for " + dateonator + " days." );




