class Employee
{
    constructor(eid,ename)
    {
     this.eid=eid;
     this.ename=ename;
    }
}
Employee.prototype.esal=6000
Employee.prototype.display=function()
                           {
                            console.log(this.eid,this.ename,this.esal);
                            }
 emp=new Employee(20,"uma");
 emp.display();
 emp1=new Employee(30,"Mani");
emp1.display();