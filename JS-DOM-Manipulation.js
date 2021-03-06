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

////////// jQuery /////////
// shortcut: $

// include following script, and put it before your own JS File !
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" />;
// ALWAYS PUT YOU DOM-MANIPULATING CODE INSIDE THE .READY METHOD:
// The .ready() method offers a way to run JavaScript code as soon as the page’s Document Object Model
// (DOM) becomes safe to manipulate.
$(document).ready(function() {
  alert("DOM is Loaded");
});
// or with shortcut:
$(function() {
  alert("DOM is Loaded");
});

// ----- select element by jQuery: $('css-selector') ----
$(".class");
$("#id");
$("ls");
// Child selector: Select all the paragraphs inside the body
$("body > p");

// Descendant selector: Select all the .selected-item elements from the .main-nav
$(".main-nav .selected-item");

// Next Adjacent selector: Select all the label inside a form
$("form + label");

// CANNOT select a jQuery element with, this will get you the normal HTML DOM Element,
// you cannot call any jQuery functions on it!
$("li")[0];
$($("li")[0]); // this will create a jQuery DOM Element again!

// ------- FILTER ------
$("body p:first");

$("nav ul li:last");

$("#main-menu li:even");

$("p:not(.ironhack)");

$("li:contains(2)"); // select li items that contain '2'

$("form *:hidden"); // Select all the hidden elements in a <form>

$("ul#menu li:visible"); // Select all the visible elements from a <ul> menu

$(".selector:parent"); // all elements that have at least one child node (either an element or text)

$("#menu:first-child"); // Select the first element of a menu

$("#menu:last-child"); // Select the last element of a menu

$("#list:nth-child(odd)"); // Select all the odd elements from a list

// ------- change css styles via jQuery: $('css-selector').('property', 'value')
$("li")
  .css("color", "blue")
  .css("font-size", "20px");
// get just the value of a property: $('css-selector').css('property')
$("li").css("color"); // returns: "rgb(255, 0, 0)"

// ------- jQuery EVENTS --------
// the item which triggered the action: $(this)

$("li").click(function() {
  console.log("You've clicked on a li");
});

$("li").on("click", function() {
  console.log("You've clicked on a li");
});

// for hover there are two events that belong to them: mouseenter and mouseleave
// .hover is a shortcut for that!

$(".selector").hover(function() {
  // stuff to do on mouse enter and mouse leave!
});

$(".selector").hover(
  function() {
    //stuff to do on mouse enter
  },
  function() {
    //stuff to do on mouse leave
  }
);

$(document).on(
  {
    mouseenter: function(event) {
      event.preventDefault();
      //stuff to do on mouse enter
    },
    mouseleave: function(event) {
      //stuff to do on mouse leave
    }
  },
  ".selector"
); //pass the element as an argument to .on

// ----- remove or add class
$(this).removeClass("active");
$(this).addClass("active");

// ----- toggleClass
$(this).toggleClass("active");

// ------ get a String which includes the classes:
$(this).prop("class");

// toggle show/hide:
$("h1").toggle();

/* DIFFERENCE between ATTRIBUTE and PROPERTY !
A property is a representation of an attribute in the DOM, while an attribute represents the same 
value we have in the HTML. Once the browser interprets our HTML code, 
it will create a corresponding DOM Node which is an object thus having properties.
Since attr() gives you the value of the element as it was defined in the HTML when the page was loaded, 
it’s always recommended to use prop() to get values of elements which are modified via JavaScript/jQuery, 
as it gives you the value of an element’s current state. */

// ----- select elements through their relationship, you can put an optional selector to it!
$(this).parent(); // get the parent
$(this).children(); // get all children
$(this).prev(); // get the previous sibling
$(this).prevAll(); // get all previous siblings
$(this).find("selector"); // get all elements that are descendants of the current element
$(this).siblings(); // get all siblings

//  ----------------------------------------
// EXAMPLE:  https://codepen.io/ironhack/pen/KNmVaB

$(document).ready(function() {
  $(".fa-trash-o").on("click", removeOnClick);

  $("#add-task").on("click", addTask);
});

// add keydown listener!
$("#todo-content").keydown(function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  var newTask = $("#todo-content").val();
  $("#task-list").append(
    "<li> <span>" + newTask + '</span><i class="fa fa-trash-o new" aria-hidden="true"></i></li>'
  );
  $(".fa-trash-o.new").on("click", removeOnClick);
  $(".fa-trash-o.new").removeClass("new");
}

function removeOnClick() {
  $(this)
    .parent()
    .remove();
}
// -------------------------------------------

// LISTENERS
$("#todo-content").keydown(function(event) {
  event.key; // gets the key which triggered the event ('enter') e.g.
});
$("#todo-content").keyup(function(event) {});

$(document).ready(function() {
  $("form").submit(function(e) {
    e.preventDefault(); // prevents the default behavior!!!
    console.log("submit form");
    $("#info").text("Text");
  });
});

// ADD and REMOVE EVENT LISTENERS:
// https://stackoverflow.com/questions/1755815/disable-all-click-events-on-page-javascript
