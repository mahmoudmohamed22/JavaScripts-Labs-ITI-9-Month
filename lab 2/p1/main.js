function onlyLetters(str) {
    return Boolean(str.match(/^[A-Za-z ]*$/));
}

do{
var strname=prompt("Enter your name? ");
}while(!onlyLetters(strname));

do
{
var strNP=prompt("Enter your number phone");
}while(!(strNP.length==11) || !(strNP.substring(0,3)==="010" || strNP.substring(0,3)==="011" || strNP.substring(0,3)==="012" || strNP.substring(0,3)==="015"));



document.write("<h1> your Name is "+strname+ " and your number phone is "+strNP+"</h1>");

