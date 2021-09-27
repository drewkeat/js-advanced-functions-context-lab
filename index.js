/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(array) {
    return {firstName: array[0], familyName: array[1], title: array[2], payPerHour: array[3], timeInEvents: [], timeOutEvents: []}
}

function createEmployeeRecords(array) {
    return array.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(timeStamp) {
    this.timeInEvents.push(
        {
            type: "TimeIn",
            hour: parseInt(timeStamp.split(" ")[1]),
            date: timeStamp.split(" ")[0]
        }
    )
    return this
}

function createTimeOutEvent(timeStamp) {
    this.timeOutEvents.push(
        {
            type: "TimeOut",
            hour: parseInt(timeStamp.split(" ")[1]),
            date: timeStamp.split(" ")[0]
        }
    )
    return this
}

function hoursWorkedOnDate(timeStamp) {
    const timeIn = this.timeInEvents.find(event => event.date === timeStamp).hour
    const timeOut = this.timeOutEvents.find(event => event.date === timeStamp).hour
    
    return (timeOut - timeIn)/100
}

function wagesEarnedOnDate(timeStamp) {
    
    return hoursWorkedOnDate.call(this, timeStamp) * this.payPerHour
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, name) {
    return srcArray.find(employee => employee.firstName === name)
}

function calculatePayroll(array) {
    return array.reduce((total, employee) => {
        return total += allWagesFor.call(employee)
    }, 0)
}
