// This is a comment 
console.log("Hello from the JS file")

/* 
this
is a 
multiline
comment
*/

/** Javascript Docs with the ** 
 * 
 */

x = 10;

// JS is Interpreted Language read line by line
console.log(x + 10);
console.log(x - 10);
console.log(x % 7);

var pie; // declaring a variable in JS which the deault when just declaring is undefined
let pie1 = "apple";

console.log(pie)
console.log(pie1)
const pie2 = 'cherry';

console.log(pie2)

// primitives
number = 20.75 // because technically under the hood numer floating point number
string = "Charles"
nothing = null;
defaultNothing = undefined;
booleans = true;
notANumber = NaN; // not a number, means that it's somethign that is nto a valid number but the datatype is...number

console.log(pie * 3.14)
console.log(number, string, nothing, defaultNothing, booleans, notANumber)

// operators
x += 2
console.log(x)

x *= 2;
console.log(x)

x -= 2;
console.log(x)

x /= 2;
console.log(x)

x %= 2;
console.log(x)

// Type Coercion - Loosely Typed Language


console.log(true + 3 * 2 + "10" + 45.45) //NaN, 61045.45, 60.45, actual: 71045.45
console.log(true + 3 * 2 - "10" + 45.45) //NaN, 61045.45, 60.45, actual: 42.45
console.log('b' + 'a'+ +"a"+"a") // baNaNa
console.log('b' + 'a' + NaN +"a") // baNaNa
console.log(('b' + 'a' + NaN +"a").toLowerCase()) // baNaNa

let y = 10;
let namef = 'Sanchit'
let isBoss = true;


// == type coercion is a factor
if(y == 10){
    console.log('IF y 10')
}

if(y == "10"){
    console.log('IF y "10"')
}

// === this keeps type saftey, you must match both in value & datatype
if(y === '10'){
    console.log('If y === "10"')
}

// truthy-falsey
// false, undefined, null, 0, ''
if(!''){
    console.log("hello")
} else {
    console.log('see its falsey')
}
if(0){
    console.log("hello")
} else {
    console.log('see its falsey')
}
if(null){
    console.log("hello")
} else {
    console.log('see its falsey')
}
if(undefined){
    console.log("hello")
} else {
    console.log('see its falsey')
}