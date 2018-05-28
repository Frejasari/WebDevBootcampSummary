// if you dont declare a variable its default value is undefined
// variable names are case sensitive
// all variables are dynamic, I can assign a string and later on change it to a number e.g.
// variable = expression (= is the assignment operator)

// ------- Variables -------
// variables are containers for values that can change
var x = 5;
var y = 6;
var result = x + y;
x = 7;
var result2 = x + y;
x = "Seven";
/* variable types:
	- Numbers
		- Float 
		- Integer
	- Boolean
	- Array: A collection of values 1,-7,"hi"
	- Objects: more complex object
	- null: contains no valid Number, String, Boolean or Object
		null is an assignment value. It can be assigned to a variable as a representation of no value
	- undefined: is obtained when you use an object property that 
		does not exist or a variable that has been declared but no value assigned to it
		undefined means a variable has been declared but has not yet been assigned a value
In JS you dont have to declare what type of data the variables are */

var thisIsAFloat = 8.6;
var thisIsThe2ndFloat = 8.6;
var iAmABoolean = true;
var thisIsAString = "8.6";

// ------ PRIMITIVES ------
/* undefined , null , boolean , string and number

Difference between Objects and primitive values: Objects are mutable, we can change them, 
whereas primitive values are immutable
Both are passed by value BUT 
--- the values of the variables of Objects are references!!! */

// ------ NUMBERS -------
/* JavaScript has only one type of numbers: 64-bit float point (same as java double)
	- there is no seperate integer type, means 1 === 1.0
	- Modulus x = y % 2
	- Increment / Decrement (a = 5)
		-  Value will be returned, BEFORE the operand is increased / decreased */
var a = 5;
var c = a++; // c = 5, a = 6
c = a--; // c = 5, a = 4
// Value will be returned AFTER the operand is increased / decreased
c = ++a; // c = 6, a = 6
c = --a; // c = 4, a = 4

// ------ Operatoren -------
/*  + addition // +=
		- subtraction // -=
		* multiplication // *=
		/ division // /=
		** exponent // **=
		% modulus: REST // %=
*/

// ------ EXPRESSIONS -----
/* An expression is any valid set of literals, variables, operators, and other expressions 
that evaluates to a single value. The value may be a number, a string, or a logical value. 
Conceptually, there are two types of expressions: those that assign a value to a variable, 
and those that simply have a value. */

// ------ STRINGS ------
// You can use single or double quotes
var doubleQuoutes = "Hi, I am a String";
var singleQuotes = "I am a String as well";
// Strings can contain UFT-8 characters
// Strings cannot divided, subtracted or multiplied
// Concatenation
var bigStr = "hi" + ", I am a String, " + "that is concatenated by 3 Strings";
// get the length of a String
var length = doubleQuoutes.length;
// You can get a special char of a string with its index:
var hallo = "hello";
hallo[0]; // --> h
hallo[10];
hallo[-1]; // ---> undefinded
var world = "world";
// finding characters/words:
var phrase = "Don't go home!";
hallo.indexOf("a"); // --> 1
phrase.indexOf("go"); // --> 6 Prints the first occurance!
hallo.indexOf("p"); // --> -1
// look up if a specific char exists, this method is case sensitive!!!
hallo.includes("o"); // --> true
hallo.includes("p"); // --> false
hallo.includes("a", 2); // --> false, starts at index 2
// convert to upper or lower case
hallo.toUpperCase(); // prefer this, because sz will convert to SS but not SS to sz
hallo.toLowerCase();

// substring Method
var hello = "hello you!";
var you = hello.substring(6);
var hello2 = hello.substring(0, 5); // will return hello

// .toString Method

/* primitives in JS have the toString Method implemented
 - if you concatenate a String with any Object it will automatically use the .toString method*/
var array = [0, 2, 7, 9];
console.log("This is an array: " + array); // the array will be printed as a String
console.log(array); // array will be printed as an array
console.log("array"); // array will be printed as a String
console.log(array.toString);
console.log("This is an array: ", array); // the array will be printed as an array

// comparision of strings: lowercase > uppercase

