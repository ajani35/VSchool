/*
You are going to create a simple calculator 
that can Add, Subtract, and Multiply.

Requirements:
- You will have one section(<div>)for 
  each math operation(so 3 sections) total.

- Each section has two inputs to take the 
  first and second numbers.

- Each section will have a button to 
  perform the operation.

- You will inject the result into the HTML 
  (not an alert).

- Your website will have 3 colors.

- Your website will have proper
  padding/spacing to lay things out nicely.

*/

let display = document.querySelector('#display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
  button.addEventListener('click', (e) => {
      switch(e.target.innerText){
          case 'C':
              display.innerText = '';
              break;
          case '=':
              try{
                  display.innerText = eval(display.innerText);
              } catch {
                  display.innerText = "Error"
              }
              break;
          case '←':
              if (display.innerText){
                 display.innerText = display.innerText.slice(0, -1);
              }
              break;
          default:
              display.innerText += e.target.innerText;
      }
  });
});




