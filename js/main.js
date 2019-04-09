const current = document.getElementById('current');
const imgs = document.querySelectorAll('.gallery__imgs img');
const opacity = 0.4;

// Set first image opacity
imgs[0].style.opacity = 0.6;

const imgClick = e => {
    // Reset the opacity
    imgs.forEach(img => img.style.opacity = 1);

    // Change current image to source of clicked image
    current.src = e.target.src;

    // Add fade-in class to current image
    current.classList.add('fade-in');

    // Remove fade-in class after .5 seconds
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // Change the opacity of clicked image
    e.target.style.opacity = opacity;
}

imgs.forEach(img => img.addEventListener('click', imgClick));