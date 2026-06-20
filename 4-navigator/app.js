let posLatitude = 4;
let posLongitude = 5;
let desLatitude = 9;
let desLongitude = 11;

let firstQuat = (desLatitude - posLatitude) ** 2;
let secondQuat = (desLongitude - posLongitude) ** 2;

let d = Math.sqrt(firstQuat + secondQuat);

console.log(d)