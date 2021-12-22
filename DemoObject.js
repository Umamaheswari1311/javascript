
let employee={
    firstName:"uma",
    lastName:"Maheswari",
    fullName:function()
    {
      let name=  this.firstName+this.lastName
       return name
    },
    age:31

}
//Retrive property value from object
console.log("Retrive firstName property value from object:"+employee.firstName)
console.log("Retrive fullName property value from object:"+employee.fullName())
//Update property value of object
employee.lastName='K'
console.log("Update property[lastName] value of object:"+employee.lastName)
//Add new Property
employee.gender='Female'
console.log(employee)
//Retrive all property from Object
for(let key in employee)
{
    console.log(key+":"+employee[key]) 
}
//Delete property from Object
delete employee.age
console.log(employee)