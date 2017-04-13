// I don't like that I couldn't just use this.first and this.last... Though I understand this is probably meant to just teach me how to work with constructors instead of how to make a person.
var Person = function(firstAndLast) {
  this.getFirstName = function() {
    return (firstAndLast.split(" "))[0];
  };
  this.getLastName = function() {
    return (firstAndLast.split(" "))[1];
  };
  this.getFullName = function() {
      return firstAndLast;
  };
  this.setFirstName = function(first) {
    firstAndLast = first + " " + (firstAndLast.split(" "))[1];
  };
  this.setLastName = function(last) {
    firstAndLast = (firstAndLast.split(" "))[0] + " " + last;
  };
  this.setFullName = function(newFirstAndLast) {
    firstAndLast = newFirstAndLast;
  };
  
};

var bob = new Person('Bob Ross');
bob.getFullName();
