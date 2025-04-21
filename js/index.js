const websiteLogo = document.querySelector('#logo')

websiteLogo.addEventListener('mouseover', (e) => {websiteLogo.src = 'assets/website_icon.svg'})
websiteLogo.addEventListener('mouseout', (e) => {websiteLogo.src = 'assets/dragon_icon.svg'})
// https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element