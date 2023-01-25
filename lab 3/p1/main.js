do{
var arrStr=prompt("Enter array Values");

arr=arrStr.split(",");


}while(!arr.every(function(value)     //check all elements is numbers 
{
    return !isNaN(value);
}));


document.write("<h1>The values arr are "+arr.join(" ")+"</h1>");