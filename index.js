const drivers=["Sally","Bob","Freddy","Claudia"];

const returnFirstTwoDrivers= function(){
    const newArray= drivers.slice(0,2);
 return newArray;
}
const returnLastTwoDrivers= function(){
    const newArray=drivers.slice(-2);
    return newArray;
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
selectingDrivers[0]();
selectingDrivers[1]();

function createFareMultiplier(num1)
{
    return function(fare){return num1*fare;};
}
const fareDoubler=createFareMultiplier(2);
const fareTripler=createFareMultiplier(3);
    
function selectDifferentDrivers(arrayOfDrivers, driverFunction)
{
    return driverFunction(arrayOfDrivers);
}

