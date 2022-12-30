
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

getRapid();
getBlitz();
getBullet();
    
async function getRapid() {
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
    
    new Chart(document.getElementById("line-chart1"), {
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
                    fontSize: 18
                }
            },
            title: {
                display: true,
                text: 'Rapid Rating (Lichess)',
                fontSize: 16,
                fontColor: "black"
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontSize: 15,
                        fontColor: "black"
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: 14,
                        fontColor: "black"
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

async function getBlitz() {
    const response = await fetch(
'https://lichess.org/api/user/yeebruh21/rating-history');
    console.log(response);
    const data = await response.json();
    console.log(data);
    length = data[1].points.length;
    console.log(length);
    
    labels = [];
    values = [];
    for (i = 0; i < length; i++) {
        labels.push(data[1].points[i][0] + "-" + (data[1].points[i][1]+1) + "-" + data[1].points[i][2]);
        values.push(data[1].points[i][3]);
    }
    
    new Chart(document.getElementById("line-chart2"), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Rating",
                    data: values,
                    borderColor: '#f29c06',
                    backgroundColor: 'rgba(216, 143, 18, 0.2)'
                }
            ]
        },
        options: {
            legend: { 
                display: false,
                labels: {
                    fontSize: 18
                }
            },
            title: {
                display: true,
                text: 'Blitz Rating (Lichess)',
                fontSize: 16,
                fontColor: "black"
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontSize: 15,
                        fontColor: "black"
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: 14,
                        fontColor: "black"
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

async function getBullet() {
    const response = await fetch(
'https://lichess.org/api/user/yeebruh21/rating-history');
    console.log(response);
    const data = await response.json();
    console.log(data);
    length = data[0].points.length;
    console.log(length);
    
    labels = [];
    values = [];
    for (i = 0; i < length; i++) {
        labels.push(data[0].points[i][0] + "-" + (data[0].points[i][1]+1) + "-" + data[0].points[i][2]);
        values.push(data[0].points[i][3]);
    }
    
    new Chart(document.getElementById("line-chart3"), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Rating",
                    data: values,
                    borderColor: '#ef3232',
                    backgroundColor: 'rgba(224, 85, 85, 0.2)'
                }
            ]
        },
        options: {
            legend: { 
                display: false,
                labels: {
                    fontSize: 18
                }
            },
            title: {
                display: true,
                text: 'Bullet Rating (Lichess)',
                fontSize: 16,
                fontColor: "black"
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontSize: 15,
                        fontColor: "black"
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: 14,
                        fontColor: "black"
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

var totalLosses = 1416 + 84;
var totalWins = 2317 + 156;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("total-wins").innerHTML = "Total Win Count: " + (myObj.count.win + totalWins);
    document.getElementById("total-losses").innerHTML = "Total Loss Count: " + (myObj.count.loss + totalLosses);
}
};
xmlhttp.open("GET", "https://lichess.org/api/user/yeebruh21");
xmlhttp.send();

xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("world-rank").innerHTML = "World Rank (Rapid): " + myObj.rank;
}
};
xmlhttp.open("GET", "https://lichess.org/api/user/yeebruh21/perf/rapid");
xmlhttp.send();

// highlight game
window.addEventListener("message",e=>{e['data']&&"9804765"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+30}px`)});