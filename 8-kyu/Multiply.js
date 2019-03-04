// This was the kata given as my initiation challenge.

// Description: The code does not execute properly. Try to figure our why.

// Code:

function multiply(a, b){
  a*b
}

// My Solution:

function multiply(a, b){
  return a*b
}

// It might seem silly to include this problem in this repo but I chose to include it
// because it illustrates the importance of correct syntax. The originally provided function
// works perfectly if we want to pass in two arguments and multiply them together.
// However, in 99.999999% of cases we would want to get the resulting value back which
// requires the return keyword. When I was first learning Javascript I struggled
// to understand the idea that I had to explicitly tell the computer what I wanted to
// get back and lost plenty of hours slamming my head against a wall just to realize
// I had left the return keyword out and that is why my code wasn't working. Remember,
// computers are dumb, always make sure you tell them exactly what you want them to do.