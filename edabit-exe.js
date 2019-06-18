// Create a function that takes a name and returns a greeting. Don't use a normal function but use an "arrow function".

const helloName = name => {
    return `Hello ${name} !`;
}
console.log(helloName("Ed"));

// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
function comp(str1, str2) {
if(str1.length == str2.length){
    return true
}else {
    return false
}
}
console.log(comp("AB", "CD"));

// Check String for Spaces

function hasSpaces(str) {
if(str.includes(' ')){
    return true
}else{
    return false
}
}
console.log(hasSpaces("hello"))

// Write a function that validates whether two strings are identical. Make this validator case insensitive.
function match(s1, s2) {
if(s1.toUpperCase() === s2.toUpperCase()){
    return true
}else {
    return false
}
}

console.log(match("hello", "hELLo"))

// Area of a Triangle
function triArea(base, height) {
return (base * height) / 2
}


console.log(triArea(3, 2))

// Maximum Edge of a Triangle
function nextEdge(side1, side2) {
return (side1 + side2) -1;	
}

console.log(nextEdge(8, 10))

// You've got chickens (2 legs), cows (4 legs) and pigs (4 legs) on your farm. Return the total number of legs on your farm.


function animals(chickens, cows, pigs) {
return (chickens*2 + cows*4 + pigs*4)
}

console.log(animals(2, 3, 5))


// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

function divisible(num) {
if(num % 100 == 0){
    return true
}	else {
    return false
}

}
console.log(divisible(1000))




// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

function isPlural(word) {
if(word.indexOf('s') == word.length -1){
    return true
}else {
    return false
}

}
console.log(isPlural("changes"));
// String to Integer and Vice Versa
//Write two functions:

// toInt() : A function to convert a string to an integer.
// toStr() : A function to convert an integer to a string.

function toInt(str) {
return  parseInt(str,10)
}

function toStr(int) {
return String(int);

}
console.log(toInt("77"))
console.log(toStr(532))

// Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is divisible by 5, and false otherwise.

function divisibleByFive(n) {
if(n % 5 == 0){
    return true

}else {
    return false
}
}
console.log(divisibleByFive(37));

// Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition(num) {
return num += 1;

}
console.log(addition(0));

//*** */ Count Syllables
// Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.

function numberSyllables(word) {
return word.toLowerCase().split('-').length;
}

console.log(numberSyllables("buf-fet")); // 2


//** Smaller String Number
//Create a function that returns the smaller number.

function smallerNum(n1, n2) {
return Math.min(n1, n2).toString()
}

console.log(smallerNum("21", "44"))

// Check if the Same Case
// Create a function that returns true if an input string contains only uppercase or only lowercase letters.

function sameCase(str) {
return str == str.toLowerCase() || str === str.toUpperCase();
}
console.log(sameCase("hello"))
console.log(sameCase("ketcHUp"));

//*** */ Strange Pair
//  A pair of strings form a strange pair if:
//1st string's first letter = 2nd string's last letter.
//1st string's last letter = 2nd string's first letter.


function isStrangePair(str1, str2) {
return str2.endsWith(str1.charAt(0)) && str1.endsWith(str2.charAt(0))
}
console.log(isStrangePair("sparkling", "groups"))

// Return the Last Element in an Array
//Create a function that accepts an array and returns the last item in the array.

function getLastItem(arr) {
return arr.pop()
}

console.log(getLastItem([1, 2, 3]))

// Reverse an Array

function reverse(arr) {
return arr.reverse()
}

console.log(reverse([1, 2, 3, 4]))

// Remove the First and Last Characters
//Create a function that removes the first and last characters from a string.

function removeFirstLast(str) {
if(str.length <= 2){
    return str
}else{
    return str.slice(1, -1)
}
}

console.log(removeFirstLast("a"))


function checkPalindrome(str) {
return str === str.split('').reverse().join('')

}
console.log(checkPalindrome("mom"))
console.log(checkPalindrome("scary"));

 // Vowel Replacer
function replaceVowels(str, ch) {
	return str.replace(/['aeiou']/g, ch)
}

console.log(replaceVowels("the aardvark", "#"))


// Array from Comma-Delimited String
// Return an empty array for an empty string.

function toArray(str) {
	if(str === ""){
		return []
	} else {
		return str.split(", ")
	}
}

console.log(toArray("watermelon, raspberry, orange"))
console.log(toArray(""))


// Get the File Extension
// Write a function that maps files to their extension names.

function getExtension(arr){
    return arr.map(a => a.split('.').pop())
}


console.log(getExtension(["code.html", "code.css"]))



// Write a function that returns true if a word can be found in between the start and end word in a dictionary.

function isBetween(first, last, word) {
    return word >= first && word <= last ;
}
console.log(isBetween("monk", "monument", "monkey")); // true


