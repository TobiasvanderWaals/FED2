// JavaScript Document
console.log("hi");

var menuButton = document.querySelector("button");

var menu = document.querySelector("nav");

menuButton.onclick = openMenu;

function openMenu(){
    menu.classList.add("toonMenu");
console.log("hallo")
} 

var menuSluiten = document.querySelector("nav button");

menuSluiten.onclick = sluitMenu;

function sluitMenu(){
    menu.classList.remove("toonMenu");
    console.log("doei")
}

// var dropdown = document.querySelector("summary");

// var dropdownmenu = document.querySelector("details");

// dropdown.onclick = openDetails;

// function openDetails(){
//     dropdownmenu.classList.add("toonDropDown");
// console.log("bonjour")
// } 

// var dropSluiten = document.querySelector("summary.toonDropDown");

// dropSluiten.onclick = sluitDrop;

// function sluitDrop(){
//     dropdownmenu.classList.remove("toonDropDown");
//     console.log("OuRevoir")
// }

