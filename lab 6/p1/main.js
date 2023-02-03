let arr=[50,100,-5,0,30,80,40,10,8];

 //part one 
ascArr=arr.sort((a,b)=>a-b);//ascending sort
document.write("<h1> Ascending Array = "+ascArr.join(" ")+"</h1>");

descArr=arr.sort((a,b)=>b-a);//descending sort
document.write("<h1> Descending Array = "+descArr.join(" ")+"</h1>");


//filter numbers than 50
document.write("<h1> Filter Array"+arr.filter((val)=>val>50)+"</h1>");


//max number and min number

//maxm
document.write("<h1> Maxm = "+arr.reduce((a,b)=>Math.max(a,b))+"</h1>");

//min
document.write("<h1> Minm = "+arr.reduce((a,b)=>Math.min(a,b))+"</h1>");
