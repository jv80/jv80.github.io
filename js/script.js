/*
Author: Jhonny Vasquez
Date:   11/18/2020
Notes:  Personal website

This jquery script animates my personal webpage.
*/

$('.nav li a').on('click', function(event){
event.preventDefault();
var target = $(this).attr('href');
var offsetTop = $(target).offset().top;
$('html, body').animate({
scrollTop:offsetTop},1000);
})
    