$(document).ready(function() {
            // Change background image of the page at load
	var imageUrl = "img/imgFeb/imgFeb"+ getRandomIntInclusive(101,264)+".jpeg";
    $("body").css("background-image", "url(" + imageUrl + ")");
    console.log(imageUrl);
  });

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
