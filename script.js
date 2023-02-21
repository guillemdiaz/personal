/*********************** author: Guillem Díaz ****************************/

// Changes the content of the div tag in the experience section
function changeContent() {
    // button 1
    var btn1 = document.getElementById("btn1");
    // button 2
    var btn2 = document.getElementById("btn2");
    // gets the class "experience"
    var experience = document.getElementsByClassName("experience")[0];

    // changes the content of the div depending on the button's id
    if (event.target.id == "btn1") {
        setTimeout(function () {
            experience.getElementsByTagName("h3")[0].innerHTML =
                "Logistics Order Preparer - Part Time";
            experience.getElementsByTagName("p")[0].innerHTML =
                "June - September 2022";
            experience.getElementsByTagName("div")[0].innerHTML =
                "Preparation of food orders with voice picking and machinery";
            experience.style.fontStyle = "normal";
        }, 100);
    } else if (event.target.id == "btn2") {
        setTimeout(function () {
            experience.getElementsByTagName("h3")[0].innerHTML =
                "Bàsquet Vilafant";
            experience.getElementsByTagName("p")[0].innerHTML =
                "July - August 2021";
            experience.getElementsByTagName("div")[0].innerHTML =
                "Monitor of a basketball summer camp for a group of 15 children";
            experience.style.fontStyle = "normal";
        }, 100);
    }
}

// adds the class "animate" when the skills section is in view
function reveal() {
    var reveals = document.querySelectorAll(".skill-per");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("animate");
        } else {
            reveals[i].classList.remove("animate");
        }
    }
}

window.addEventListener("scroll", reveal);

// scrolls to the top of the page
function scrollToTop() {
    window.scrollTo(0, 0);
}
