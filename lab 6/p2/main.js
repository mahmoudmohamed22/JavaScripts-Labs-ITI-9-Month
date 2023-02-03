let arr=[3,1,6,3];
function getResult(op, ...myarr) // .. rest
{
    return eval(myarr.join(op));

}

console.log(getResult("+",...arr)); //spread to spread elements array

console.log(getResult("-",...arr));