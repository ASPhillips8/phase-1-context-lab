// employee = [ fName, lName, title, pay]
function createEmployeeRecord(employee) {
  return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: [],
  }
}
// employees = [
//   ["moe", "sizlak", "barkeep", 2],
//   ["bartholomew", "simpson", "scamp", 3]
// ]

// this is an array of arrays
// for each employee i want to createEmployeeRecord
// return new array with changes...map
function createEmployeeRecords(employees){
  let employeeList = employees.map((employee) => createEmployeeRecord(employee))
  return employeeList
}

function createTimeInEvent (dateStamp) {
  let [date, time] = dateStamp.split(" ")
  let clockIn = {
    type: "TimeIn",
    hour: parseInt(time, 10),
    date: date
  }
  this.timeInEvents.push(clockIn)

  return this
}

function createTimeOutEvent (dateStamp) {
  let [date, time] = dateStamp.split(" ")
  let clockOut = {
    type: "TimeOut",
    hour: parseInt(time, 10),
    date: date
  }
  this.timeOutEvents.push(clockOut)

  return this
}

function hoursWorkedOnDate (enteredDate) {
  const hourIn = this.timeInEvents.find((inEvent) => inEvent.date === enteredDate)
  const hourOut = this.timeOutEvents.find((outEvent) => outEvent.date === enteredDate)

  return (hourOut.hour - hourIn.hour)/100
}

function wagesEarnedOnDate (enteredDate) {
  const payRate = this.payPerHour
  const hoursWork = hoursWorkedOnDate.call(this, enteredDate)

  return hoursWork * payRate
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName (srcArray, firstNameString) {
  // matching record or undefined (find method)

  return srcArray.find((employeeRecord) => employeeRecord.firstName = firstNameString)
}

function calculatePayroll (employeeRecords) {
  let payRoll = employeeRecords.reduce((total, employeeRecord) => total + allWagesFor.call(employeeRecord), 0)

  return payRoll
}
