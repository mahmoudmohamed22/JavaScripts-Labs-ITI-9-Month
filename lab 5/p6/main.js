let fname;
let age;
let color;
let gender;
function Register()
{
    event.preventDefault();
  fname=document.getElementById("fname").value;
  age=document.getElementById("age").value;
   color=document.getElementById("color").value;
  gender=document.getElementsByName("test").value;
 
 
 
 if(gender=="man")
 {
    openMan();

 }else
 {
    openWoman();
 }
}

function openMan()
{
     var child=open("man.html");
     child.document.getElementById("lb").innerHTML=fname;
     child.document.getElementById("lb").style.color=color;

}

function openWoman()
{
   
    var child=open("woman.html");
     
     child.document.getElementById("test").style.color=color;
     var elem = child.document.getElementById('text');
     elem.textContent = elem.textContent + fname;

}