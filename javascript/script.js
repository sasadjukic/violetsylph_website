
// setting necessary variables
let landingSection = document.querySelector('.landing-container');
let copyrightSection = document.querySelector('.copyrights-and-mentions');
let storiesSection = document.querySelector('.stories');
let gamesSection = document.querySelector('.games');
let codingSection = document.querySelector('.coding');
let aboutSection = document.querySelector('.about');
let homeButton = document.querySelectorAll('.btn-home');
let allHeadlines = document.querySelectorAll('.headline-sub');
let openSea = document.querySelector('.opensea');

// Toggle visibility for each section on click
allHeadlines.forEach((headline) => {
    headline.addEventListener('click', () => {
        if (headline.innerHTML.includes('Stories')) {
            storiesSection.style.visibility = 'visible';
            landingSection.style.visibility = 'hidden';
            copyrightSection.style.visibility = 'hidden';
        } else if (headline.innerHTML.includes('Games')) {
            gamesSection.style.visibility = 'visible';
            landingSection.style.visibility = 'hidden';
            copyrightSection.style.visibility = 'hidden';
        } else if (headline.innerHTML.includes('Coding')) {
            codingSection.style.visibility = 'visible';
            landingSection.style.visibility = 'hidden';
            copyrightSection.style.visibility = 'hidden';
        } else if (headline.innerHTML.includes('and more')) {
            aboutSection.style.visibility = 'visible';
            landingSection.style.visibility = 'hidden';
            copyrightSection.style.visibility = 'hidden';
        }
    })
})

// toggle visibility of home section
homeButton.forEach((button) => {
    button.addEventListener('click', () => {
        landingSection.style.visibility = 'visible';
        copyrightSection.style.visibility = 'visible';
        storiesSection.style.visibility = 'hidden';
        gamesSection.style.visibility = 'hidden';
        codingSection.style.visibility = 'hidden';
        aboutSection.style.visibility = 'hidden';
    })
})

// fix color change on OpenSea Icon (the icon is custom-made due to font-awesome lacking this icon)
openSea.addEventListener('mouseover', mouseOver);
openSea.addEventListener('mouseout', mouseOut);

function mouseOver() {
    openSea.src = 'images/OpenSea_white.png';
}

function mouseOut() {
    openSea.src = 'images/OpenSea.png';
}

