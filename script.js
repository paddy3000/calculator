const buttons=document.querySelectorAll("button");
const screen=document.querySelector(".screen");
let currentNumber="";
let previousNumber=0;
let previousNumberTrue=false;
let operator="";
let operatorPressed=false;

equalFunction = function(previousNumber, operator, currentNumber){
    if (previousNumberTrue) {
      if (operator==="+") {return Number(previousNumber)+Number(currentNumber)}
      else if (operator==="-") {return Number(previousNumber)-Number(currentNumber)}
      else if (operator==="/") {return Number(previousNumber)/Number(currentNumber)}
      else if (operator==="*") {return Number(previousNumber)*Number(currentNumber)}
    } else {return currentNumber}
}

buttons.forEach(button => {
    button.addEventListener("click", function(e) {
    if (button.getAttribute("class")==="number") {
        if (operatorPressed) {
            currentNumber=button.getAttribute("id");
            operatorPressed=false;
        }
        else {
            currentNumber=currentNumber+button.getAttribute("id")
        }
    } else if (button.getAttribute("class")==="operator") {
        operator=button.getAttribute("id");
        operatorPressed=true;
        currentNumber=equalFunction(previousNumber, operator, currentNumber)
        previousNumber=currentNumber;
        previousNumberTrue=true;
    } else if (button.getAttribute("class")==="equal") {
        
    }

    screen.textContent=currentNumber;
})
  }
)