let sum=(c,d)=>c+d
console.log(sum(1,2))
//-------------------
//block of code
//Var-global level/functional and able to reassgin
//let=global level/block level {}

var name="uma"
if(1==1)
{
    name="manikandan"
}
function add(a,b)
{
    name="manikandan"
    return a+b
}

console.log(name)