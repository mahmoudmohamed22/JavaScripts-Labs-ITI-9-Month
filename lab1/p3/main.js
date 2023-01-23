var resultSum=0;
var resultProd=1;
var resultDiv=1;
var arr=[];
for(var i=0;i<3;i++)
 {
        do
        {   
    value=prompt("enter number "+(i+1));
      }while(isNaN(value));
    if(!isNaN(value))
    {
       arr[i]=parseInt(value);
    }
 }

 // print first line for summation numbers 
 for(var i=0;i<arr.length;i++)
 {
 

resultSum=parseInt(resultSum)+parseInt(arr[i]);

if(i===0)
        document.write("sum of the values ");
if(i!=(arr.length-1))
        document.write(arr[i]+"+");
else
document.write(arr[i]+"="+parseInt(resultSum)+"<br>");
 }


//print second line for products numbers

for(var i=0;i<arr.length;i++)
 {
 

resultProd*=parseInt(arr[i]);

if(i===0)
        document.write("Product of the values ");
if(i!=(arr.length-1))
        document.write(arr[i]+"*");
else
document.write(arr[i]+"="+parseInt(resultProd)+"<br>");
 }


//print third line for divided numbers 

for(var i=0;i<arr.length;i++)
 {
 



if(i===0){
        resultDiv=arr[0];
        document.write("Product of the values ");
}else 
{
        resultDiv/=parseInt(arr[i]);
}

if(i!=(arr.length-1))
        document.write(arr[i]+"/");
else
document.write(arr[i]+"="+parseInt(resultDiv)+"<br>");
 }