//  ------ BOOLEANS - Equality -------
var float1 = 8.6;
var float2 = 8.6;
var string1 = "8.6";

// this is true, the == operate forces the operands to the same type
float1 == string1;
// this is false, the === operator checks for type equality first
float1 === string1;
// this is true in both cases:
float1 === float2;
float1 == float2;

var o = {
  firstname: "bob"
};
var o2 = {
  firstname: "Alice",
  languages: ["DE", "FR"]
};
o2.languages && true; // this will evalueate o2.languages to true, because its used in a boolean context

// ------ TRUTHY AND FALSY ------
/*All values are truthy unless they are defined as falsy. 
	https://www.sitepoint.com/javascript-truthy-falsy/

The following values are always falsy:
		false
		0 (zero)
		'' or "" (empty string)
		null
		undefined
		NaN (e.g. the result of 1/0)

Everything else is truthy. That includes:
		'0' (a string containing a single zero)
		'false' (a string containing the text “false”)
		[] (an empty array)
		{} (an empty object)
		function(){} (an “empty” function)
*/

// F && R --> if F is falsy it will always return F
0 && 1; //--> 0
// T && R --> if T is truthy it will always return R
2 && 1; //--> 2
// F || R --> if F is falsy it will always return R
0 && 1; //--> 1
// T || R --> if T is truthy it will always return T
2 && 1; //--> 2

// ------ IF STATEMENT - Conditional Logic -------
/* A condition is a test for something
	- can be used to ensure the program works
	- can be used for branching: executing different parts (branches) of code, 
		depending on if the condition is met or not */
// IF / ELSE
var country = "germany";
var isCurrentLocation;
if (country === "germany") {
  // if condition is true, this code will be executed
  isCurrentLocation = true;
} else {
  // if condition is false, this code will be executed
  isCurrentLocation = false;
}
/* conditional tests:
	x > a, x >= a
	x < a, x <= a
	x !== a, x === a
	x != a, x == a
	x  */

// logical operators
var sports = 0;
var isHealthy = sports === 0 ? "NO" : "YES";
var grade = score === 1 ? 5 : score === 2 ? 4 : score === 3 || score === 4 ? 3 : 1;

// ------ Concatenate conditions -------
// && and, || or

// ------ SWITCH STATEMENT ------
switch (expression) {
  case value1:
    //Statements executed when the result of expression matches value1
    break;
  case value2:
    //Statements executed when the result of expression matches value2
    break;
  case valueN:
    //Statements executed when the result of expression matches valueN
    break;
  default:
    //Statements executed when none of the values match the value of the expression
    break;
  /* The break statement finishes a block execution such as conditional blocks or loop blocks
	and continues with the program */
}

// ------ OBJECTS -------
/* are created with key-value pairs : 
	- key: string that identifies a property of an object
	- value: content associated with the key
propertyName : propertyValue pairs
Objects contain propertyName : propertyValue pairs
	propertyNames are always Strings, if they arent they will get casted to a String
	multiple propertys are seperate with a comma */
// create an Object, literal:
{
  name: "Freja";
} // literal, recommended way
new Object(); // object-oriented
// objects can be stored in variables, multiple properties of an object are separated with comma!
var fruit = {
  name: "Banana",
  color: "yellow",
  weight: 0.6,
  owner: {
    name: "Alex",
    isHungry: true
  },
  isStillAlive() {
    return !owner.isHungry;
  }
};
var name = fruit.name; // stores the name of the fruit in variable name, recommended way
name = fruit["name"]; // normally dont use this way!
fruit.name = "Apple"; // change the property
fruit["name"] = "Apple";
fruit.size = 155; // creates a new property
fruit["size"] = 155;

delete fruit.owner;
delete fruit["owner"];

Object.keys(fruit); // returns all keys of the object in an array
Object.values(fruit); // returns all values of the object in an array

// iterate over the objects values:
for (fruitProperty in fruit) {
  console.log(fruit.fruitProperty + " is " + fruitProperty);
}

// check if key exists:
"name" in fruit; // returns true
"height" in fruit; // returns false

// delete key:
delete fruits.weight;

