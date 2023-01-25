do{
    var arrStr=prompt("Enter array Values and don't repeated value");
    
    arr=arrStr.split(",");
    
    
    }while(!arr.every(function(value)     //check all elements is numbers 
    {
        return Number(value);
    }));

   // var duplicate=arr.map(function(value,index,ob){if(ob.indexOf(value)!==index ) return index}).filter(function(value){return value!==undefined});
var duplicate = arr.map(function(val, index,o) {if(o.indexOf(val) !== index) return index }).filter(function(val) {return val !== undefined});
     // Create HTML Table
     document.write("<table border = '1px solid black' style = 'border-collapse:collapse' > <tr> <th>values</th> </tr> " 
     + arr.map(function(val) {return "<tr> <td> " + val + "</td> </tr>"}).join("")
     + "</table>")
     
 // Display Duplicated rows
 duplicate.forEach(function(val) {document.write("<h3> repeated row number: " + (val+1) +"</h3>")});
  
    