
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 50;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.rem('active');
        }
    }
}

var divs = document.getElementsByClassName('square');
// get window width and height
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

if (winWidth > 600) {
    document.getElementById('b1').classList.toggle('active');
    document.getElementById('b2').classList.toggle('active');
    document.getElementById('b3').classList.toggle('active');
    document.getElementById('b4').classList.toggle('active');
    document.getElementById('b5').classList.toggle('active');
    document.getElementById('b6').classList.toggle('active');
    document.getElementById('b7').classList.toggle('active');
    document.getElementById('b8').classList.toggle('active');
}

 // i stands for "index". you could also call this banana or haircut. it's a variable
for ( var i=0; i < divs.length; i++ ) {
                
    // shortcut! the current div in the list
    var thisDiv = divs[i];
                
    // get random numbers for each element
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);
                
    // update top and left position
    thisDiv.style.top = randomTop +"px";
    thisDiv.style.right = randomLeft +"px";
                
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
                
return Math.random() * (max - min) + min;
                
}

function toggle() {
    document.getElementById('b1').classList.toggle('active');
    document.getElementById('b2').classList.toggle('active');
    document.getElementById('b3').classList.toggle('active');
    document.getElementById('b4').classList.toggle('active');
    document.getElementById('b5').classList.toggle('active');
    document.getElementById('b6').classList.toggle('active');
    document.getElementById('b7').classList.toggle('active');
    document.getElementById('b8').classList.toggle('active');
}

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("open");
})