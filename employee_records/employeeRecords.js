//My array of the first three Employees
var employees = ['Harold', 'Steve', 'Ajani'];
//My constructor function
function Employee(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
}

Employee.prototype.work = work

//How it is going to print to the console
function work(){
    console.log("Name: "+ this.name + "\nJob Title: "+ this.jobTitle + "\nSalary: " + this.salary + "\nStatus: " + this.status)
}
//My Instantiate of the Three Employees
var davidBanner = new Employee("David Banner", "Rapper", 50000)
var dwanyeJohnson = new Employee("Dwanye Johnson", "Actor", 10000000)
var randyMoss = new Employee("Randy Moss", "FootBall Player", 100000000)
//The One Worker that is Overriden to Contract or Part Time
randyMoss.status = "Contract Worker"
//My call method for each employee
davidBanner.work()
dwanyeJohnson.work()
randyMoss.work()

//How I generated the Employees into the Array with a For loop
var newEmployees = ["David Banner", "Randy Moss", "Dwanye Johnson"]
for (i = 0; i < newEmployees.length; i++){
    employees.push(newEmployees[i])
}
console.log(employees)
