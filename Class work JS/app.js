
// Data
const paymentHour = 80;
const workProj = 40;

// Решение
let workDaysBeforeWeekend = 11 - 2;

let allWorkHours = workDaysBeforeWeekend * 5;

if (workProj > allWorkHours) {
    console.log(false);
}
else {
    console.log(true);
    console.log(workProj * paymentHour);

}