// Get Word Count
// Create a function that takes a string and returns the word count. The string will be a sentence.

function countWords(str){
    return str.split(' ').length;
}
console.log(countWords("Just an example here move along"));

// Is it Time for Milk and Cookies?
//Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

function timeForMilkAndCookies(date) {
    return date.getMonth() === 11 && date.getDate() === 24;
}


// Concatenating Two Integer Arrays
//Create a function to concatenate two integer arrays.


function concat(arr1, arr2) {
    return arr1.concat(arr2)
}

console.log(concat([1, 3, 5], [2, 6, 8]))

// Profitable Gamble
// reate a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.

function profitableGamble(prob, prize, pay) {
    if(prob * prize > pay){
        return true
    }else {
        return false
    }
}

console.log(profitableGamble(0.2, 50, 9))

// Char-to-ASCII
// Create a function that returns the ASCII value of the passed in character.

function ctoa(c) {
	return c.charCodeAt();
	
}

console.log(ctoa("A"));


// *****Volume of a Box
// Create a function that gets an object arguments with height, width and length of a box and returns the volume of the box.


function volumeOfBox(sizes) {
    return sizes.height * sizes.width * sizes.length;
}   


console.log(volumeOfBox({ width: 2, length: 5, height: 1 }))

// Slice of Pie
//Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

// Total number of slices.
// Number of recipients.
// How many slices each person gets.



function equalSlices(total, people, each) {
	if(people * each < total){
		return true
	}else {
		return false
	}
	
	
}
console.log(equalSlices(11, 5, 3))

// check if array includes defined element


function check(arr, el) {
	return arr.toString().includes(el)
}
console.log(check([1, 2, 3, 4, 5], 3))


// Find the Index
// Create a function that takes an array and a string as arguments and return the index of the string.

function find_index(arr, str) {
	return arr.indexOf(str)
}

console.log(find_index(["Red", "blue", "Blue", "Green"], "blue"))


// Is the Number Less than or Equal to Zero?
//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrEqualToZero(num) {
	if(num <= 0){
		return true
	}else{
		return false
	}
}

console.log(lessThanOrEqualToZero(5))

// Is the Number Even or Odd?
// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

function isEvenOrOdd(num) {
	if(num % 2 === 0){
		return 'even'
	}else{
		return 'odd'
	}
}

console.log(isEvenOrOdd(3))


// Return the Total Number of Parameters

function numberArgs(/* fill-in */) { // to print the length of atguments we have to use 'arguments.length'
	return arguments.length
}
console.log(numberArgs("a", "b", "c")) // 3

// Truthy or Falsy?
// In JavaScript, a truthy value is a value that translates to true when evaluated in a Boolean context. All values are truthy unless they're defined as falsy.

// All falsy values are as follows:

// false
// null
// undefined
// 0
// NaN
// ""
//**** */ Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsy.


function isTruthy(input) {
        return input ? 1 : 0
    }
   
console.log(isTruthy(0))


// Stack the Boxes
//Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on...
// Write a function that takes a number n and returns the number of stacked boxes.



function stackBoxes(n) {
	return Math.pow(n,2)
}

console.log(stackBoxes(4))


// Return the First and Last Elements in an Array
//Create a function that takes an array of numbers and return the first and last elements as a new array.

function firstLast(arr) {
	return [arr.shift(),arr.pop()]
}

console.log(firstLast([5, 10, 15, 20, 25]))

// To the Power of 
// Create a function that takes a base number and an exponent number and returns the calculation.

function calculateExponent(num, exp) {
	return Math.pow(num,exp)
	
}

console.log(calculateExponent(10, 10))

// add specified letters to ending

function addEnding(arr, ending) {
    
	return arr.map(word => `${word}${ending}`)
    
}
console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"))

// Check if Number is within a Given Range


function isInRange(num, range) {
    return num >= range.min && num <= range.max
}
console.log(isInRange(4, { min: 6, max: 10 }))

//Create a function that takes a number as an argument and returns the amount of digits it has.


function findDigitAmount(num) {

    return num.toString().length;
	
}

console.log(findDigitAmount(123))


const scores = [10,5,0,40,60,10,20,70]
const firstHigh= scores.find((score)=>{
    return score > 50
})
console.log(firstHigh);


let filterEvens= [1,2,3,11,12,13];
const filtered = filterEvens.filter((number)=>{
    return number % 2 === 0;

})
console.log(filtered);


let friends = [{
    name: 'Maria',
    films: ['Avengers: Infinity War', 'Avatar' ],
    age: 22
  }, {
    name: 'John',
    films: ['Forest Gump', 'Pulp Fiction', 'Spider-Man'],
    age: 29
  }, {
    name: 'Jean',
    films: ['Deadpool', 'Incredibles 2'],
    age: 20
  }];

  const favMovies = friends.map((movie)=>{
      return movie.films
  })

  console.log(favMovies);
  