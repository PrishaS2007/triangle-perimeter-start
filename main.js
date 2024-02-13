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
let AB = dist(x1In, y1In, x2In, y2In);
let AC = dist(x1In, y1In, x3In, y3In);
let BC = dist(x2In, y2In, x3In, y3In);
let Perimeter = (AB + AC + BC);
}

let calcDist = Math.sqrt((x2 - x1)** 2 + (y2 - y1) ** 2)



function dist(x1In,y1In,x2In,y2In) {
    let calcDistst = Math.sqrt((x2 - x1)** 2 + (y2 - y1) ** 2)
}