//declare a dynamic class called Student with no parameters
class Student {
//declare a static constructor method with no parameters
  constructor () {
//create 3 properties )name, age, and isAwesome)
//assign this.name property a string value of no name
    this.name = "no name";
//assign this.age property a number value of 0
    this.age = 0;
//assign this.isAwesome property a boolean value of false
    this.isAwesome = false;
  } // closes constructor method
//declare a new method caled updateAge with a single parameter ag
  updateAge (ag) {                              //             ag ------
//assign this.age property the value assigned to ag                     |
    this.age = ag;                              //    this.age <------ ag
  }// closes updateAge method
//declare a new method caled updateName with a single parameter nm
  updateName (nm){
//assign this.name property the value assigned to nm
    this.name = nm;
  }// closes updateName method
//declare a new method caled makeAwesome with no parameters
  makeAwesome () {
//assign this.isAwesome property the a boolean value of true
    this.isAwesome = true;
  } // closes makeAwesome method
//declare a new method caled sayHappyBirthDay with no parameters
  sayHappyBirthDay () {
//add 1 to the value of this.age property
//assign the new value to this.age
    this.age = this.age + 1;
//evaluate the condition if this.isAwesome is strictly true
    if (this.isAwesome === true) {
//if the above condition is true, declare a variable awesomeString assigned to string value Also you're awesome.
      var awesomeString = "Also you're awesome."
} // closes if condition
//otherwise (this.isAwesome is not strictly equal to true)
   else {
//declare a variable awesomeString assigned to string value However, you're not awesome
      var awesomeString = "However, you're not awesome."
    } // closes else condition
//log to the console an interpolated string containing this.name, this.age, and awesomeString
    console.log(`Happy Birthday ${this.name}! You are now ${this.age} years old. ${awesomeString}`);
  } //closes sayHappyBirthDay method
} // closes Student class
//declare a new variable name your name
//make an object instance of student class and make

//declare a variable students and assign it an empty array
var students = [];
console.log(students);
//create an object instance of Student (from the Student class) and push it to the students array 4 times
students.push(new Student);
students.push(new Student);
students.push(new Student);
students.push(new Student);
//log to the console the students array containing 4 object instances
console.log(students);

// call the updateName method on the student object instance at index 0 of the students array using dot notation
// passing in the string argument "irmak" through the nm parameter
students[0].updateName("Irmak");
//log to the console the students array containing 4 object instances
//the object at index0 has had the name updated to irmak
console.log(students);

//call updateAge method on the object instance at index 0 in the students array passing the argument 28
students[0].updateAge(28);
//log to the console the students array that contains 4 object instances after the age
//of the object instance at index 0has been changed to 28
console.log(students);

//call say happy bday bethod on the irmak object using dot notation
students[0].sayHappyBirthDay();

//call make awesome method on irmak object
students[0].makeAwesome();
console.log(students);
students[0].sayHappyBirthDay();
//target student1 and update name to eli
students[1].updateName("Eli");
console.log(students);

students[2].updateName("Alex");
console.log(students);

students[2].updateAge(23);
console.log(students);

students[1].updateAge(33);
console.log(students);

students[2].makeAwesome();
console.log(students);

students[1].sayHappyBirthDay();

students[1].makeAwesome();
students[1].sayHappyBirthDay();
// varaible irmak should be chnaged to an array
// call the push method on the studetns array using dot notation
//pass in the argument new Student
