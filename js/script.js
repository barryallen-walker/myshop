// var mybutton = document.getElementById("myBtn");
var myNav = document.getElementById('navbar');
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    // "use strict";
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        myNav.classList.add("sticky-top");
        myNav.classList.add("navbar-style1");
        // mybutton.style.display = "block";
    }
    else {
        myNav.classList.remove("sticky-top");
        myNav.classList.remove("navbar-style1");
        // mybutton.style.display = "none";
    }
};

// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }
// var yourDateToGo = new Date();
// yourDateToGo.setDate(yourDateToGo.getDate() + 1);

// var timing = setInterval(
//     function () {

//         var currentDate = new Date().getTime();
//         var timeLeft = yourDateToGo - currentDate;

//         var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//         if (days < 10) days = "0" + days;
//         var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         if (hours < 10) hours = "0" + hours;
//         var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//         if (minutes < 10) minutes = "0" + minutes;
//         var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
//         if (seconds < 10) seconds = "0" + seconds;

//         document.getElementById("countdown").innerHTML = days + "d" + hours + "h" + minutes + "m" + seconds + "s";
//         if (timeLeft <= 0) {
//             clearInterval(timing);
//             document.getElementById("countdown").innerHTML = "It's over";
//         }
//     }, 1000);

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:3,
                nav:true,
                dots: false,
                dotsData: false,
            },
            600:{
                items:5,
                nav:true,
                dots: false,
                dotsData: false,
            },
            1000:{
                items:7,
                nav:true,
                loop:false,
                dots: false,
                dotsData: false,
            }
        }
    })

    $('.cd-dropdown-trigger').click(function(){
        console.log('click');
        $('.cd-dropdown').toggleClass('dropdown-is-active');
    });
});