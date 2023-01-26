var arrColor=["../UP/1.jpg","Pink","Orange","Yellow","Purple","Green","Blue","Brown","white","Coral","Gold"];

var i=10;
function changeColor()
{   
   
   document.getElementById("output").innerHTML = i;
  // document.body.style.backgroundColor=arrColor[i];
  document.body.style.backgroundImage=`url("${arrColor[i]}")`;
   //document.body.style.backgroundImage=`url("../UP/1.jpg")`;

   i--;
      if(i===-1){
        stopChangeColorfun();
        window.open('', '_self').close();
       //  window.close();
      }
     
}

function stopChangeColorfun() {
   clearInterval(t);
}
var customWindow ;
function ChangeColorfun()
{ 
  // window.open('', '_self', '');
  t=setInterval('changeColor()',500);
}

ChangeColorfun();
  

