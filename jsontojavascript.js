let text='{  "employees":['+
      '{"firstName":"John", "lastName":"Doe"},'+
      '{"firstName":"Anna", "lastName":"Smith"},'+
      '{"firstName":"Peter", "lastName":"Jones"}]}';


    let obj=JSON.parse(text)
  console.log(obj.employees[1].firstName,obj.employees[1].lastName)

  data='"employees":[{"firstName":"John", "lastName":"Doe"},{"firstName":"Anna", "lastName":"Smith"},{"firstName":"Peter", "lastName":"Jones"}]';
  let objData=JSON.parse(text)
  console.log(data.employees.firstName[2]);