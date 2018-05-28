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
