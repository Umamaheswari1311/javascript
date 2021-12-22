var arr=Array(6)
var arr=new Array(21,23,12,67,56,78)
var arr=[21,23,12,67,56,78]
//for/of loops
for(ele of arr)
{
    console.log(ele)
}
//is Array
console.log(Array.isArray(ele))
////type
console.log(typeof(ele))
//toString,join
console.log(arr.toString())
console.log(arr.join("*"))
//get element on position
console.log("get element on position:"+ arr[2])
//get index of element
console.log("get index of element:"+ arr.indexOf(56))
//lengnth of arr
console.log("lengnth of arr:"+ arr.length)
//Element is present in arr
console.log("Element is present in arr:"+ arr.includes(120))
//Deleting elements from array with position
delete arr[1]

console.log("Deleting only element and not an index position from array"+arr)
//Replace element with position
arr[2]=32
console.log("Replace element with position:"+ arr.length)
//Add element to last position
arr.push(90)
console.log("Add element[90] to last position:"+arr)
console.log(arr.length)
//Delete element from last position
arr.pop()
console.log("Delete element from last position:"+ arr)
//Add element to first position
arr.unshift(10)
console.log("Add element to first position:"+ arr)
//Remove the first element
arr.shift(10)
console.log(" Remove the element to first position:"+ arr)
//SubArray
subArray=arr.slice(2,4)
console.log("SubArray"+subArray)
//Update-->Iteration without for loop using reduce filter map
let total=arr.reduce((sum,num)=>sum+num,0)
console.log("Iteration without for loop using reduce filter map:"+total)
// condition-->Get Even numbers from an array
var nums=[12,13,14,15,16]
let evenNums=nums.filter(num=>num%2==0)
console.log("Get Even numbers from an array:"+evenNums)
//operation on each element in array using MAp
let multiplyWithTwo=nums.map(mul=>mul*2)
console.log("Operation on each element in array using Map:"+multiplyWithTwo)
//String sort
var strArr=["uma","san","mani"]
console.log("String sort:"+strArr.sort())
console.log("String Reverse:"+strArr.reverse())
//Numbers Sort 
var nums=[12,002,23,14,45]
console.log("Numbers sort:"+nums.sort())
console.log("Numbers sort:"+nums.sort((a,b)=>a-b))
console.log("Numbers Reverse:"+nums.sort((a,b)=>b-a))