function onlyLetters(str) {
    return Boolean(str.match(/^[A-Za-z ]*$/));
}

do{
var strname=prompt("Enter your name? ");
}while(!onlyLetters(strname));

nameArr=strname.split(" ");
var newStr="";
for(var i=0;i<nameArr.length;i++){
     
    for(var j=0;j<nameArr[i].length;j++)
    {
        if(j==0)
        {
            newStr=newStr+nameArr[i][j].toUpperCase();
        }else
        {
            newStr=newStr+nameArr[i][j].toLowerCase();
        }
    }
    newStr=newStr+" ";
}

document.write("<h1> your Name is "+newStr+"</h1>");

