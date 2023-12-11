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


var nextButton = document.querySelector("div button:last-of-type");

var prevButton = document.querySelector("div button:first-of-type");

var currentIndex = 0;

var slides = document.querySelectorAll("section img");

var total = slides.length;


nextButton.onclick = next;
prevButton.onclick = prev;



function next(){
    currentIndex = (currentIndex + 1) % total;
    slide(currentIndex);
    console.log('next')
        console.log(currentIndex)

    setTimeout(function () {
        currentIndex = nextIndex;
    }, 500);}


function prev(){
    currentIndex = (currentIndex - 1 + total) % total;
    slide(currentIndex);
    console.log('previous leon')
    console.log(currentIndex)
setTimeout(function () {
        currentIndex = nextIndex;
    }, 500);}

function slide(index){
    var prevNext = -index * 100 + '%';
    document.querySelector("div section").style.transform = 'translateX(' + prevNext + ')';

}

