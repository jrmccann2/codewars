// Description:
// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer arrays (or tuples) (i.e. [[3,0], [4,1], [0,6]]).
// Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array).
// Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Notes:
// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

// My Solution:

var number = function(busStops){
    let on = 0
    let off = 0
    for(let i=0; i<busStops.length; i++){
      let stop = busStops[i]
      on += stop[0]
      off += stop[1]
    }
    return on-off
  }

// My solution uses a function expression that takes in one parameter (busStops). It then creates some variables that are scoped within the function: on and off.
// The for loop then loops over the array and for each "stop" (tuple, subarray, integer pair) it increases the value for "on" and "off" by the first (index 0) and second (index 1) items in the tuple.
// To finish things off, I find the difference between "off" and "on" to determine the number of people left on the bus.

// Cool Solution:

const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// When approaching this problem I thought to use reduce but did not have enough practice with it to know how I could use it on an array of arrays.
// Here, an arrow function (one of my favorite features of ES6) is used which takes in the same parameter busStops. The reduce method is then called on busStops (our array of arrays).
// The reduce method is provided a callback, in this case an anonymous arrow function. This function is given two arguments: rem (representing the accumulator) and [on, off] which represents
// the current value that the reduce method is evaluating as it iterates over the array. As you see, we have an array as an argument. What this is doing is taking the current value, which
// happens to be an array with a length of 2, and pulling off the value at index 0 and assigning it the name of "on" and then pulling the value at index 1 and assigning it the name of "off".
// The reducer then adds "on" to the accumulator (rem) and subtracts "off". Reduce then returns the final value assigned to the accumulator which in this case is the number of people remaining
// on the bus. (Oh, and the 0 at the end is assigning an initial value to the accumulator).

// See the full kata at https://www.codewars.com/kata/number-of-people-in-the-bus