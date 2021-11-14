//1. Create an array called ages values = 3, 9, 23, 64, 2, 8, 28, 93,
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
//1a. Subtract the first element from the value in the last element. 
//1b. Add a new age to your array to ensure its dynamic.
ages.push(100);
let firstAge = ages[0];
let lastAge = ages[ages.length-1];
console.log(lastAge - firstAge);
    
 //1c. Use a loop to iterate through and calculate the average age.
var total = 0
for ( i = 0; i < ages.length; i++){
    total += ages[i]
console.log(total/ages.length);
      }
//2. Create an array called List values: 'Sam','Tommy','Tim','Sally','Buck",'Bob'.
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var amountOfLetters = 0
for ( i = 0; i < names.length; i++){
    let eachName = names[i];
    amountOfLetters += eachName.length;
    averageNumberOfLetters = amountOfLetters/names.length;
} console.log(averageNumberOfLetters);


//2b. Use a loop to iterate through the array and concatenate all the names with spaces and commas.
var listOfNames = '';
for ( name of names ) {
    listOfNames += names;
} console.log(names)

//3. How do you access the last elements in any array?
let lastNameInArray = names[names.length -1];
//4. How do you acces the first element in an array?
let firstNameInArray = names[0];
//5. Create a new array called nameLengths, Loop to iterate overnames, add the length of each name to nameLengths.
let nameLengths = names.map(function(element){
    return element.length;
});
console.log(nameLengths)
        
//6. iterate over namelengths  and calculate the sum of all the elements in the array then print to console.
var total = 0
for( let i = 0; i < nameLengths.length; i++){
total += nameLengths[i];
} console.log(total)

//7. Write a function that has 2 parameters and returns concatenated to itself a number of times.

function wordConcatenated (word, number) {
let finalWord = ' ';
for (let i = 0; i < word; i++){
    finalWord += number;  
}
    return finalWord
}
console.log(wordConcatenated(3, 'Hello'))

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name seperated by a space.
function fullName (firstName, lastName){
    return firstName + ' ' + lastName;
}
console.log(fullName('Clark', 'Kent'))

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.



//10. Write a function that takes an array of numbers and returns the average of all the elements in an array.


//11.


//12. Write a function willBuyDrink, takes a boolean isHotOutside, and moneyInPocket greater than 10.50.

function willBuyDrink (boolean, number) {
    return (boolean == true ) && (number > 10.50);
}
isHotOutside = true
moneyInPocket= 11.00
console.log(willBuyDrink(isHotOutside, moneyInPocket));

//13. I created this function to check the result of a problem. I wrote it to test my coding skills.
function add(a , b){
    var result = a * b;
    return result;
}
var value = add (20, 5);
console.log(value)