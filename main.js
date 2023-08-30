var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
for (let i = 0; i < harryPotterTitles.length; i++) {
console.log("Harry Potter " + harryPotterTitles[i])
}
// End of Harry Potter

// Variables

let totalGrades = []
let gradeA = 0
let gradeF = 0
let grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

//Loop for Student Grade: Part 2 - Questions 1 & 2

for (let i = 0; i < grades.length; i++){
    if(grades[i] >= 0 && grades[i] <= 69){
        totalGrades.push('F')
        gradeF = gradeF + 1
        console.log("You got an F!")
      } else if (grades[i] >= 70 && grades[i] <= 76){
        totalGrades.push('D')
        console.log("You got a D!")
      } else if (grades[i] >= 77 && grades[i] <= 84){
        totalGrades.push('C')
        console.log("You got a C!")
      } else if (grades[i] >= 84 && grades[i] <= 92){
        totalGrades.push('B')
        console.log("You got a B!")
      } else if (grades[i] >= 93 && grades[i] <= 100){
        totalGrades.push('A')
        gradeA = gradeA + 1
        console.log("You got an A!")
      } else {
        console.log("Try again!")
      };

    }

// Final Logging

    console.log(totalGrades)
    console.log(gradeA)
    console.log(gradeF)


 // Student Grades: Part 2 - Question 3

// Calculate the average 

const findAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
return sum / arr.length;
};

let average = findAverage(grades).toFixed(2);

console.log(`The average in the class was ${average}%`)

// END OF STUDENT GRADES

// CHEERLEADERS

// catch all - declare open array
let cheer = [];

// for loop starts at 2, ends at 10 and counts up by 2
// .push moves value to stated array "cheer"
// % means "if i is even to"

for (let i = 2; i < 10; i += 2) {
  if ( i < 8 && i % 2 === 0) {
    cheer.push(i)
  } else if (i >= 8 && i % 2 === 0) {
    cheer.push( i, "Who do we appreciate?!")
  }
};

//join array intro a string
// The .join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.
console.log(cheer.join(" "));

// END OF CHEERLEADERS

// added "MOOOOO" after every 4th word using .splice() method
var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
sentenceArray.splice( 3, 0, "MOOOOO");
sentenceArray.splice( 7, 0, "MOOOOO");
sentenceArray.splice( 11, 0, "MOOOOO");

// catch all
let cowJoke = [];

// for loop calling to list array values by 1 starting at 0
for (let i = 0; i < sentenceArray.length; i++) {
   cowJoke.push(sentenceArray[i])
}

// logged to console using .join() method to form a sentence using strings in array
console.log(cowJoke.join(" "))

// END OF INTERUPTING COW - Hannah's Way

// Interuppting Cow - Using modulus operator 

var sentenceArrayTwo = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
// catch all
let interruptingCow = [];

// looks for remainders - if the i divided by 3 has a remainder of 0 - "Moo" will be pushed to interruptingCow array
for (let i = 0; i < sentenceArrayTwo.length; i++) {
  if (i % 3 === 0 && i !== 0) {
    interruptingCow.push('MOOOOO', sentenceArrayTwo[i])
  } else {
    interruptingCow.push(sentenceArrayTwo[i]);
  }
  }

  // join catch all into a string using .join()
  console.log(interruptingCow.join(" "));

// END OF INTERRUPTED COW PT 2 - MODULUS WAY

const beatles = {
  albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
  history: {
      formed: 1960,
      disbanded: 1970
  },
  members: [
      {
          name: "George Harrison",
          birth: 1943,
          death: 2001
      },
      {
          name: "Paul McCartney",
          birth: 1942,
          death: null
      },
      {
          name: "John Lennon",
          birth: 1940,
          death: 1980
      },
      {
          name: "Ringo Starr",
          birth: 1940,
          death: null
      }
  ]
}

// catch all
let beatlesBlurb = [];

// plugged object properties into string template, console.logged and pushed to beatlesBlurb array
let georgeHarrison = `${beatles.members[0].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[0].birth}. He contributed heavily to the ${beatles.albums[0]} Album.`
console.log(georgeHarrison)
beatlesBlurb.push(georgeHarrison)
let paulMcCartney =  `${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[1]} Album.`
console.log(paulMcCartney)
beatlesBlurb.push(paulMcCartney)
let johnLennon = `${beatles.members[2].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[2].birth}. He contributed heavily to the ${beatles.albums[2]} Album.`
console.log(johnLennon)
beatlesBlurb.push(johnLennon)
let ringoStarr = `${beatles.members[3].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[3].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`
console.log(ringoStarr)
beatlesBlurb.push(ringoStarr)

// joined beatlesBlurb strings using .join
console.log(beatlesBlurb.join(" "))