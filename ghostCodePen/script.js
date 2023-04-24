/************
 * N.B. The ghosts are SVGs, so it's 'fill', not 'color' you need to change
 *************/

// GET BY ID
const ghost1 = document.getElementById("first_ghost");
ghost1.style.fill = "orange";

// GET BY CLASSNAME
const ghost2 = document.getElementsByClassName("second_wave");
for (const item of ghost2) {
  item.style.fill = "blue";
}

// GET AREA, DRILL DOWN using GET BY TAG NAME
const area51 = document.getElementById("area-51");
const area51Ghost = area51.getElementsByTagName("svg");
for (const item of area51Ghost) {
  item.style.fill = "green";
}

// querySelector nth-child
const area512ndGhost = document.querySelector("#area-51 svg:nth-child(3)");
area512ndGhost.style.stroke = "red";
area512ndGhost.style.strokeWidth = "15px";

// from the last child, select the div immediately above the ghost and make its border '5px dashed'
const lastChild = document.getElementById("first_ghost");
const target = lastChild.previousElementSibling;
target.style.border = "5px dashed";

// querySelectorAll
const area50 = document.getElementById("area-50");
const area50Ghost = area50.querySelectorAll("svg");
for (const item of area50Ghost) {
  item.style.fill = "red";
}
