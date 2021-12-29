// Code your solution in this file!


const returnFirstTwoDrivers = function firstTwo(names){
    return [names[0], names[1]];
}

const returnLastTwoDrivers = function lastTwo(names){
    return [names[names.length-2],names[names.length-1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(int){
    return function(fare){
        return fare * int };
}

function createFareMultiplier(int){
    return function(fare){
        return fare * int };
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
  }