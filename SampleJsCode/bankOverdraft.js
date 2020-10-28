var accName = "Charles Darwin";
var accBal = 100000;
var withdrawAmount = 150000;
var overdraftStatus = true;

if ((withdrawAmount < accBal) ) {    
   
        console.log("Dear ", accName, ", your withdrawal of N", withdrawAmount, "is successful");
        console.log("New AccountBalance: ", accBal - withdrawAmount);
    
} else
    if ((withdrawAmount > accBal) && (overdraftStatus))
{
    
            console.log("Dear ", accName, ", your withdrawal of N", withdrawAmount, "is successful");
            console.log("New AccountBalance: ", accBal - withdrawAmount);
    
} else
{
        console.log("Insufficient balance");
}
