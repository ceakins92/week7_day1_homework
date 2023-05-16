console.log('Hello World')

// This is how a comment is done

/* 
 Multi-line 
 comments
*/

// var, let, const are declaring keywords
// declare

var firstName
console.log(firstName)

firstName = 'dylan' //Bad practice
console.log(firstName)

var firstName = 'sean'
console.log(firstName)

var lastName = 'curry'
console.log(lastName)

console.log(firstName); console.log(lastName)


var string1 = 'This is a string'
var string2 = "This is a string also"
var string3 = 'This is Sean\'s string'

// Concat strings

let joinedString = string1 + ' that is really long!'
let fullName = firstName + ' ' + lastName
console.log(fullName)
console.log(joinedString)

// Indexing

fullName[0]
console.log(fullName[0])
// Can't use negative indexes, but doesn't break
console.log(fullName[-1])

// String Methods
console.log(fullName.toUpperCase())
console.log('I\'M NOT YELLING'.toLowerCase())
console.log(fullName[0].toUpperCase() + fullName.substring(1,11))

// Length Property
console.log(fullName.length)

// String slicing similar to [::]
// .slice(<startIndex>, <endIndex>, <optionalElementsToAdd>)
var myName = 'dylan smith'
console.log(myName.slice(0,5)) // String remains because immutable

var compoundString = 'welcometojavascript'
console.log(compoundString.slice(7, 9))

// Replacing a substring
var marriedName = myName.replace('smith','sanchez')
console.log(myName)

// Template Literal aka formatted string
var congratsString = `Congrats on the marriage ${marriedName}`
console.log(congratsString)
console.log(`Dear Whoever
    Greetings ${marriedName}!
    How are you?
    `)

var multiVars = `Your instructors are ${fullName} and ${myName}`
console.log(multiVars)

// create 3 vars each being info about your best friend

var infoA = `likes beer`
var infoB = `Ben Hogan`
var infoC = `but not in the car`
console.log(`${infoB} ${infoA}, ${infoC}!`)

// Types
console.log(typeof infoA)
// array is an object
console.log(typeof [])

// Math Ops =======================================================
console.log(5+5)
console.log(10-5)
console.log(10*10)
console.log(12/6)
console.log(10**2)
console.log(11%2)
// Floor Division us Math Library
console.log(Math.floor(11/2), 'math floor')

var num = 10
console.log(num*=2)
var num2 = 100
num2 = num2 / 25
console.log(num2)

// Incrementing by one
num+=1
console.log(num)
num++
console.log(num)
++num
console.log(num)
console.log(num++, 'adds after print')
console.log(++num, 'adds before print')

// Decrement


// Type Conversion ===============================================
// str -> number

var strNum = '123'
var numberNum = parseInt(strNum)
console.log(numberNum, typeof numberNum)

var decimalStr = '12.5'
// Does not keep decimal
console.log(parseInt(decimalStr))
// To keep decimal digits
console.log(parseFloat(decimalStr))

// number -> string
var myNum = 100
var numbers = myNum.toString()
console.log(numbers, typeof numbers)

console.log('3.14' + 4) // Doesn't work
console.log(parseFloat('3.14') + 4) //Works

// Boolean
var bool1 = true
var bool2 = false
console.log(typeof bool1)

// Comparisons
console.log(2>1)
console.log(1<2)
console.log(2<1)
console.log(1 == '1') //ignores type
console.log(1 === '1') //value AND data type

// Negating booleans "is not"
console.log(1 !== 2)
console.log(!10 > 11)
console.log(!true)

console.log(Boolean(''))
console.log(Boolean(12))
console.log(Boolean(0))
console.log(Boolean([])) // Will return true even if empty
console.log(Boolean({})) // Will return true even if empty

// Chaining conditions ============================================
// || = python 'or'
console.log('===============', 'testing or')
console.log(true || false)
console.log(false || true)
console.log(false || false)
console.log(true || true)
// and = &&
console.log(true && false)
console.log(false && true)
console.log(false && false)
console.log(true && true)

// short circuit ==================================================
function one() {
    console.log('one ran')
    return true
}
function two() {
    console.log('two ran')
    return false
}
function three() {
    console.log('three ran')
    return true
}
one() && two() && three()
one() || two() || three()
false || two() || false || three() || one()

// null vs undefined
var noValue
console.log(noValue) //undefined

var myNull = null
console.log(typeof myNull)

// let and const ==================================================

