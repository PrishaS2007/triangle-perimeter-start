// Triangle Perimeter Assignment Start Code
document.getElementById("btn").addEventListener("click", btnClicked)

// Input
function btnClicked() {
let x1In = +document.getElementById("x1").value;
let x2In = +document.getElementById("x2").value;
let x3In = +document.getElementById("x3").value;
let y1In = +document.getElementById("y1").value;
let y2In = +document.getElementById("y2").value;
let y3In = +document.getElementById("y3").value;

// Process
let AB = dist(x1In, x2In, y1In, y2In);
let AC = dist(x1In, x3In, y1In, y3In);
let BC = dist(x2In, x3In, y2In, y3In);
let Perimeter = (AB + AC + BC);
document.getElementById('output4').innerHTML = Perimeter
document.getElementById('output1').innerHTML = AB
document.getElementById('output3').innerHTML = BC
document.getElementById('output2').innerHTML = AC
}

function dist(x1, x2, y1, y2) {
return Math.sqrt((x2 - x1)** 2 + (y2 - y1) ** 2);
}