var employees = ['Harold', 'Steve', 'Ajani'];

function Employee(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
}

Employee.prototype.work = work


function work(){
    console.log("Name: "+ this.name + "\nJob Title: "+ this.jobTitle + "\nSalary: " + this.salary + "\nStatus: " + this.status)
}

var davidBanner = new Employee("David Banner", "Rapper", 50000)
var dwanyeJohnson = new Employee("Dwanye Johnson", "Actor", 10000000)
var randyMoss = new Employee("Randy Moss", "FootBall Player", 100000000)

randyMoss.status = "Contract Worker"

davidBanner.work()
dwanyeJohnson.work()
randyMoss.work()

var newEmployees = ["David Banner", "Randy Moss", "Dwanye Johnson"]
for (i = 0; i < newEmployees.length; i++){
    employees.push(newEmployees[i])
}
console.log(employees)