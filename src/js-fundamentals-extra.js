// SecondsInHours
//
// Create a function that takes a number of hours and returns the number of 
// seconds in those hours. 
//
// Remember to update the module.exports definition at the bottom of the file
// with a reference to your function.
//
// TODO: write code below
const secondsInHours = (hours) => (hours * 3600)


// MilesTravelled
//
// Create a function that takes a number representing speed in miles per hour,
// a duration in minutes, and returns the distance travelled in miles rounded
// *up* to the nearest whole mile. You can use the Math.ceil function to
// perform the rounding. You can assume only whole numbers will be provided
// to the function.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below
const milesTravelled = (speed, time) => Math.ceil(speed * (time/60))

// KilometersToMiles
//
// Create a function that takes a number of kilometers and converts it to miles. 
// For this task assume there are exactly 1.6 kilometers in a mile. The returned 
// mile distance should be rounded to the nearest mile. You can  use the Math.round
// function to do this.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below

const kilometersToMiles = (kilometers => Math.round(kilometers / 1.6))

// MakeSentence
//
// Create a function that takes a string and returns the same string with the 
// first letter capitalized and a full stop added on to the end. If the string 
// already ends with a full stop, question mark (?) or an exclamation mark(!) 
// then a full stop should not be added.
//
// You may need to the use `String.substring` method.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below
function makeSentence (string) {
  const capital = string.charAt(0).toUpperCase();
  if (string.charAt(string.length - 1) === '.' || string.charAt(string.length - 1) === '!' || string.charAt(string.length - 1) === '?') {
    return capital + string.substring(1)
  }  
   else return capital+string.substring(1)+'.'
}


 
// FileExtension
//
// Create a function that takes a filename as a string and returns the file extension
// - i.e. `image.png` should return `png`. If the file has no extension then an empty
// string should be returned. You may need to the use `String.substring` method and
// the `String.lastIndexOf` method.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below
function fileExtension(filename) {
  if (filename.indexOf('.') === -1) {
    return ''
  }
  return filename.substr(filename.lastIndexOf('.') + 1);
}


// Range
//
// Create a function that takes an array of numbers and returns the difference 
// between the highest and lowest numbers in the array. You can assume the array
// will always contain at least 1 number (it will never be empty)
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below
function array(nums) {
  return Math.max(...nums) - Math.min(...nums)
}


// CheckTransactions
//
// Create a function that checks if a list of banking transactions is valid for 
// a given account. 
//
// The function should accept 3 arguments. The first is an array containing a 
// list of transactions to apply to the account balance. Positive numbers are 
// deposits and negative numbers are withdrawals. The second argument is the 
// account starting balance and the third is the account overdraft. The function
// should return false if applying the list of transactions causes the account
// balance to go below the overdraft value at any point.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below
function transChecker(array, balance, overdraft){
  const sumFunction = (a ,b) => a + b
  let transactions = array.reduce(sumFunction)
  console.log(transactions)
  let availableBalance = balance + overdraft + transactions
  console.log(availableBalance)
  if (availableBalance < 0) {
    return false
  }
  return true
}


// FilmsInGenre
//
// Create a function that takes an array of film objects, a film genre, and returns
// an array of film names that match the supplied genre. Each film object contains a 
// `name` key that contains the film name and a 'genre' key that contains an array 
// of strings describing what genres the film belongs to. See the spec file for
// example data.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below

function filmsInGenre(filmObject, genre) {
  const filmArray = [];
  for (let i = 0; i < filmObject.length; i++) {
    if (filmObject[i].genres.includes(genre)) 
    filmArray.push(filmObject[i].name);
  }
  return filmArray;
}

// TODO: change undefined to be the name of the functions you defined
module.exports = {
  //SecondsInHours
  a: secondsInHours,

  //MilesTravelled,
  b: milesTravelled,  

  //KilometersToMiles,
  c: kilometersToMiles, 

  //MakeSentence
  d: makeSentence, 

  //FileExtension
  e: fileExtension,

  //Range
  f: array,

  //CheckTransactions
  g: transChecker,

  //FilmsInGenre
  h: filmsInGenre,
}
