
var form = document.querySelector('#airlineForm');

var submit = document.querySelector('#submit');

function formAlert() {
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["Location"].value;
    var diet = [];
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById('vegan').value);
    }
    if (form.elements['kosher'].checked) {
        diet.push(document.getElementById('kosher').value);
    }
    if (form.elements['lactose-free'].checked) {
        diet.push(document.getElementById('lactose-free').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nLocation: " + location + "\nDietary Restrictions: " + diet + "\nAwesome, Thank You for Flying with Dawson Airlines.. Have a Good Flight!!!");
}


submit.addEventListener("click", function(e){
    formAlert()
});

