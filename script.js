document.getElementById("info-akk").addEventListener("click", function() {
    document.getElementById("mmenu").classList.add("open")
})
document.getElementById("close-info-akk").addEventListener("click", function() {
    document.getElementById("mmenu").classList.remove("open")
})

var counter=0;
var table=document.getElementById("table")
var plus=document.getElementById("b-plus")
var minus=document.getElementById("b-minus")
plus.addEventListener("click", function() {
    counter++;
    table.textContent = 'click: ' + counter;
    create();
})
minus.addEventListener("click", function() {
    counter--;
    table.textContent = 'click: ' + counter;
    create();
})

let peoples = ['X-Timur', ' Vanya', 'kiril', 'kassya88012'];
console.log(peoples);
function create() {
    console.log(counter)
}