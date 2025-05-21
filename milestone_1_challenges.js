// challenge 1; Sum of two numbers 
function addition(a, b) {
    return a + b;
}
//solution 
console.log(addition(6, 2));
console.log(adittion(-4, 7));

//Challenge 2;Conversion of minutes into seconds
function convert(minutes) {
    return minutes * 60;
}
//solution
console.log(convert (8));
console.log(convert (7));

//Challenge 3; Perimeter of a rectangle calculation
function findPerimeter(length, width) {
    return 2 * (length + width);
}      
//solution
console.log(findPerimeter(8, 8));
console.log(findPerimeter(20, 10));

//Challenge 4; Check for negative number
function isNegative(num) {
    return num <0;
}      
//solution
console.log(checkNegative(-23));
console.log(checkNegative(55));

//Challenge 5;Name and age participants
function canParticipate(name, age) {
    if (age >=18)  {
        return name + "is old enough to participate.";
    } else {
        return name + "is not old enough to participate yet.";
    }
  }
  //solution
console.log(canParticipate("Faith", 26));
console.log(canParticipate("Alice", 16));

//Challenge 6; Largest number
function findLargest(a, b, c) {
  if (a > b && a > c ) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(findLargest(7, 26, 18));
console.log(findLargest(10, 12, 17));

//Challenge 7;Body mass index calculator
let calculateBMI = function(weight, height){
    let BMI = weight / (height * height)
    if (BMI < 18.5){
        console.log(Your BMI is ${BMI.toFixed(1)} - Underweight)
    } else if (BMI >= 18.5 && BMI <= 24.9){
        console.log(Your BMI is ${BMI.toFixed(1)} - Normalweight)
    } else if (BMI >= 25 && BMI <= 29.9){
        console.log(Your BMI is ${BMI.toFixed(1)} - Overweight)
    } else if (BMI >= 30){
        console.log(Your BMI is ${BMI.toFixed(1)} - Obese)
    }
}
calculateBMI(30, 1.25); git status

calculateBMI(60, 2.8);

// Challenge 8;Setting greetings based on the time
function greetUser(name, hour) {
  if (hour < 0 || hour > 23 || !Number.isInteger(hour)) {
    return Invalid hour. Please provide a number from 0 to 23.;
  }
  if (hour >= 5 && hour <= 11) {
    return Good morning, ${name}!;
  } else if (hour >= 12 && hour <= 17) {
    return Good afternoon, ${name}!;
  } else if (hour >= 18 && hour <= 21) {
    return Good evening, ${name}!;
  } else {
    return Good night, ${name}!;
  }
}
//solution
console.log(greetUser("Angie", 8));
console.log(greetUser("Faith", 14));
console.log(greetUser("Christine", 19));
console.log(greetUser("Alice", 2));

//Challenge 9; FizzBuzzz check
function fizzBuzzCheck(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  }
  else if (number % 3 === 0) {
    return "Fizz";
  }
  else if (number % 5 === 0) {
    return "Buzz";
  }
  else {
    return String(number);
  }
}
//solution
console.log(fizzBuzzCheck(3));
console.log(fizzBuzzCheck(10));
console.log(fizzBuzzCheck(15));
console.log(fizzBuzzCheck(7));

//Challenge 10; Perimeter (circle or square)
function perimeter(letter, num) {
  if (letter === "s") {
    return 4 * num;
  } 
  else if (letter === "c") {
    return 6.28 * num;
  }
  else {
    return "Invalid shape. Use 's' for square or 'c' for circle.";
  }
}
//solution
console.log(perimeter("s", 7));
console.log(perimeter("c", 4));

//Challenge 11; Finding sum of even numbers
function sumEvenNumbers(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}
//solution
console.log(sumEvenNumbers(8));
console.log(sumEvenNumbers(16));
console.log(sumEvenNumbers(7));

//Challenge 12; Multiplicion by self
function powerUp(num, times = 0) {
  if (times === 0) {
    return 1;
  } 
  let result = 1;
  for (let i = 0; i < times; i++) {
    result *= num;
  }
  return result;
}
//solution
console.log(powerUp(2, 3));
console.log(powerUp(5, 0));
console.log(powerUp(3, 4));
console.log(powerUp(0));

//Challenge 13; Factorial calculator
function factorial(n) {
  if (n < 0 || !Num.isInteger(n)) {
    return "Input must be a non-negative integer";
  }
  if (n === 0) {
    return 1;
  }
   let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  } 
  return result;
}
//solution
console.log(factorial(0));
console.log(factorial(4));
console.log(factorial(6));

//Challenge 14; Sum multiple
function sumMultiples(n, divisor) {
  if (divisor <= 0) {
    return "Divisor should be a positive number";
  }
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % divisor === 0) {
      sum += i;
  }
 }
   return sum;
}
//solution
console.log(sumMultiples(10, 2));
console.log(sumMultiples(15, 3));
console.log(sumMultiples(7, 5));

//Challenge 15; Sum of digits
function sumDigits(num) {
  if (num < 0) {
    num = -num;
  }
  let sum = 0;
  while (num > 0) {
    const lastDigit = num % 10;
    sum += lastDigit;
    num = Math.floor(num / 10);
  }  
  return sum;
}
//solution
console.log(sumDigits(123));
console.log(sumDigits(4567));
console.log(sumDigits(0))                                                                                          77;