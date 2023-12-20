var a = 5;  
var b, c;

b = (a * 5);  //перша дія
b = (c = b/2); //друга дія



var a = prompt("Введіть свій вік")
var c = 2023;
var b;
b = alert (c - a);


var c = prompt("Ведіть темпертуру в градусах Цельсія")
var a;
var a = alert (c * 9/5) + 32;


let a = prompt("Введіть дробове число");
Math.floor(a);

const rate = 40;
let cost = prompt("Введіть гривні");
let result = alert (rate * cost);


const redColor = prompt("Введіть число");
const greenColor = prompt("Введіть число");
const blueColor = prompt("Введіть число");
let colorCss = "#" + red.toString(16)+
                      green.toString(16)+
                       blue.toString(16);
console.log("CSS-колір: " + colorCss);


var flatsNamber = prompt("Введіть кіськість поверхів");
var apartamentsNamber = prompt("Введіть кіськість квартир");
var namberApartament = prompt("Введіть номер квартири");

var resultFlats = Math.ceil((apartamentsNamber * flatsNamber) / namberApartament);
var Floor = Math.ceil(namberApartament % (apartamentsNamber * flatsNamber) / apartamentsNamber);

console.log("Квартира" + namberApartament + "розташована у " + resultFlats + "на поверсі" + Floor);