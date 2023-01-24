var b=confirm("Do you fly?");
if(b)
{
    b=confirm("are you wild?");
    if(b){
      alert("Eagle");
    }else
    {
        alert("Parrot");
    }
     
}else{
    b=confirm("Do you live under sea?");
    if(b)
    { 
        b=confirm("are you wild?");
        if(b)
        {
           alert("Shark");
        }else
        {
            alert("Doplhin");
        }

    }else
    {
        b=confirm("are you wild?");
        if(b)
        {
           alert("lion");
        }else
        {
            alert("cat");
        }
    }
}