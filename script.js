let display_div_dom;
let num1_dom;
let total;
let number_array=[];
let operater_array=[];

function add (num,num2) {total=( parseFloat(num) + parseFloat(num2)); return total;}
function subtract (num,num2) {total=( parseFloat(num) - parseFloat(num2));  return total;}
function multiply (num,num2) {total=( parseFloat(num) * parseFloat(num2));  return total;}
function divide (num,num2) {total=( parseFloat(num) / parseFloat(num2));  return total;}


window.onload =  function () {
    display_div_dom = document.getElementById("display-div");
    num1_dom = document.getElementById("num1-btn");
    num1_dom.addEventListener("click",()=> display(1));
    num2_dom = document.getElementById("num2-btn");
    num2_dom.addEventListener("click",()=> display(2));
    num3_dom = document.getElementById("num3-btn");
    num3_dom.addEventListener("click",()=> display(3));
    num4_dom = document.getElementById("num4-btn");
    num4_dom.addEventListener("click",()=> display(4));
    num5_dom = document.getElementById("num5-btn");
    num5_dom.addEventListener("click",()=> display(5));
    num6_dom = document.getElementById("num6-btn");
    num6_dom.addEventListener("click",()=> display(6));
    num7_dom = document.getElementById("num7-btn");
    num7_dom.addEventListener("click",()=> display(7));
    num8_dom = document.getElementById("num8-btn");
    num8_dom.addEventListener("click",()=> display(8));
    num9_dom = document.getElementById("num9-btn");
    num9_dom.addEventListener("click",()=> display(9));
    num0_dom = document.getElementById("num0-btn");
    num0_dom.addEventListener("click",()=> display(0));
    add_dom = document.getElementById("add-btn");
    add_dom.addEventListener("click",()=> display("+"));
    multiply_dom = document.getElementById("multiply-btn");
    multiply_dom.addEventListener("click",()=> display("*"));
    divide_dom = document.getElementById("divide-btn");
    divide_dom.addEventListener("click",()=> display("/"));
    subtract_dom = document.getElementById("subtract-btn");
    subtract_dom.addEventListener("click",()=> display("-"));
    equal_dom = document.getElementById("equal-btn");
    equal_dom.addEventListener("click",()=> display("="));
    clear_dom = document.getElementById("clear-btn");
    clear_dom.addEventListener("click",()=> display("clear"));
}

function operate (num,operater,num2){
switch (operater){
case "+":
   return add(num,num2);
   break;
case "-":
   return subtract(num,num2);
   break;
case "*":
   return multiply(num,num2);
   break;
case "/":
   return divide(num,num2);
   break;

}
}

function display(singleString)
{

  
    if(singleString!="clear"){
        display_div_dom.textContent+=singleString;

        if((singleString=="*")||(singleString=="-")||
        (singleString=="+")||(singleString=="/"))
        {
            operater_array[0]=(singleString);
        }

        
        console.log(operater_array);
        if (singleString == "=") {
            myText=display_div_dom.textContent;
            number_array = myText.match(/\d+/g);

            if((number_array[1]==0)&&(operater_array=="/"))
            {
                window.alert(`Please enter valid number "Zero not allowd"`)
                clearDisplay();
                
            }

            total=(operate(number_array[0],operater_array[0],number_array[1]));
                 display_div_dom.textContent=total;
        }
    }

    if(singleString=="clear"){

        clearDisplay();
    }

}

function clearDisplay(){
    display_div_dom.textContent= " ";
    total="";
    number_array=[];
    operater_array=[];
}


