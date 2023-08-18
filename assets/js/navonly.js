// Select the mobile menu button and the mobile menu
const mobileMenuButton = document.querySelector('.slicknav_btn');
const mobileMenu = document.querySelector('.slicknav_nav');

// Add a click event listener to the mobile menu button
mobileMenuButton.addEventListener('click', function() {
  // Toggle the 'slicknav_collapsed' class on the mobile menu button
  this.classList.toggle('slicknav_collapsed');
  
  // Toggle the 'slicknav_hidden' class on the mobile menu
  mobileMenu.classList.toggle('slicknav_hidden');
  
  // Toggle the 'display' property of the mobile menu
  if (mobileMenu.style.display === 'none') {
    mobileMenu.style.display = 'block';
  } else {
    mobileMenu.style.display = 'none';
  }
});

