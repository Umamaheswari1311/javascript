
document.getElementById("demo1").innerHTML="Dynamic Text";
document.getElementById("btn").onclick=displayDate;
function displayDate()
{ document.getElementById("mydate").innerHTML=Date();}

console.log("Hello World")
//Comment
/*d
Multiple lines
Comment
*/
//Variables are loose packed -var,[let and const]-ES6 version
//let -->we cannot redeclare the variable but reassign is allowed
//var -->we can redeclare and reassign the variable is allowed
//const -->we can't redeclare and reassign the variable 
let a=4
//Variable type ->Number,String,Boolean,null and undefined
console.log(typeof(a))
let str="uma"
console.log(typeof(str))
let boolean=true
console.log(typeof(boolean))
const value="san"
console.log(value)