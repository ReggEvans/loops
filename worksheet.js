/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

var sumOfArray = function(array) {
	var total = 0
	for (var i = 0; i < array.length; i++) {
		total = total + array[i]
	}
	return total
 }

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and returns the highest number in the array.

var maxOfArray = function(array) {
	var max = 0
	if (array.length === 0) {
		return null
	}
	for (var i = 0; i < array.length; i++) {
		if (array[i] > max) {
			max = array[i]
		}
	}
    return max
}

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * as input and returns true if it is a vowel, false otherwise.
 */

var isVowel = function(str) {
	var vowelArr = ['a', 'A', 'e', 'E', 'i','I', 'o', 'O', 'u', 'U']
	for (var i = 0; i < vowelArr.length; i++) {
		if (vowelArr[i] === str)
			return true
	} 
	return false
}


/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

var reverse = function(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newStr = newStr + str[i];
    }
    return newStr;
}


/**
 * Part 4
 *
 * write a function the returns a fizzbuzz string for an input number. 
 A fizzbuzz string is defined as the following:
 For every number from 1 to the input number...
 * - if that number isn't a multiple of 3 or 5, add a period "." to the fizzbuzz string
 * - for every number that is a multiple of 3 (but not 5), add "fizz" to the fizzbuzz string
 * - for every number that is a multiple of 5 (but not 3), add "buzz" to the fizzbuzz string
 * - for every number that is a multiple of 3 and 5, add "fizzbuzz" to the fizzbuzz string
 For example, the fizzbuzz string for the number 3 is "..fizz"
 For the number 15, the fizzbuzz string is "..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz"
 */

var fizzbuzz = function(num) {
    var newString = ""
    for (var i = 1; i <= num; i++) {
        if (i % 3 !== 0 && i % 5 !== 0) {
            newString += "."
        }
        if (i % 3 === 0 && i % 5 !== 0) {
            newString += "fizz"
        }
        if (i % 3 !== 0 && i % 5 === 0) {
            newString += "buzz"
        }
        if (i % 3 === 0 && i % 5 === 0) {
            newString += "fizzbuzz"
        }
    }
    return newString
}


/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

var findLongestWord = function(str) {
 	var newArray = str.split(' ')
 	var longestWord = ''
 	for (var i = 0; i < newArray.length; i++) {
 		if (newArray[i].length > longestWord.length) {
			longestWord = newArray[i]
		}
 	}
 	return longestWord
 }


/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

var GCD = function(num1, num2) {
    for (var i = num1; i > 0; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            return i
        }
    }
    return 1
}

log(GCD(20, 100))


