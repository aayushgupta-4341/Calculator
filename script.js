const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");
const equals = document.querySelector("#equals");
const allClear = document.querySelector("#all-clear");
const deleteBtn = document.querySelector("#delete");

let currentInput = "";

buttons.forEach(btn=>{
btn.addEventListener("click", ()=>{
const value = btn.dataset.value;

if(value){
currentInput += value;
display.innerText = currentInput;
}
});
});

equals.addEventListener("click", ()=>{
try{
currentInput = eval(currentInput.replace(/×/g,'*').replace(/÷/g,'/')).toString();
display.innerText = currentInput;
}catch{
display.innerText = "Error";
currentInput = "";
}
});

allClear.addEventListener("click", ()=>{
currentInput = "";
display.innerText = "0";
});

deleteBtn.addEventListener("click", ()=>{
currentInput = currentInput.slice(0,-1);
display.innerText = currentInput || "0";
});