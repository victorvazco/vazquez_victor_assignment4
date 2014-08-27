
// Victor Vazquez
//SDI 1408
//Project 4 Deliverable 4
//Word Problem Functions



// Global Variables

var theNumber = "100"




//Enter a String and return a Number

var stringToNumber = function(number){
    
    
    var changeO = parseInt(number) + 5;
    
    console.log(changeO);
       
    changeO = changeO - 5;
    
    
    return changeO;
    
};





//Main Code/Callers

var outComesNumber = stringToNumber(theNumber);
console.log("The number is " + outComesNumber);