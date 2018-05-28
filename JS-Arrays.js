// ------ Arrays ------
/* 
	- data structure 
	- list of everything
	- you can mix different object types in one array
	- data in arrays are called elements
	- first index = 0 */

// creating an array literal:
var array = [];
// create array with data at initialization time:
var fruits = ["Banana", "Apple", "Mango"];
var apple = fruits[1];
var lengthOfFruits = fruits.length; // = 3

// add elements at the end:
fruits.push("Strawberry");
// add element at the beginning:
fruits.unshift("Me");
// add element at specific position:
fruits[6] = "Blueberry"; // --> fruite = ["Me", Banana", "Apple", "Mango", undefined, "Blueberryea"]

// remove last item and returns it
fruits.pop();
// remove first item and returns it
fruits.shift();
// remove item and specific position, will replace it with undefined:
delete fruits[2];
// more likely: splice(indexToDelete, noOfItemsToBeDeleted) returns the deleted elements,
// be CAREFUL: changes the original array!!
fruits.splice(1, 2); // will delete the 2nd and 3rd element

// slice(indexToCopy, noOfItemsToCopy) returns a new array which contains the copied elements,
// you can ommit the parameters and it will return the whole array
fruits.slice(1, 2);

// sort items
fruits.sort();

// --------- FUNCTIONAL PROGRAMMING -------

// .FOREACH - Iterating through an array
// function: callback function, this method of iterating is to prefer due to readability
fruits.forEach(function(element, index) {
  console.log();
});
fruits.forEach(function(fruit) {
  console.log(fruit);
});

for (var index in fruits) {
  console.log(fruits[index]);
}
for (var fruit of fruits) {
  console.log(fruit);
}

// .MAP: applies the function to every element of the array and
// RETURN a new Array with the new elements which are returned from the function
// array.map(function(currentValue, index?, arr?), thisValue?)
// https://www.w3schools.com/jsref/jsref_map.asp
fruits.map(function(element, index, array) {
  // do things!
  return element.toString + index;
});

// .REDUCE
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// RETURN   the accumulated result from the last call of the callback function
// https://www.w3schools.com/jsref/jsref_reduce.asp

var numbers = [2, 4, 5, 78, 2, 3];

// add all numbers
numbers.reduce(function(accumulator, nr) {
  return accumulator + nr;
});

//  count even numbers
numbers.reduce(function(accumulator, nr) {
  if (nr % 2 === 0) accumulator++;
  console.log("reduce, accumulator: ", accumulator, ", number: " + nr);
  return accumulator;
}, 0);

// get the factorial of x!
function factorial(x) {
  return Array(x)
    .fill(0)
    .map(function(_, i) {
      return i + 1;
    })
    .reduce(function(acc, element) {
      return acc * element;
    }, 1);
}

// .FILTER
// array.filter(function(currentValue, index, arr), thisValue)
// RETURN 	An Array containing all the array elements that pass the test.
//          If no elements pass the test it returns an empty array.
// https://www.w3schools.com/jsref/jsref_filter.asp

var people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 }
];

var ofDrinkingAge = people.filter(function(person) {
  return person.age >= 21;
});

console.log(people.filter(person => person.age > 20).map(person => person.name));

// .SORT
// array.sort(compareFunction(val1, val2))
// RETURN : the original array in the new order!
// changes the original Array!
// https://www.w3schools.com/jsref/jsref_sort.asp

// MERGE SORT ALHORITHM - Spritti!
// http://www.wikiwand.com/en/Merge_sort

var places = [
  {
    title: "Awesome Suite",
    price: 230,
    type: "Private Room",
    pool: false,
    garage: false
  },
  {
    title: "Apartment 10' from la Rambla",
    price: 930,
    type: "Entire place",
    pool: true,
    garage: true
  }
];

places.sort((place1, place2) => {
  counter++;
  if (
    place1.price > place2.price ||
    (place1.price === place2.price && place1.title > place2.title)
  ) {
    return 1;
  }
  return -1;
});

// ----- Array.from() method:
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
console.log(Array.from("foo"));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

// v = value, i = index
console.log(
  Array.from({ length: 3 }, function(_, i) {
    return 2 ** (i + 1);
  })
);

console.log(Array.from({ length: 5 }, (_, i) => 2 ** (i + 1)));

// expected output:  Array [2, 4, 8, 16, 32]
console.log(
  Array.from({ length: 5 }, function(v, i) {
    return i;
  })
);

// ------ HIGHER ORDER FUNCTIONS -------
/* Higher Order Functions are functions that manipulate other functions, 
	e.g. they can take other functions as arguments and produce a function as 
	return value 
	Functions are variables! Therefore you can have them as parameters. function is the variabel type
	*/

function callAnotherFunctionTwice(callback, param1) {
  callback(param1);
  callback(param1);
}

function displayCity(city) {
  console.log(city);
}

// you can just use the name of the function to add is as a vaiable, thats because functions are variables!!
// you dont have to store it in another variable
callAnotherFunctionTwice(displayCity);
//  you can as well call it with an anonymous function you declare directly!
callAnotherFunctionTwice(function(city) {
  console.log(city);
}, "Berlin");

var getDouble = function(x) {
  return x * 2;
};

var addTwo = function(x) {
  return x + 2;
};

var map = function(func, list) {
  var output = [];
  for (i = 0; i < list.length; i++) {
    output.push(func(list[i]));
  }
  return output;
};

var list = [0, 2, 3, 5];
map(getDouble, list); // output: [0, 4, 6, 10]
map(addTwo, list); // output: [2, 4, 5, 7]
map(getQuadrant, list); // output; [0, 4, 9, 25]

var buildProcessor = function(func) {
  var processFunc = function(list) {
    return map(func, list);
  };
  return processFunc;
};
// QUESTION, IS THIS THE SAME??
var buildProcessor2 = function(func) {
  return function(list) {
    return map(func, list);
  };
};

var processAddTwo = buildProcessor(addTwo);
var processGetDouble = buildProcessor(getDouble);

var buildMultiplier = function(x) {
  var multiplier = function(y) {
    return x * y;
  };
  return multiplier;
};
var doubleX = buildMultiplier(2);
var tripleX = buildMultiplier(3);

doubleX(3); // output: 6
tripleX(3); // output: 9

var negate = function(func) {
  return function(x) {
    return func(x) * -1;
  };
};

/* RECURSION: call a function from itself
   be careful not to create an infinite loop!! 
   there's a stack in which every iteration is stacked and executed one by one
   https://medium.freecodecamp.org/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9
  */
function factorial(number) {
  if (number === 0) return 1;
  return number * factorial(number - 1);
}
