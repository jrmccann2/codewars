// Description:
// It's your Birthday. Your colleagues buy you a cake. The numbers of candles on the cake is provided (x).
// Please note this is not reality, and your age can be anywhere up to 1000. Yes, you would look a mess.
// As a surprise, your colleagues have arranged for your friend to hide inside the cake and burst out.
// They pretend this is for your benefit, but likely it is just because they want to see you fall over covered in cake. Sounds fun!
// When your friend jumps out of the cake, he/she will knock some of the candles to the floor.
// If the number of candles that fall is higher than 70% of total candles (x), the carpet will catch fire.
// You will work out the number of candles that will fall from the provided string (y).
// You must add up the character ASCII code of each even indexed (assume a 0 based indexing) character in y,
// with the alphabetical position of each odd indexed character in y to give the string a total.

// example: 'abc' --> a=97, b=2, c=99 --> y total = 198.

// If the carpet catches fire, return 'Fire!', if not, return 'That was close!'.

// My solution:

function cake(x, y){
  let sumArr = []
  for(let i=0; i<y.length; i++){
    let val = y.charCodeAt(i)
    if(i % 2 === 0 || NaN){
      sumArr.push(val)
    } else {
      sumArr.push(val-96)
    }
  }
  let numerator = sumArr.reduce( (acc, cval) => acc+cval)
  if(numerator/x > 0.7){
    return 'Fire!'
  } else {
    return 'That was close!'
  }
}

// To start, I declare an empty array to hold my values (either alphabetical position or ASCII).
// Then I loop over the string that is passed in and if it exists in an even index (evaluated using modulus)
// I push the character code value into the array, if it is odd I subtract 96 from the value and push
// it onto the array. I use 96 becuase the values for the standard english alphabet start with 97
// so to get it's alphabetical position I do this. After completing the loop, I then use reduce to total the
// values from my sumArr and return a string depending on what percentage of x I have.

// A clever solution:

cake=(x,y)=>[...y].reduce((sum,c,i)=>sum+c.charCodeAt()-(i%2?97:0),0)<x*0.7?'That was close!':'Fire!'

// This solution uses the ES6 arrow function syntax and uses the spread operator to put the string into an array.
// Then calls the reduce method on the new array. The reduce method adds the ASCII character code minus 97
// if the index (i) is odd  or 0 if the index is even (i%2 evaluates to 0 if even which is a falsy value).
// The function then utilizes another ternary to return the correct string after evelauating if the value is less
// than 70% of x or not.

// See the full kata at https://www.codewars.com/kata/birthday-i-cake/train/javascript