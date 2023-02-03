var get;
var index=1;
function getValueTxt()
{
  get=document.querySelector("#txt").value;

}



function addButton()
{
  getValueTxt();
  myAddRow();
}


function myAddRow() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);//insert last row
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = index;
  cell2.innerHTML = get;
  index++;
}

function RowLength(){
  var rowCount = document.getElementById('myTable').rows.length-1;
  //document.write(rowCount);
  document.getElementById("len").innerHTML=rowCount;

}
