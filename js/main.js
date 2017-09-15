// Make it rain!!!
$('#brunch').show();
$('#dinner').hide();
$('#drinks').hide();
$('.modalwrap').hide();
$('.brunch').css("text-decoration", "underline");

$('.brunch').on('click', function (e) {

  e.preventDefault();

  $('#brunch').fadeIn(0);
  $('#dinner').hide();
  $('#drinks').hide();
  $('.brunch').css("text-decoration", "underline");
  $('.dinner').css("text-decoration", "none");
  $('.drinks').css("text-decoration", "none");
});

$('.dinner').on('click', function (e) {

  e.preventDefault();

  $('#dinner').fadeIn(350);
  $('#brunch').hide();
  $('#drinks').hide();
  $('.dinner').css("text-decoration", "underline");
  $('.brunch').css("text-decoration", "none");
  $('.drinks').css("text-decoration", "none");
});

$('.drinks').on('click', function (e) {

  e.preventDefault();

  $('#drinks').fadeIn(350);
  $('#brunch').hide();
  $('#dinner').hide();
  $('.drinks').css("text-decoration", "underline");
  $('.brunch').css("text-decoration", "none");
  $('.dinner').css("text-decoration", "none");

});

$('.reservation').on('click', function (e) {
  e.preventDefault();
  $('.reservation').hide();
  $('.modalwrap').fadeIn(350);

});

$('.close').on('click', function (e) {
  e.preventDefault();
  $('.reservation').fadeIn(350);
  $('.modalwrap').hide();

});

$(window).on('scroll', function () {
  // Step 1: Google $(window).scrollTop();
  var distanceScrolled = $(window).scrollTop();

  if (distanceScrolled > 1) {
    $('nav').css("opacity", ".8")
  } else {
    $('nav').css("opacity", "1")
  }

});


var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("carousel_image");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
