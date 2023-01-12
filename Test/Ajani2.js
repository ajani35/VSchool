
/*var result = document.querySelectorAll("div")
console.log(result)*/

/*var text = document.querySelector(".header2").textContent

document.querySelector(".paragraph2").textContent = text*/





var div1 = document.getElementById("div1")

document.addEventListener("keypress", (e) => {
  
  if (e.key === "w") {
    div1.style.backgroundColor = 'white';
  }
  else if (e.key === "p") {
    div1.style.backgroundColor = 'purple';
  }
  else if (e.key === "s") {
    div1.style.backgroundColor = 'silver';
  }
  else if (e.key === "g") {
    div1.style.backgroundColor = 'gold';
  }

})


document.addEventListener("mousedown", function() {
  document.getElementById("div1").style.backgroundColor = 'red'
});


document.addEventListener("click", function() {
  document.getElementById("div1").style.backgroundColor = 'yellow'
});


document.addEventListener("dblclick", function() { 
  document.getElementById("div1").style.backgroundColor = 'green' 
});

document.addEventListener("wheel", function() {
  document.getElementById("div1").style.backgroundColor = 'orange'
});

document.addEventListener("mouseover", function() {
  document.getElementById("div1").style.backgroundColor = 'blue'
});