// .splice() methd

// DEEP COPYING AN OBJECT !!!
// Object.assign(target, originalObject)
var newObject = Object.assign({}, originalObject);

var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3); // { a: 1, b: 2, c: 3 }, target object (o1!!!) itself is changed.
// o1 = { a: 1, b: 1, c: 1 };
var obj2 = Object.assign({}.o1, o2, o3); // { a: 1, b: 2, c: 3 }, target object itself is changed,
//  The properties are overwritten by other objects that have the same properties later in the parameters order.

// ------- Loops -------
for (var i = 0; i < fruits.length; i++) {
  // do sth
}

// while loops: be careful that the condition is not always true (infinite looping)
var length = 0;
var message = "";
while (message.length < 100) {
  message += length;
}
// for loops
for (var i = 30; i > 0; i--) {
  if (i % 3) {
    continue;
  }
  // do things
}

for (i = 1; i <= 50; i++) {
  if ((i - 1) % 7) {
    continue;
  }
  console.log(i);
  if (i % 10 || i % 15) {
    console.log("Donkey!");
  }
  if (i % 2 && (i - 1) % 10) {
    console.log("Monkey!");
  }
}

// ------- Matrix -------
var matrix = [[0, 0, 0, 0], [0, "S", 0, 0], [0, "S", "S", 0], [0, "S", 0, 0]];

var fistRow = matrix[0];
var firstEntry = matrix[0][0];
//  if a row doesnt exist and you try to reach a column in it you will get an error!!!

var board = [
  ["A", "B", "C", "D"],
  ["E", "F", "G", "H"],
  ["I", "J", "K", "L"],
  ["M", "N", "O", "P"],
  ["Q", "R", "S", "T"]
];

// console.log(board[1][2]);

// go throug the matrix by row (from left->right and top->down)
for (var row = 0; row < board.length; row++) {
  var currentRow = board[row];
  for (var col = 0; col < currentRow.length; col++) {
    console.log(currentRow[col]);
  }
}

/* complexitiy of the 2 operations above:
  n^2 
  n=1000 -> 1sec
  n=10000 -> 100sec
*/

console.log("-------------");

/*  diagonal for a square:
  complexity of the operation: n -> linear! 
*/

for (var i = 0; i < board.length; i++) {
  console.log(board[i][i]);
}

console.log("-------------");

// go through the matrix by col (top->down , left->right)
for (var col = 0; col < board[0].length; col++) {
  for (var row = 0; row < board.length; row++) {
    var currentItem = board[row][col];
    if (currentItem !== undefined) {
      console.log(currentItem);
    }
  }
}

/* ----- COMPLEXITIY OF AN OPERATION ----- 
	log(n) < n < n^2 < exp(n)

	accessing an element in an array is really fast!
*/

// ------ LOCAL AND GLOBAL VARIABLES ------
/* local variables that are defined within a function are only accessable in the scope 
of the function, 
arguments are treated as local variables
global variables are declared outside of a function and can be accessed from everywhere,
dont't use global variables 
JS will always look up for local variables first */

// ------- FUNCTIONS -------
/* Functions are used for abstraction and to reuse code
functions take input arguments and return an output value, can be referenced 
before it has been defined
functions can return values, the return keyword will end the function immediately
Named function: */
function functionName(arg1, arg2) {
  // Do Sth.
  return "returnValue"; // return value is a String in this case, but could be anything!!
}
// you can call the function with a not matching number of arguments (parameters)
functionName(1); // this will set arg2 = undefined
functionName(2, 3, 6); // this will omitt the 3rd parameter
//  you can add default values for the arguments, but you cannot directly access the arg2 if you do not declare arg1!
function functionName1(arg1 = 2, arg2 = 7) {
  // Do Sth.
}
function getQuadrant(x) {
  return x * x;
}
/* anonymus function as value of a variable
functions can be stored in values and given to other functions, can not be 
referenced before it has been defined*/
var functionName2 = function(arg1, arg2) {
  // do sth.
};
var getQuadrant = function(x) {
  return x * x;
};

// ---- JAVASCRIPT FUNCTIONS -----

