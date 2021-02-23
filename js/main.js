const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// variables
var currentTime = document.getElementById("currentTime");
var currentDay = document.getElementById("currentDay");
var layout = document.querySelector(".layout");
var currentDate = document.querySelector(".layout__currentDate");
var usersPart = document.querySelector(".layout__users");
var loginPart = document.querySelector(".layout__loginPart");
var users = document.querySelectorAll(".layout__usersList li");
var userName = document.getElementById("userName");
var inputPassword = document.querySelector('.inputPassword');
var eyeIcon = document.querySelector('.inputWrapper>.eyeIcon');
var errorPassword = document.querySelector('.inputWrapper>.error');

var currentDateInterval = setInterval(function () {

    var now = new Date();

    var hours;
    var minutes;

    now.getHours().toString().length == 1 ? hours = "0" + now.getHours().toString() : hours = now.getHours().toString();
    now.getMinutes().toString().length == 1 ? minutes = "0" + now.getMinutes().toString() : minutes = now.getMinutes().toString()

    var week = days[now.getDay()];
    var month = monthNames[(now.getMonth())];
    var day = now.getDate();

    currentTime.innerText = hours + ":" + minutes;
    currentDay.innerText = week + ", " + month + " " + day;
}, 1000);

// lock 

document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.which == 86) {
        layout.style.transform = "translateY(0%)";
        inputPassword.value = "";
    }
});

// log in
layout.addEventListener('click', function (e) {
    fade(currentDate);
    unFade(loginPart);
    unFade(usersPart);
})

// fade in and fade out

function unFade(element) {
    element.style.opacity = 1;
}

function fade(element) {
    element.style.opacity = 0;
}

//change user

for (let i = 0; i < users.length; i++) {
    users[i].addEventListener('click', function () {
        userName.innerText = this.childNodes[3].innerText;
        inputPassword.value = "";
        errorPassword.style.opacity = 0;
    })
}

//eye icon
eyeIcon.addEventListener('mousedown', function () {
    inputPassword.setAttribute("type", "text");
    this.childNodes[1].style.color = "rgba(30, 95, 170, 0.808)";
})

eyeIcon.addEventListener('mouseup', function () {
    inputPassword.setAttribute("type", "password");
    this.childNodes[1].style.color = "";
})

//enter to page
document.addEventListener("keydown", function (e) {
    debugger;
    if (e.which == 13 && inputPassword.value.length >=1) {
        if (inputPassword.value == "3101121" && userName.innerText == "Nizami Alimamedov") {
            errorPassword.style.opacity = 0;
            layout.style.transform = "translateY(-100%)";
        }
        else {
            errorPassword.style.opacity = 1;
        }
    }
});
