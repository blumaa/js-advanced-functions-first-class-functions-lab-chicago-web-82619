// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = (integer) => {
  return (fare) => {
    return integer * fare;
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
  return returnFirstTwoDrivers(drivers)
}
