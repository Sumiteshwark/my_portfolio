$(document).ready(function(){

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});


let year = new Date().getFullYear();
document.getElementById("year").innerHTML=year;