function onlyBinary(str) {
     
    return Boolean(str.match(/^[0-1]*$/));
}
function onlyOctal(str) {
     
    return Boolean(str.match(/^[0-7]*$/));
}
function onlydeciaml(str) {
     
    return Boolean(str.match(/^[0-9]*$/));
}
function onlyhexa(str) {
     
    return Boolean(str.match(/^[0-9A-Fa-f]*$/));
}


do{

var userNum=prompt("Enter your User Number? ");
var InitialRadix=prompt("Enter your Initial radix? ");
    


}while(isNaN(userNum) || ( (InitialRadix.constructor.name===2 && onlyBinary(userNum) ) ||(InitialRadix.constructor.name===8 && onlyOctal(userNum) )||
(InitialRadix.constructor.name===10 && onlydeciaml(userNum) ) ||  (InitialRadix.constructor.name===16 && onlyhexa(userNum) ))  );



do{
    var TargetRadix=prompt("Enter your Target radix? ");
}while(isNaN(TargetRadix));




document.write("<h1> your output is "+parseInt(userNum,InitialRadix).toString(TargetRadix)+"</h1>");

