var imgName = prompt("please enter an image name");
var fColor = prompt("please enter a color");
document.write(`<p style="color:${fColor}">Image name:${imgName} </p> `);
document.write(`<img src="${imgName}.jpeg" width="200" height="200" style="border:5px solid ${fColor}">`);        
    