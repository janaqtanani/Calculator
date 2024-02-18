function display(o) {

  document.getElementById("result").value += o;
  
}
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

function del(){
  document.getElementById("result").value="";
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
}







































/*function answer() {
    var Exp = document.getElementById("result");
    var Exp1 = Exp.value;
    var result = eval(Exp1);
    Exp.value = result;
}

*/




