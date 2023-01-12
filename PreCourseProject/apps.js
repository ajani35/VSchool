


function clickOneTime() {
    var html = "complete"
    if(html === "incomplete" ) {
        alert("This is no good!!!")
    } else {
        alert("Great looking Website!!!")
    }
}

function buttonNumber2() {
    const myCountDown = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
    for(i = 0; i < myCountDown.length; i++)
    alert(myCountDown[i])
    alert("Blast Off!!!!")
}



const myObj = {
    name: "Ajani",
    age: 45,
    height: "5'11",
    weight: 180,
    address: {
        street: "20419 Kelly St",
        city: "Humble",
        state: "Texas"
    }
  }
console.log(myObj.address)
alert(myObj.name)
alert(myObj.age)


var cdButton = document.getElementById("countDown")
cdButton.addEventListener("click", buttonNumber2)

var clickOneTime1 = document.getElementById("clickOneTime")
clickOneTime1.addEventListener("click", clickOneTime)

document.getElementById("buttonQuery1").innerHTML = myObj.address["street"]
document.getElementById("buttonQuery2").innerHTML = myObj.address["city"]
document.getElementById("buttonQuery3").innerHTML = myObj.address["state"]