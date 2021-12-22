function student(){
    this.name="uma";
    this.gender="Female";
}
student.prototype.age=31;
std1=new student();
console.log(std1.name + std1.gender+std1.age);

std2=new student();
console.log(std2.name + std2.gender+std2.age);