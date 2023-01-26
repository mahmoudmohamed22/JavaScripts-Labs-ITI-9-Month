function onlyLetters(str) {
  return Boolean(str.match(/^[A-Za-z ,]*$/));
}

do{
var strname=prompt("Enter your array of names? ");
}while(!onlyLetters(strname));

arr=strname.split(","); //array of names

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
 
}

newName=arr[getRndInteger(0,arr.length-1)]+" "+arr[getRndInteger(0,arr.length-1)];

alert(newName);