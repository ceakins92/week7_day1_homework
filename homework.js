/* Question #1
Write a function that takes a string (sentence) and an array of strings (in this example dog_names) and check if one of the list members (dog names) is in the string (sentence). Return an array of the dog names found in the array
*/
var dogNames = ["Max","Fido","Gizmo","Nala"]
let testString1 = "Hello, my dog is Max, and they have purple eyes!"
let testString2 = "My Dog is fast, her name is Tippi"
let testString3 = "Come here Fido and Gizmo come here"


const newString1 = testString1
  .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
  .replace(/\s{2,}/g, " ");
const arr = newString1.split(' ')
for(let dog of dogNames) {
    if(arr.includes(dog) == true) {console.log(dog)};
}


/* Question #2
Write a Function using map to convert an array of number from inches to feet
*/
const heightsInInches = [66, 64, 60, 52, 72, 80, 51]
const myArr = heightsInInches.map(getSomeFeet)
function getSomeFeet(num) {
    return num / 12;
}
console.log(myArr)


/* Question #3
Using the Ternary Operator and map create an array that adds is eating pizza to every name from the array tmnt that ends with o and add is being rude to any other name.
*/
const tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
const serveUp = tmnt.map(eatPizza)
function eatPizza(name) {
    return `${name} is eating pizza`
}
console.log(serveUp)


/* Question #4
Write an arrow function to find the max number in a list. Do not use the Math.max Function.
*/
let findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]

const topNumber = (findAMax.sort(function(a, b){return a-b})) 
    console.log(findAMax.pop())


/* Question #5
At the end of the third Iteration (the third time the loop has ran) of this for Loop define the state of all the variables used in the cell
   */ 

var bingo = "B-I-N-G-O"
var ognib = ""
for(let i=bingo.length-1; i>=0; i--){
    ognib+=(bingo[i])
    console.log(bingo) //bingo value is: B-I-N-G-O
    console.log(ognib) //ognib value is: O-G-
    console.log(i) // i value is: 6
        
    }


/* Question #7
Complete 3 Codewars problems.  Paste the links here:
https://www.codewars.com/users/ceakins92/completed

1. https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7/javascript
2. https://www.codewars.com/kata/50654ddff44f800200000004/javascript
3. https://www.codewars.com/kata/55a70521798b14d4750000a4/javascript
4. https://www.codewars.com/kata/56dec885c54a926dcd001095/javascript
5. https://www.codewars.com/kata/5467e4d82edf8bbf40000155/javascript

*/