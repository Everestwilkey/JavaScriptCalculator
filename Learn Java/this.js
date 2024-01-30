
storedvalue = [];
inputuser = "";
operation = null;
let currentInput = "";
numberdisplay  ="";


class Calulator {
    math;
    total = 0;
    constructor(){
        this.math = [[]];
        this.total = 0;
    }
    domath() {
        let operations = [];
        let values = this.math.map(item => item[1] ? parseFloat(item[1]) : undefined).filter(value => value !== undefined);
    
        this.math.forEach(item => {
            if (item[0] && item[0] !== "=") operations.push(item[0]);
        });
    
        if (values.length > 0) {
            this.total = values[0];
        }
    
        for (let i = 1; i < values.length; i++) {
            switch (operations[i - 1]) {
                case "+":
                    this.total += values[i];
                    break;
                case "-":
                    this.total -= values[i];
                    break;
                case "*":
                    this.total *= values[i];
                    break;
                case "/":
                    if (values[i] !== 0) {
                        this.total /= values[i];
                    } else {
                        return "Error";
                    }
                    break;
            }
        }
    
        console.log(this.total);
    }
    
    
    InsertTuppel(operation,num1){
        if(operation === null && this.math.length === 0){
            this.math.push([null,num1]);
        }
        else if(operation === "=" ){
            this.math.push([operation,num1]);
            this.domath();
            document.getElementById('total').innerText = this.total;
            this.math = [[]];
            currentInput = this.total;
            this.total = 0;
            
        }         
        else{
            this.math.push([operation, num1]);
        }
        
    }
    deleteTuppel(){
        this.math.pop();
    }
    
  
        mathtoString() {
            let string = "";
            this.math.forEach(item => {
                if(item[1]) string += item[1] + " ";
                if(item[0]) string += item[0] + " ";
                
            });
            console.log(string);
            return string.trim() +" "+ currentContent;        
        }

}

let calculator = new Calulator();


function input(digit){
    currentContent = currentInput;
    var numberdisplay = "";
    // Concatenate the clicked digit to the current content
    currentContent += digit;
    numberdisplay  += digit;
    // Set the updated content to 'number1' element
    document.getElementById('number1').innerText = calculator.mathtoString() ;

    console.log(currentContent);
    return currentInput = currentContent;

}
function Add(){
    operation = "+";
    calculator.InsertTuppel(operation, currentInput);
    console.log(calculator.math);
    document.getElementById('number1').innerText = calculator.mathtoString() ;
    Clear();
}

function Subtract(){
    operation = "-";
    calculator.InsertTuppel(operation, currentInput);
    console.log(calculator.math);
    document.getElementById('number1').innerText = calculator.mathtoString() ;
    Clear();
}

function Multiply(){
    operation = "*";
    calculator.InsertTuppel(operation, currentInput);
    console.log(calculator.math);
    document.getElementById('number1').innerText = calculator.mathtoString() ;
    Clear();
}

function Divide(){
    operation = "/";
    calculator.InsertTuppel(operation, currentInput);
    console.log(calculator.math);
    document.getElementById('number1').innerText = calculator.mathtoString() ;
    Clear();
}
function Clear(){
    return currentInput = "", numberdisplay = "", currentContent = "",currentInput = ""
 }
function ClearAll(){
    return currentInput = "", numberdisplay = "", currentContent = "",currentInput = "", calculator.math = [[]],document.getElementById('number1').innerText = calculator.mathtoString(),document.getElementById('total').innerText = calculator.total = 0;
}
function Enter(){
    operation = "="
    calculator.InsertTuppel(operation, currentInput);
    console.log(calculator.math);

}

