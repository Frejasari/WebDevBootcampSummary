//  in Chrome:

//   open the console: alt + cmd + j
//   clean console: ctrl + l

document.body; // -> shows the body of the html
document.getElementById("id"); // -> shows the DOM element in HTML

var myDomElement = document.getElementById("id");
var myDomElements = document.getElementsByClass("class"); // returns a HTML Collection OBJECT -- NO ARRAY!!
var myDomElements2 = document.getElementsByTagName("tag name");
myDomElement.innerHTML; // => returns the HTML of my element
myDomElement.innerHTML; // => "<em>Hello World!</em> => sets the HTML of the element

myDomElement.style.color = "chartreuse"; // => sets the assigned value, as a style
// directly inside the HTML! This is more important than the one in the CSS
//       <h3 id='id style ="color: chartreuse">
// myDomElement.style.paddingLeft = "200px"

myDomElement.className; // => returns the classes of the element
myDomElement.className = "green"; // => sets the class to green

// we can declare Functions and use them with our DOM elements

setInterval(function() {}, seconds); // => calls the function every seconds seconds
clearInterval(theNrOfTheSetIntervalMethod); // => stops the interval

document.querySelector("h3"); // => returns the first elements that matches with the selectors
document.querySelectorsAll("selector"); // => returns an array that contains all matches

myDomElement.offsetTop; //=> returns the pixels to the top

// create new HTML Element and add it to the DOM
var child = document.createElement("li");
child.innerText = "HELLO NEW LIST";
myDomElement.children; // returns the children
myDomElement.appendChild(childHTML); // adds Child HTML Element to myDomElement
document.body.insertBefore(child, myDomElement); // adds child before myDomElement
