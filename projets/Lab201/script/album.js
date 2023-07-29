const mybutton = document.querySelector(".top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const icone = document.querySelector('.burger i');
const modal = document.querySelector('.menu_burger');

icone.addEventListener('click', function(){
    console.log("icone cliqué");
    modal.classList.toggle('change_menu');
    icone.classList.toggle('fa-times');
})