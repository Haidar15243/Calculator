let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {  /*Identifies what button was clicked*/
        switch(e.target.innerText){
            case 'C':
                display.innerText = ''; /*Clears Display*/
                break; /*will end execution and get rid of the 'C' after pressing cancel*/
            case '=':
                try{
                    display.innerText = eval(display.innerText); /*eval takes in a string as a parameter (display text) and executes it*/
                } catch {
                    display.innerText = "Error" /*Only executes if code in try block is not used correctly*/
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1); /*Will remove last entered character by user*/
                }
                break;
            default:
                display.innerText += e.target.innerText; /*Adds any clicked button to the display*/
        }
    });
});