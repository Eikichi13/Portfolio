console.log('connecté');

function copypast() {
    // Get the text field
    const copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Email copié !");
}

function mobile() {
    const contact = document.querySelector('.contact_mobile');
    const btn = document.querySelector('.btn_mobile');
    if (contact.style.display === "none") {
      contact.style.display = "block";
      btn.style.backgroundImage = "url('img/chevron-up-svgrepo-com.svg')";
    } else {
      contact.style.display = "none";
      btn.style.backgroundImage = "url('img/chevron-down-svgrepo-com.svg')";
    }
}

const fermer = document.getElementById('continue');
const popup = document.querySelector('.popup');

fermer.addEventListener('click', function(){
  popup.style.display = "none";
})