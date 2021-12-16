//declare a variable assigned to a string
var var1 = "my kitty"
//log to the console the value of the variable
console.log(var1);
//result: my kitty

//declare a variable assigned to a number
var num2 = 4
//log to the console the value of the variable
console.log(num2);
//result: 4

//declare a variable assigned to a float/decimal
var floaty = 4.65
//log to the console the value of the variable
console.log(floaty);
//result: 4.65

//declare a variable assigned to a Boolean
var hasHats = true;
//log to the console the value of the variable
console.log(hasHats);
//result true

//declare a variable to an array
var myArray = [];
//log to the console the value of the variable
console.log(myArray);
//result: []

//string variable will be first element in the myArray
myArray[0] = var1
//log to the console the value of the new array
console.log(myArray);
//result: ['my kitty']

//add number variable to the end of myArray
myArray.push(num2);
//log the the console the value of the new array
console.log(myArray);
//result: ['my kitty', 4]

//add to the array at the first element of the value assigned to the float variable
//do not use myarray[0]. dont replace it, add it

myArray.push(floaty);
console.log(myArray);

//add boolean value at end of array
myArray.push(hasHats);
console.log(myArray);

//declare another variable with a 2nd string
var var2 = "my dog"

//declare another valueb and assign the value of string1 concatenate string 2

var var3 = var1 + " " + "and "+ var2;
console.log(var3);

//create a 4th string variable use interpolation using number and any string
var var4 = `${num2} ${var1}`;
console.log(var4);

//overwrite element2 with the 4th variable
myArray[1] = var4;
console.log(myArray);
