// JavaScript Document
console.log("hi");

var menuButton = document.querySelector("button");

var menu = document.querySelector("nav");

menuButton.onclick = openMenu;

function openMenu(){
    menu.classList.add("toonMenu");
console.log("hallo")
}

var menuSluiten = document.querySelector("nav");

menuSluiten.onclick = sluitMenu;

function sluitMenu(){
    menu.classList.remove("toonMenu");
    console.log("doei")
}

