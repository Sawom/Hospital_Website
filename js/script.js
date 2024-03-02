document.addEventListener('DOMContentLoaded', function () {
    let mobileInput = document.getElementById('mobileInput');
    let emailInput = document.getElementById('emailInput');
    let mobileRadio = document.getElementById('mobileRadio');
    let emailRadio = document.getElementById('emailRadio');

    mobileRadio.addEventListener('change', function () {
      mobileInput.style.display = 'block';
      emailInput.style.display = 'none';
    });

    emailRadio.addEventListener('change', function () {
      mobileInput.style.display = 'none';
      emailInput.style.display = 'block';
    });
});


function loadImage(event) {
    const input = event.target;
    const reader = new FileReader();

    reader.onload = function(){
      const avatarImg = document.querySelector('.avatar-img');
      avatarImg.src = reader.result;
    };

    reader.readAsDataURL(input.files[0]);
}