// setTimeout will execute the function (1st param) after the defined time (2nd param) in ms!
setTimeout(function() {
  console.log("I will be displayed after 10 seconds");
}, 100000);

// FOR...IN and FOR...OF

// for...in iteration - the order is not consistent! Use for-loop if the order of access is important!
// works for ENUMERABLE properties of an object, can also be used for iterating through an objects properties,
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
for (var index in fruits) {
  console.log(fruits[index]);
}
// for...of interation - you cannot rely on the order of access!
// works for ITERABLE properties like String, Array, Set, Map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
for (var fruit of fruits) {
  console.log(fruit);
}

var object1 = { a: 1, b: 2, c: 3 };
console.log("------OBJECT-IN-------");
// output abc
for (var prop in object1) {
  console.log(prop);
}
console.log("------OBJECT-OF-------");

// does not work, because object1 is NOT ITERABLE
for (var prop of object1) {
  console.log(prop);
}

var array = [1, 6, 8, 4, 5];

console.log("-------ARRAY-IN------");
// output: "123"
for (var item in array) {
  console.log(item);
}
console.log("-------ARRAY-OF------");
// output 16845
for (var item of array) {
  console.log(item);
}

// ----------------------

// ----- MATH FUNCTIONS ------
Math.pow(arg1, arg2); //  = arg1^arg2
Math.random(); // gives a random number between 0 and 1
Math.floor(); // returns the largest integer less than or equal to a given number.

// ---- create a deep copy -----
// https://www.codementor.io/avijitgupta/deep-copying-in-js-7x6q8vh5d

// OBJECT ORIENTED

// QUESTION: Does JS support to override a function for a specific class / object?
//        => yes, just create a function with the same name!
// QUESTION: Does JS support OVERLOADING?
//        =>
// QUESTION: Is there a 'super' keyword?
//        =>

//  create a new Constructor 'Class'
//  https://www.w3schools.com/js/js_object_constructors.asp
function Person(name) {
  this.name = name;
  this.sayMyName = function() {
    console.log("My Name is " + this.name);
  };
}

var dieter = new Person("Dieter");
var max = new Person("Max");

//  you can still add some properties to just one Object!
dieter.lastName = "Meyer";

console.log(dieter); // => Person { name: 'Dieter', sayMyName: [Function], lastName: 'Meyer' }

// PROTOTYPAL INHERITANCE
// instead of defining the function in every constructor you can do use:
// ---- Class.prototype.whateverFunctionOrParameter = ....

function Animal(name, owner) {
  this.name = name;
  this.owner = owner;
  this.showOwnerName = function() {
    console.log("its me!!");
  };
}

Animal.prototype.showOwnerName = function() {
  return "My owner is " + this.owner;
};

var myAnimal = new Animal("Arya", "Josephine");
var yourAnimal = new Animal("Max", "Owen");

Animal.prototype.owner = "TEST";

myAnimal.showOwnerName(); // => 'it's me!' overrides : 'My owner is Josephine'
myAnimal.__proto__.showOwnerName(); // => 'My owner is TEST'

/// --- Class.call(this, properties): create class that inherit from Class ---- ///
function Animal2(name, owner, sound) {
  this.name = name;
  this.owner = owner;
  this.sound = sound;
}

Animal2.prototype.showOwner = function() {
  console.log("My Owner is " + this.owner);
};

function Dog(name, owner) {
  Animal2.call(this, name, owner, "Guau Guau");
  this.humanRelation = "love";
}

function Duck(name) {
  Animal2.call(this, name, "no owner", "Kwak!");
  this.taste = 0;
}

Dog.prototype = Object.create(Animal2.prototype);
// Only Dog has Access to the showOnwer Method of the prototype Object of Animal,
// it will also get the showName function which was defined afterwards!
// You need to set Class.prototype = Class.create(Parent.prototype)

Animal2.prototype.showName = function() {
  console.log("My Name is " + this.name);
};

var myAnimal2 = new Animal2("Arya", "Josephine");
var myDog = new Dog("Max", "Owen");
var duck = new Duck("Daffy");
