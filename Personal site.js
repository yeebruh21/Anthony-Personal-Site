
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

getData();
    
            async function getData() {
                const response = await fetch(
    'https://lichess.org/api/user/yeebruh21/rating-history');
                console.log(response);
                const data = await response.json();
                console.log(data);
                length = data[2].points.length;
                console.log(length);
    
                labels = [];
                values = [];
                for (i = 0; i < length; i++) {
                    labels.push(data[2].points[i][0] + "-" + (data[2].points[i][1]+1) + "-" + data[2].points[i][2]);
                    values.push(data[2].points[i][3]);
                }
    
                new Chart(document.getElementById("line-chart"), {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: "Rating",
                                data: values,
                                borderColor: '#5bb0ad',
                                backgroundColor: 'rgba(129, 171, 169, 0.2)'
                            }
                        ]
                    },
                    options: {
                        legend: { 
                            display: false,
                            labels: {
                                fontSize: 22
                            }
                        },
                        title: {
                            display: true
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    fontSize: 25
                                }
                            }],
                            xAxes: [{
                                ticks: {
                                    fontSize: 20
                                }
                            }]
                        },
                        elements: {
                            point: {
                                radius: 1,
                                hitRadius: 4
                            }
                        }
                    }
                });
    
            }

            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myObj = JSON.parse(this.responseText);
                document.getElementById("user").innerHTML = myObj.id;
                document.getElementById("blitz-rating").innerHTML = myObj.perfs.blitz.rating;
                document.getElementById("rapid-rating").innerHTML = myObj.perfs.rapid.rating;
                document.getElementById("total-blitz").innerHTML = "Games: " + myObj.perfs.blitz.games;
            }
            };
            xmlhttp.open("GET", "https://lichess.org/api/user/yeebruh21");
            xmlhttp.send();