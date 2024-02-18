/*
let arr1 = [];
let arr = [];
let counter = 0;
let output = 0;
function sum(){
  arr1=document.getElementById("result").value
  for(let i=0;i<document.getElementById("result").value.length;i++){
    arr[i]=arr1.charAt(i);
}
while(document.getElementById("result").value.indexOf("+")>0){
for(let i=0;i<arr.length;i++){
  if(arr[i]=="+"){
    counter++;
    if(counter>1||arr[i]=="-"||arr[i]=="*"||arr[i]=="/"||arr[i]=="^"){
      break;
    }
    let number1 = "";
    let number2 = "";
    let v = "";
    for(let i=document.getElementById("result").value.indexOf("+")-1;i>=0 && v!="-"&&v!="*"&&v!="/"&&v!="+"&&v!="^";i--)
  {
   v=document.getElementById("result").value.charAt(i); 
   number1+=v       
 }
 v="";
 for(let i=document.getElementById("result").value.indexOf("+")+1;i<document.getElementById("result").value.length && v!="-"&&v!="*"&&v!="/"&&v!="+"&&v!="^";i++)
  {
   v=document.getElementById("result").value.charAt(i); 
   number2+=v       
 }
 n1=parseInt(number1);
 n2=parseInt(number2);
 output=n1+n2;
 arr[document.getElementById("result").value.indexOf("+")]=output;
}
  }
}
return output;
}


function multi(){
  arr1=document.getElementById("result").value
  for(let i=0;i<document.getElementById("result").value.length;i++){
    arr[i]=arr1.charAt(i);
}
while(document.getElementById("result").value.indexOf("*")>0){
for(let i=0;i<arr.length;i++){
  if(arr[i]=="*"){
    counter++;
    if(counter>1||arr[i]=="-"||arr[i]=="*"||arr[i]=="/"||arr[i]=="^"){
      break;
    }
    let number1 = "";
    let number2 = "";
    let v = "";
    for(let i=document.getElementById("result").value.indexOf("*")-1;i>=0 && v!="-"&&v!="*"&&v!="/"&&v!="+"&&v!="^";i--)
  {
   v=document.getElementById("result").value.charAt(i); 
   number1+=v       
 }
 v="";
 for(let i=document.getElementById("result").value.indexOf("*")+1;i<document.getElementById("result").value.length && v!="-"&&v!="*"&&v!="/"&&v!="+"&&v!="^";i++)
  {
   v=document.getElementById("result").value.charAt(i); 
   number2+=v       
 }
 n1=parseInt(number1);
 n2=parseInt(number2);
 output=n1*n2;
 arr[document.getElementById("result").value.indexOf("*")]=output;
}
  }
}
return output;
}


function divition(){
  arr1=document.getElementById("result").value
  for(let i=0;i<document.getElementById("result").value.length;i++){
    arr[i]=arr1.charAt(i);
}
while(document.getElementById("result").value.indexOf("/")>0){
for(let i=0;i<arr.length;i++){
  if(arr[i]=="/"){
    counter++;
    if(counter>1||arr[i]=="-"||arr[i]=="*"||arr[i]=="/"||arr[i]=="^"){
      break;
    }
    let number1 = "";
    let number2 = "";
    let v = "";
    for(let i=document.getElementById("result").value.indexOf("/")-1;i>=0 && v!="-"&&v!="*"&&v!="/"&&v!="+"&&v!="^";i--)
  {
   v=document.getElementById("result").value.charAt(i); 
   number1+=v       
 }
 v="";
 for(let i=document.getElementById("result").value.indexOf("/")+1;i<document.getElementById("result").value.length && v!="-"&&v!="*"&&v!="/"&&v!="+"&&v!="^";i++)
  {
   v=document.getElementById("result").value.charAt(i); 
   number2+=v       
 }
 n1=parseInt(number1);
 n2=parseInt(number2);
 output=n1/n2;
 arr[document.getElementById("result").value.indexOf("/")]=output;
}
  }
}
return output;
}


function sub(){
  arr1=document.getElementById("result").value
  for(let i=0;i<document.getElementById("result").value.length;i++){
    arr[i]=arr1.charAt(i);
}
while(document.getElementById("result").value.indexOf("-")>0){
for(let i=0;i<arr.length;i++){
  if(arr[i]=="-"){
    counter++;
    if(counter>1||arr[i]=="-"||arr[i]=="*"||arr[i]=="/"||arr[i]=="^"){
      break;
    }
    let number1 = "";
    let number2 = "";
    let v = "";
    for(let i=document.getElementById("result").value.indexOf("-")-1;i>=0 && v!="-"&&v!="*"&&v!="/"&&v!="+"&&v!="^";i--)
  {
   v=document.getElementById("result").value.charAt(i); 
   number1+=v       
 }
 v="";
 for(let i=document.getElementById("result").value.indexOf("-")+1;i<document.getElementById("result").value.length && v!="-"&&v!="*"&&v!="/"&&v!="+"&&v!="^";i++)
  {
   v=document.getElementById("result").value.charAt(i); 
   number2+=v       
 }
 n1=parseInt(number1);
 n2=parseInt(number2);
 output=n1-n2;
 arr[document.getElementById("result").value.indexOf("-")]=output;
}
  }
}
return output;
}


function power(){
  arr1=document.getElementById("result").value
  for(let i=0;i<document.getElementById("result").value.length;i++){
    arr[i]=arr1.charAt(i);
}
while(document.getElementById("result").value.indexOf("^")>0){
for(let i=0;i<arr.length;i++){
  if(arr[i]=="^"){
    counter++;
    if(counter>1||arr[i]=="-"||arr[i]=="*"||arr[i]=="/"||arr[i]=="^"){
      break;
    }
    let number1 = "";
    let number2 = "";
    let v = "";
    for(let i=document.getElementById("result").value.indexOf("^")-1;i>=0 && v!="-"&&v!="*"&&v!="/"&&v!="+"&&v!="^";i--)
  {
   v=document.getElementById("result").value.charAt(i); 
   number1+=v       
 }
 v="";
 for(let i=document.getElementById("result").value.indexOf("^")+1;i<document.getElementById("result").value.length && v!="-"&&v!="*"&&v!="/"&&v!="+"&&v!="^";i++)
  {
   v=document.getElementById("result").value.charAt(i); 
   number2+=v       
 }
 n1=parseInt(number1);
 n2=parseInt(number2);
 output=n1**n2;
 arr[document.getElementById("result").value.indexOf("^")]=output;
}
  }
}
return output;
}







function equal(){
  let content1=document.getElementById("result").value;
let content2="";
  let j=0;
  while(j<content1.length){
   if(content1.indexOf("(")!=-1){
    content2=content1.slice(content1.indexOf("("),content1.indexOf(")"));
    for(let i=content2.indexOf("(")+1;i<content2.indexOf(")");i++){
      equal();
      content1=content1.slice(0,content1.indexOf("("))+output+content1.slice(content1.indexOf(")"),content1.length);
    }
    j++
   }
  while (content1.includes("^")) {
     power();
  }
  while(content1.includes("*")) {
     multi();
  }
  while (content1.includes("/")) {
     division();
  }
  while(content1.includes("+")) {
     sum();
  }
   

  }
  return output;
  
}
function printOut(){
equal();
document.getElementById("result").value=document.getElementById("result").value+"="+output;
}*/




