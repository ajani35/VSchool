const addItem = document.querySelector('#add-todo')

const inputText = document.querySelector('.input');
const list = document.querySelector('ul#list');


addItem.addEventListener("submit", (e)=> {
    if(inputText.value != "") {
        e.preventDefault();
        const myLi = document.createElement('li');
        const myDiv = document.createElement('div');
        myDiv.innerHTML = inputText.value;
        myLi.appendChild(myDiv)
        list.appendChild(myLi);

       
        
        const myButton = document.createElement('button');
        myButton.innerHTML = 'X';
        myLi.appendChild(myButton);

        /*const myButton2 = document.createElement('button');
        myButton2.innerHTML = 'edit'
        myLi.appendChild(myButton2)*/
         
        
    }
    const myButton = document.querySelectorAll('li');
    for (let i = 0; i < myButton.length; i++) {
        myButton[i].addEventListener("click", () => {
            myButton[i].style.display = "none";
        })    

        

    }
        
    
    inputText.value = "";
    
    
});


/* credit for assignment: Dev A. T Viet Nam
https://youtu.be/7Yigdj6lEXk*/
    
    






    
