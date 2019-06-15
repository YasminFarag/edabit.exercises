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