function del(){
  document.getElementById("result").value="";
}


function display(o) {
  document.getElementById("result").value += o;
}



function answer() {
    var Exp = document.getElementById("result");
    var Exp1 = Exp.value;
    var result = eval(Exp1);
    Exp.value = result;
}

/*

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculateResult() {
  let input = document.getElementById('display').value;
  let result;

  try {
      result = evaluateExpression(input);
  } catch (error) {
      result = 'Error';
  }

  document.getElementById('display').value = result;
}

function evaluateExpression(expression) {
  const operators = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
      '^': (a, b) => Math.pow(a, b)
  };

  const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
      '^': 3
  };

  function tokenize(expression) {
      return expression
          .replace(/\s+/g, '')
          .match(/(\d+|\(|\)|\+|-|\*|\/|\^)/g);
  }

  function shuntingYard(tokens) {
      const outputQueue = [];
      const operatorStack = [];

      for (const token of tokens) {
          if (/\d/.test(token)) {
              outputQueue.push(parseFloat(token));
          } else if (token === '(') {
              operatorStack.push(token);
          } else if (token === ')') {
              while (operatorStack.length && operatorStack[operatorStack.length - 1] !== '(') {
                  outputQueue.push(operatorStack.pop());
              }
              operatorStack.pop(); // Discard the '('
          } else {
              while (operatorStack.length && precedence[token] <= precedence[operatorStack[operatorStack.length - 1]]) {
                  outputQueue.push(operatorStack.pop());
              }
              operatorStack.push(token);
          }
      }

      while (operatorStack.length) {
          outputQueue.push(operatorStack.pop());
      }

      return outputQueue;
  }

  function evaluateRPN(tokens) {
      const stack = [];

      for (const token of tokens) {
          if (/\d/.test(token)) {
              stack.push(parseFloat(token));
          } else {
              const operand2 = stack.pop();
              const operand1 = stack.pop();
              stack.push(operators[token](operand1, operand2));
          }
      }

      return stack.pop();
  }

  const tokens = tokenize(expression);
  const rpnTokens = shuntingYard(tokens);
  return evaluateRPN(rpnTokens);
}*/
/*function add(x, y) {
   return x + y;
}

function subtract(x, y) {
   return x - y;
}

function multiply(x, y) {
   return x * y;
}

function divide(x, y) {
   if (y === 0) {
       return "Error: Division by zero!";
   }
   return x / y;
}

function calculate(expression) {
   // Split the expression into tokens (numbers and operators)
   const tokens = expression.match(/(\d+|\+|\-|\*|\/)/g);
   
  
   const stack = [];
   
   // Loop through tokens and perform operations according to PEMDAS/BODMAS
   for (let token of tokens) {
       if (token === '+' || token === '-' || token === '*' || token === '/') {
           // If token is an operator, pop last two numbers from stack, perform operation, and push result back to stack
           const y = stack.pop();
           const x = stack.pop();
           switch (token) {
               case '+':
                   stack.push(add(x, y));
                   break;
               case '-':
                   stack.push(subtract(x, y));
                   break;
               case '*':
                   stack.push(multiply(x, y));
                   break;
               case '/':
                   stack.push(divide(x, y));
                   break;
           }
       } else {
           // If token is a number, push it to the stack
           stack.push(parseFloat(token));
       }
   }
   
   // The final result will be the only element remaining in the stack
   return stack[0];
}*/


