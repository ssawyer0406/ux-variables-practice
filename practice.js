// Exercise One - Computing a lifetime supply of your favorite snack!

// You just won a lifetime supply of your favorite snack.
// You are going to write a piece of code which will determine how much you
// will actually need to last the rest of your life.

// Follow the instructions to get the amount, putting your code after each instruction.

// Remember to use descriptive variable names!
// */

// 1. Store your current age into a variable.
// Hint: let age = ...;

let age = 29;

// 2. Store a maximum age into a variable.
let maxage = 100;
// 3. Store an estimated amount per day (as a number).
// For example 1, for 1 bag of chips per day.
let amountofChips = 1;
// 4. Calculate how many you would eat total for the rest of your life.
// Store the result in a variable.
// Hint: There are 365 days in a year, multiply that by the number of years and the amount per day...
let lifetimeOfChips = 365 * maxage * 1;
// 5. Create a variable called message describing your result.
// "You will need NN to last you until the ripe old age of X".
let message =
  "You will need " +
  lifetimeOfChips +
  " to last you until the ripe old age of " +
  maxage;

//  6. Output to console.log()
console.log(message);
/*

Exercise Two - Calculating your future age.

You want to know how old you will be in any given year.  Create a piece of code that will computer
your age given your birth year and a year in the future. 
*/

// 1. Store your birth year in a variable.
let birthYear = 1991;
// 2. Store a future year in a variable.
let futureYear = 2098;
// 3. Calculate your 2 possible ages for that year based on the stored values.
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
let age1 = futureYear - birthYear;
let age2 = futureYear - birthYear + 1;
// 4. Create a variable called message which describes the result.
// "I will be either NN or NN in YYYY", substituting the values.
let messageAge =
  "I will be either " + age1 + " or " + age2 + " in " + futureYear;
// 5.Output to console.log() /*
console.log(messageAge);
/*
Exercise Three - Temperature Converter

Build some code which can convert from Fahrenheit to Celcius, and also from Celcius to Fahrenheit.

Based upon the method described here: https://www.mathsisfun.com/temperature-conversion.html
Celcius to Fahrenheit:  Divide by 5, then multiply by 9, then add 32
Fahrenheit to Celcius:  Deduct 32, then multiply by 5, then divide by 9
*/

// 1. Store a celsius temperature into a variable.
// Hint: let tempInCelcius = 32;
let tempInCelcius = 32;
// 2. Convert it to fahrenheit and store that in a new variable.
let tempInFarenheit = (tempInCelcius / 5) * 9 + 32;
// 3. Output to console.log() in the format "NN°C is NN°F".
console.log(tempInCelcius + " °C " + " is " + " °F ");
// 4. Now store a fahrenheit temperature into a variable.
let farenheit = 47;
// 5. Convert it to celsius  and store that in a new variable.
let celsius = ((farenheit - 32) * 5) / 9;
// 6. Output to console.log() in the format "NN°F is NN°C."
console.log(celcius + " °F " + " is " + " °C ");
