// Description:
// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
// The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array
// of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
// You always walk only a single block in a direction and you know it takes you one minute to traverse one city block.
// Create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point.
// Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
// It will never give you an empty array (that's not a walk, that's standing still!).

// My solution:

function isValidWalk(walk) {
    if(walk.length === 10){ // array must be 10 characters in length
      let n = walk.filter( letter => letter === 'n') 
      let s = walk.filter( letter => letter === 's')
      let e = walk.filter( letter => letter === 'e')
      let w = walk.filter( letter => letter === 'w')
      if( n.length === s.length && e.length === w.length){  // array must contain equal counts of n & s as well as e & w to return user to origin.
        return true
      }
      return false
    }
  }

// As you can see, my function takes in an array and first checks to make sure that the "10 minute" criteria is met.
// I then create 4 new arrays using the filter method, one for each possible letter.
// Finally, I check to make sure that the number of times the user is told to move north/south are equal as well as east/west.

// The given scenario does not ask that we control for errors such as not being given an array or receiving an array that contains characters
// other than 'n', 's', 'e', or 'w' and given that these values are not dependent on user input these checks are probably not needed but could be implemented.

// A solution I liked:

function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }

// This uses the switch/case pattern and adjusts variables for x-distance and y-distance from the point of origin expecting both to be 0 when the walk is complete.
// This means that the user has returned to the original location. I like the different approach to ensuring the origin is the endpoint.
// I also thought the switch was a more concise way to solve the problem as it loops over the array only once as opposed to 4 times with my .filter solution.

// Check out the original kata at https://www.codewars.com/kata/take-a-ten-minute-walk