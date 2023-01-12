var h1 = document.createElement("h1");
h1.textContent = "Welcome To The Show";
document.getElementById("header").appendChild(h1)
h1.className = "header";


var subTitle = document.createElement("h2");
subTitle.innerHTML = '<span class="name">Ajani</span> wrote the JavaScript File';
document.getElementById("header").appendChild(subTitle)
subTitle.className = "header";



const messages = document.getElementsByClassName("message");

var button = document.getElementById("clear-button")
messages[0].textContent = "you're great";
messages[1].textContent = "thanks!";
messages[2].textContent = "you're welcome";
messages[3].textContent = "you're great";

button.addEventListener("click", (e) => {
  for (let i = 0; i < messages.length; i++) {
    messages[i].textContent = "";
  }
})



var dropDown = document.querySelector('#theme-drop-down').classList.add("messages")

document.addEventListener("change", function() {
  if (messages === "theme-two") {
    document.querySelectorAll(".message left").style.color = 'red';
  }
  else if (messages === "theme-two") {
    document.querySelectorAll(".message right").style.color = 'black';
  }

})









/*dropDown.addEventListener("click", (e) => {
  for (let i = 0; i < dropDown.value; i++) {
    dropDown[i].classList.toggle("theme-two");
  }
})*/