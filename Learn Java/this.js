
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
         // Reset total before each calculation
        this.math.forEach(item => {
            if(item[0] === "null") this.total += parseInt(item[1]);
            if(item[0] === "+") this.total += parseInt(item[1]);
            if(item[0] === "-") this.total -= parseInt(item[1]);
            if(item[0] === "*") this.total *= parseInt(item[1]);
            if(item[0] === "/") this.total /= parseInt(item[1]);
        });
        console.log(this.total);
        document.getElementById('total').innerText = this.total.toString();
        return this.total;
    }
    
    InsertTuppel(operation,num1){
        if(operation === null && this.math.length === 0){
            this.math.push([null,num1]);
        }
        else if(operation === "=" ){
            let total = this.domath(); // Store the result of this.domath()
            operation = null;
            this.math.forEach(item => {this.deleteTuppel();}); // Clear the array
            this.math.push([null, total]);
        }         
        else{
            this.math.push([operation, num1]);
        }
        inputuser = this.mathtoString();
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
            return string.trim();        
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
    return currentInput = "", numberdisplay = "", currentContent = ""
 }

function Enter(){
    operation = "null";
    calculator.InsertTuppel(operation, currentInput);
    console.log(calculator.math);
    
    Clear();
    operation = "=";
    console.log(calculator.math);
    calculator.InsertTuppel(operation, 0);
    document.getElementById('number1').innerText = calculator.mathtoString() ;
}

