// section 4.2- receive number from user then display it with different locals 
// var input =prompt("enter your numbers ?");
// var result = parseInt(input);
// document.write(result.toLocaleString("ar-EG")+"<br>");
// document.write(result.toLocaleString("de-DE")+"<br>");
// document.write(result.toLocaleString("en-IN")+"<br>");

/*******************************/ 

// 4.3- var arr = [10.2, 20, 34, 333.12345];
// 	write js progrm to display all numbers inside array with the same length
// 	10.2000000
// 	20.0000000
// 	34.0000000
// 	333.123450


// var arr= [10.2 , 20 ,34,333.12345];

// for(var i=0;i<arr.length;i++)
// {   
//     document.write("<h3>");
//     document.write(arr[i].toPrecision(10)+"</h3><br>");
// }


/********************** */

// 4.4- discuss with your lab instructor the results of the following statements 
// 	A- var t1=new Number(10); 
// 	   var t2= new Number(10);
// 	   console.log(t1==t2);
// 	--------------------
// 	B- console.log([1,2,3]==[1,2,3])
// 	--------------------
	
var t1=new Number(10); 
var t2= new Number(10);
console.log(t1==t2);  //result false

console.log([1,2,3]==[1,2,3]) //result false 

//why false because compare two object by identiy check , it's compare by address object not  integer value 
console.log(t1.constructor.name==t2.constructor.name); //compare with value check
console.log([1,2,3].constructor.name==[1,2,3].constructor.name) //compare with values check 