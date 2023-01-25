
do{
    var arrStr=prompt("Enter array Values for sub1");
    
    arr1=arrStr.split(",");
    
}while(!arr1.every(function(value)     //check all elements is numbers 
    {
        return Number(value);
    }))

do{
        var arrStr=prompt("Enter array Values for sub2");
        
        arr2=arrStr.split(",");
        
}while(!arr2.every(function(value) {return Number(value);})   || !(arr2.length===arr1.length) )

do{
    var arrStr=prompt("Enter array Values for sub3");
    
    arr3=arrStr.split(",");
    
}while(!arr3.every(function(value) {return Number(value);})   || !(arr3.length===arr2.length) )

//check all array same length for grades

grads=[arr1,arr2,arr3];

// Calculating the sum
sum = grads.map(function(val){ return val.reduce(function(a,b) { return parseInt(a) + parseInt(b) }) } );
for(var i =0; i<grads.length; i++){
    grads[i].push(sum[i]);
}


// Creating an HTML table
document.write("<table cellspacing='10' cellpadding='10' align='center' border='2' width='50%'><tr><th>Str1</th><th>Str2</th><th>Str3</th><th>Sum</th></tr>"+
                 grads.map(function(val){ return "<tr>" + val.map(function(val){return "<td>" + val + "</td>"}).join("") +"</tr>"}).join("")
+ "</table>");
