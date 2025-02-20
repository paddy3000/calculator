const buttons=document.querySelectorAll("button");
const screen=document.querySelector(".screen");

let currentNumber="";
let previousNumber="";
let previousNumberTrue=false;
let operator="";
let operatorPressed=false;
let equalPressed=false;
let newNumber=true;

equalFunction = function(previousNumber, operator, currentNumber){
    if (previousNumberTrue) {
      if (operator==="+") {return Number(previousNumber)+Number(currentNumber)}
      else if (operator==="-") {return Number(previousNumber)-Number(currentNumber)}
      else if (operator==="/") {
        if (Number(currentNumber)===0) {return "ERROR"} else
        {return Number(previousNumber)/Number(currentNumber)}
    }
      else if (operator==="*") {return Number(previousNumber)*Number(currentNumber)}
    newNumber=true;
    } else {return currentNumber}
}

buttons.forEach(button => {
    button.addEventListener("click", function(e) {
    if (button.getAttribute("class")==="number") {
        if (newNumber===true | equalPressed===true) {
            currentNumber=button.getAttribute("id");
            newNumber=false;
            equalPressed=false;
        }
        else {
            currentNumber=currentNumber+button.getAttribute("id")
        }
    } else if (button.getAttribute("class")==="operator") {
        if (operatorPressed===true) {currentNumber=equalFunction(previousNumber, operator, currentNumber)}
        
        operator=button.getAttribute("id");
        if (operatorPressed===false) {currentNumber=equalFunction(previousNumber, operator, currentNumber)};

        operatorPressed=true;
        previousNumber=currentNumber;
        previousNumberTrue=true;
        equalPressed=false;
        newNumber=true;
    } else if (button.getAttribute("class")==="equal") {
        currentNumber=equalFunction(previousNumber, operator, currentNumber);
        previousNumber=0;
        previousNumberTrue=false;
        equalPressed=true;
        operatorPressed=false;
    } else if (button.getAttribute("class")==="clear") {
        currentNumber="";
        newNumber=true;
        if (button.getAttribute("id")==="AC"){
            operator="";
            operatorPressed=false;
            equalPressed=false;
            previousNumber="";
            previousNumberTrue=false;
        }
    }

    if (currentNumber!=="") {currentNumber=Math.round(currentNumber*100000000000)/100000000000};

    screen.textContent=currentNumber;
})
  }
)