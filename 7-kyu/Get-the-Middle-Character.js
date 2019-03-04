// Description:

// You are going to be given a word. Your job is to return the middle character of the word as a string.
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// Input:

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the
// test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// My Solution:

function getMiddle(s){
  let arr = s.split('')
  console.log(arr)
  console.log(arr.length)
  if(arr.length%2===0){
    let shifts = ((arr.length/2) - 1)
    let pops = arr.length-shifts
    console.log(pops)
    return arr.slice(shifts, pops).join('')
  } else {
    let shifts = (Math.floor(arr.length/2))
    let pops = arr.length-shifts
    return arr.slice(shifts, pops).join('')
  }
}

// This was one of my first ever katas on CodeWars. At the time I had no idea that I could treat a string in many of the same ways you can 
// treat an array. Here I split the string at each character, creating an array of many inidividual characters. I then test if the length 
// is odd or even. If it is even, I divide the length by two and subtract 1 to get the index at which to start my .slice and then I
// subtract that number from the length to get the index at which to end my .slice. I then join the characters back together and return.
// My methodology for the case of an odd length is similar but the start index is determined by length/2 rounded down.

// See the full kata at https://www.codewars.com/kata/get-the-middle-character/train/javascript