let val='TuesdayWednesday'
//let s=new String();
console.log(val.length)
//charAt()
console.log(s.charAt(1));//u
//Get value using index
console.log("Get value using index:"+val[1])//u
//concat
val.concat("Thursday");//TuesdayWednesdayThursday
//replace
val.replace("Thursday","");//TuesdayWednesday
//Substring 
console.log("Substring:"+val.substring(0,4))//Tues
console.log("Substring:"+val.slice(0,4))
//to upperCase and Lowercase
let s="WELcome"
console.log(s.toLowerCase())//welcome
console.log(s.toUpperCase())//WELCOME

//Split the string using value 
console.log("Split the string using value:"+val.split('s')[1].trim())
//Concat
console.log("Concat:"+val+'Wednesday')
let nums='3'
//convert string to integer
let num=parseInt(nums)
console.log("convert string to integer:"+typeof(num))
//Indexof
console.log("find the value by index:"+val.indexOf('day'))
//Occurance of char
let value=val.indexOf('d')
let count=0
while(value!=-1)
{
count ++;
value=val.indexOf('d',value+1)
}
console.log("occurance of 'd':"+count)