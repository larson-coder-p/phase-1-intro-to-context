function createEmployeeRecord(array) {
    // Function implementation
  }
  
  function createEmployeeRecords(array) {
    // Function implementation
  }
  
  function createTimeInEvent(record, dateTime) {
    // Function implementation
  }
  
  function createTimeOutEvent(record, dateTime) {
    // Function implementation
  }
  
  function hoursWorkedOnDate(record, date) {
    // Function implementation
  }
  
  function wagesEarnedOnDate(record, date) {
    // Function implementation
  }
  
  function allWagesFor(record) {
    // Function implementation
  }
  
  function calculatePayroll(records) {
    // Function implementation
  }
     // Example Implementation
function createEmployeeRecord(array) {
    return {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(record, dateTime) {
    const [date, hour] = dateTime.split(' ');
    record.timeInEvents.push({
      type: "TimeIn",
      date,
      hour: parseInt(hour, 10)
    });
    return record;
  }
  
  function createTimeOutEvent(record, dateTime) {
    const [date, hour] = dateTime.split(' ');
    record.timeOutEvents.push({
      type: "TimeOut",
      date,
      hour: parseInt(hour, 10)
    });
    return record;
  }
  
  function hoursWorkedOnDate(record, date) {
    const timeIn = record.timeInEvents.find(e => e.date === date);
    const timeOut = record.timeOutEvents.find(e => e.date === date);
    if (timeIn && timeOut) {
      return (timeOut.hour - timeIn.hour) / 100;
    }
    return 0;
  }
  
  function wagesEarnedOnDate(record, date) {
    return hoursWorkedOnDate(record, date) * record.payPerHour;
  }
  
  function allWagesFor(record) {
    return record.timeInEvents.reduce((total, timeIn) => {
      const date = timeIn.date;
      return total + wagesEarnedOnDate(record, date);
    }, 0);
  }
  
  function calculatePayroll(records) {
    return records.reduce((total, record) => total + allWagesFor(record), 0);
  }
         