var imagearr = ["../UP/1.jpg", "../UP/2.jpg", "../UP/3.jpg", "../UP/4.jpg", "../UP/5.jpg"];
var index = 0;
b=false;
function startfun() {
   if(!b)
   { t=setInterval("nextfun()", 2000);
       b=true;
   }
}
function nextfun() {
    index++;
    if (index >= imagearr.length) index = 0;
    myimg.src = imagearr[index];
}
function prevfun() {
    index--;
    if (index < 0) index = imagearr.length-1;
    myimg.src = imagearr[index];
}
function stopfun() {
   if(b){
    clearInterval(t);
    b=false;
   }
}