// let is a modifiable variable
// const is not modifiable
let myLet = 'let'
// let myLet = 'test' //Doesn't work
myLet = 'update' //Works 

const myConst = 'const'
// const myConst = 'break' //Doesn't work
// myConst += 'test' //Doesn't work
console.log(myConst)

if (true) {
    let blockVariable = 'test var'
    console.log(blockVariable)
}

// console.log(blockVariable) // Not usable outside block above with let or const
// Using var allows access outside block, global
if (true) {
    var blockVariable = 'test var'
    console.log(blockVariable)
}
console.log(blockVariable)

// Arrays ========================================================
// empty array
let myArray = []

// array with elements
const filledArray = [1,2,3,'a','b','c']
console.log(filledArray[3])
console.log(filledArray[0])
// undefined if outsied array
console.log(filledArray[100])
// add to end of array .push()
myArray.push('sean')
// return length
console.log(myArray,myArray.length)
console.log(myArray.push('dylan'))
// add multiple elements at once
console.log(myArray.push('gian','todd','john','alec'))
console.log(myArray)

// .pop method
let myPop = myArray.pop()
console.log(myPop, myArray)

// Destructuring
console.log(myArray)
const [instructorOne, instructorTwo, studentOne, studentTwo, studentThree] = myArray
console.log(myArray)
console.log(instructorOne,instructorTwo, studentThree)

// Rest operator ...
const [teacherOne, teacherTwo, ...students] = myArray
console.log(teacherOne, students)

const [newOne, newTwo, , newFour, ...fiveAndSeven] = [1,2,3,4,5,7]
console.log(newOne, newFour, fiveAndSeven)

console.log(...students)

// Add to beginning .unshift
students.unshift('khoa')
// Add multiple
students.unshift('Christopher','David')
console.log(students)

// Remove from beginning .shift
students.shift()
console.log(students)

// Show postion of item (shows -1 if not present)
console.log(students.indexOf('todd'))

// map, filter, reduce ===========================================
// array.method(<function>)

// Map
console.log(students.map((student) =>  student.toUpperCase() ))
// ^ same as next line
console.log(students.map((student) => {
    return student.toUpperCase()
} ))

// Filter
console.log(students.filter((student)=> student.length === 4 ))

// Reduce..............Call....12.,.3......add them....repeat
console.log([12,3,4,5].reduce((acc,num) => acc+num ))

// Tostring
console.log(students.toString())

// Join
console.log(students.join(', '))

// Slicing
console.log(students.slice(1,4))

// Splice .splice(<startingIndex>, num of elements to remove, optional element to add)
students.splice(2,2,'Karina')
console.log(students)

console.log(students.splice(0,1))
console.log(students)

const favFoods = ['sushi','pizza','tacos']
console.log(favFoods.unshift('lobster'))
console.log(favFoods.push('pizza'))
console.log(favFoods)


// Functions ================================================
// Traditional func syntax:
// const nameOfFunc() {}
//
// ES6 arrow func syntax:
// const nameOfFunc = () => {}

function addNums(num1,num2) {
    console.log(num1,num2)
    return num1+num2
}

addNums(10,15) // or next line to print
console.log(addNums(10,15))

//====================================

const arrowAddNums = (num1,num2) => {
    return num1 + num2
}
console.log(arrowAddNums(10,10))


// Single operation arrow func can ommit parinth and 'return'
const greeting = name => `Hello ${name}`
console.log('greetings', ('sean'))


function addMultipleNums(num1,num2,num3) {
    num1 + num2 + num3
}
const randomNums = [10,4,5]
console.log(addMultipleNums(12,1,5))
console.log(addMultipleNums(...randomNums))

function addManyNumbers2(...numbers) {
    numbers.reduce((acc,num) => acc + num)
}
console.log(addManyNumbers2(10,4,9,10,10,14))
console.log(addManyNumbers2(...randomNums))

// Conditionals ==============================================
// if () {} syntax
// if () {}else{} syntax
// if () {}else if{} else syntax

if (10 > 11){
    console.log('10 > 11')
} else if (100 ==="100") {
    console.log('same data types')
} else {
    console.log('Running else action')
}

// For Loops==================================================
// Traditional syntax:
// for(index; condition; incrementer){}

for( let i=0; i < 10; i++ ){
    console.log(`i = ${i}`)
}

for(let i = 0; i<students.length;i++) {
    console.log(students[i])
}

for(let student of students) {
    console.log(student)
}