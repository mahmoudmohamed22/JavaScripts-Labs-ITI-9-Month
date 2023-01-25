do{
    var arrN=prompt("Enter size array");
    
        
}while(! Number(arrN));

do{
    var arrStr=prompt("Enter array Values for sub1");
    
    arr1=arrStr.split(",");
    
}while(!arr1.every(function(value){return Number(value);})   || !(arrN==arr1.length));

function checkChoices(val) {return val.match(/^[A-Ha-h]$/)} //check range choices



//checkChoices
do{
     
    do{
        var char=prompt("enter one of the following letter");
    
    }while( Number(char)  || !(char.length==1) || !checkChoices(char) );
    
    if(char=="a" || char=="A")  //a : to display array with the same receiving order
    {
      //  document.write("<h1>"+arr1.join(" ")+"</h1>");
       console.log(arr1.join(" "));
        b=confirm("Do you want to repeate running?");

    }else if(char=="b" || char=="B") //b : to display array with ascending order
    {
        //document.write("<h1>"+arr1.sort(function(a,b){return a-b;}).join(" ")+"</h1>");
        console.log(arr1.sort(function(a,b){return a-b;}).join(" ")); 
        b=confirm("Do you want to repeate running?");

    }else if(char=="c" ||char=="C") //c : to display array with descending order
    {
        //document.write("<h1>"+arr1.sort(function(a,b){return b-a;}).join(" ")+"</h1>");
        console.log(arr1.sort(function(a,b){return b-a;}).join(" "));
        b=confirm("Do you want to repeate running?");

    }else if(char=="d" ||char=="D") //d : to reversed version of original array 
    {
        //document.write("<h1>"+arr1.reverse().join(" ")+"</h1>");
        console.log(arr1.reverse().join(" "));
        b=confirm("Do you want to repeate running?");
        
    }else if (char=="e"|| char=="E") //e : to display even numbers only from array if there no even numbers , display alert to inform user with that
    {   
        even=arr1.filter(function(value){return value%2==0;})
        even.length>0?
        //document.write( "<h1>"+arr1.filter(function(value){return value%2==0;}).join(" ")+"</h1>"):
        console.log(arr1.filter(function(value){return value%2==0;}).join(" ")):
        alert("No Exist even number in array");
        b=confirm("Do you want to repeate running?");
    }else if(char=="f" ||char=="F")//f : receive number from user then display all numbers from array which divisible by received number , if there no result inform user with that
    {
        var num=prompt("enter your number to check array numbers is divisble or no");
        numcheck=arr1.filter(function(value){return value%num==0;});
        numcheck.length>0?
       // document.write( "<h1>"+numcheck.join(" ")+"</h1>"):
       console.log(numcheck.join(" ")):
        alert("No Exist number in array is divislbe");
        b=confirm("Do you want to repeate running?");
        
    }else if(char=="g" ||char=="G")//g : display new array with 30% discount for all numbers in original array
    {  
        //document.write("<h1>"+arr1.map(function(value){return value-value*0.3;}).join(" ")+"</h1>");
        console.log(arr1.map(function(value){return value-value*0.3;}).join(" "));
        b=confirm("Do you want to repeate running?");


    }else if(char=="h"||char=="H")//h : display string which represent all numbers of array concated with ***
    {
       // document.write("<h1>"+arr1.join("***")+"</h1>");
       console.log(arr1.join("***"));
        b=confirm("Do you want to repeate running?");
    }

}while(b);
// //qeustions();
// //setTimeout(qeustions(),500);


// // setTimeout(b=confirm("Do you want to repeate running?"),2);
// b=confirm("Do you want to repeate running?");
// if(b)
// {
//    // setTimeout(qeustions(),500);
//    qeustions();
// }
