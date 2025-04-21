const websiteLogo = document.querySelector('#logo')

websiteLogo.addEventListener('mouseover', (e) => {websiteLogo.src = '../assets/website_icon.svg'})
websiteLogo.addEventListener('mouseout', (e) => {websiteLogo.src = '../assets/dragon_icon.svg'})