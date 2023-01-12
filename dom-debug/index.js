const colors = ["purple","red", "blue", "green", "pink", "orange", "yellow", "gold"]

document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
    const listItem = document.querySelectorAll("div.list")
    
})

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.appendChild(option)
    }
    dropDown.addEventListener("click", function(e){
        e.target.parentElement.style.backgroundColor = e.target.value
    })
    return dropDown
}

function createSubItem(e) {
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input").value
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("list", "subItem")
    return subItem
}


