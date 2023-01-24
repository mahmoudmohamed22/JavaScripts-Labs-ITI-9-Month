var result=0;
 do{
var msg=prompt("enter your numbers?");
    
        if(!isNaN(msg))
        {
        result+=parseInt(msg);
        }
        
 }while(parseInt(msg)!=0 && result<100);

document.write(result);
