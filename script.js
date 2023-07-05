
// Deze onderstaande code berekend de totale width van een div
// met deze width kan de animatie smooth verlopen
const div = document.querySelectorAll('div');

  // Bereken de totale breedte van de ul-elementen
  let totalWidth = 0;
  div.forEach((div) => {
    totalWidth = div.offsetWidth;
  });

console.log(totalWidth)


// animation pause, door te hoveren over a pauzeert de animatie

const carousels = document.querySelectorAll('.projects-carousel');

carousels.forEach((carousel) => {
  const links = carousel.querySelectorAll('a');

  links.forEach((link) => {
    link.addEventListener('mouseover', () => {
      carousels.forEach((carousel) => {
        carousel.style.animationPlayState = 'paused';
      });
    });

    link.addEventListener('mouseout', () => {
      carousels.forEach((carousel) => {
        carousel.style.animationPlayState = 'running';
      });
    });
  });
});

// inner text after hover links

const profileCard = document.querySelectorAll('a:nth-of-type(1), .touchscreen-projects button:nth-of-type(1)')
const verve = document.querySelectorAll('a:nth-of-type(2), .touchscreen-projects button:nth-of-type(2)')
const countries = document.querySelectorAll('a:nth-of-type(3), .touchscreen-projects button:nth-of-type(3)')
const iOdigital = document.querySelectorAll('a:nth-of-type(4), .touchscreen-projects button:nth-of-type(4)')
const cssWeek = document.querySelectorAll('a:nth-of-type(5), .touchscreen-projects button:nth-of-type(5)')
const television = document.querySelectorAll('a:nth-of-type(6), .touchscreen-projects button:nth-of-type(6)')
const chat = document.querySelectorAll('a:nth-of-type(7), .touchscreen-projects button:nth-of-type(7)')
const blog = document.querySelectorAll('a:nth-of-type(8), .touchscreen-projects button:nth-of-type(8)')

const h2 = document.querySelector('.innerHTML')
const p = document.querySelector('.innerHTML-p')
const touchscreenLink = document.querySelector('.touchscreen-link')
const touchscreenLinkVerve = document.querySelector('.touchscreen-link-verve')
const touchscreenLinkCountries = document.querySelector('.touchscreen-link-countries')
const touchscreenLinkiOdigital = document.querySelector('.touchscreen-link-iOdigital')
const touchscreenLinkCSS = document.querySelector('.touchscreen-link-CSS')
const touchscreenLinkTele = document.querySelector('.touchscreen-link-tele')
const touchscreenLinkChat = document.querySelector('.touchscreen-link-chat')
const touchscreenLinkBlog = document.querySelector('.touchscreen-link-blog')
const skillsList = document.querySelector('.skills-list')

// skills
const skillsProfileCard = ["Node.js", "EJS", "Json", "Express", "CSS", "JavaScript"];
const skillsVerve = ["HTML", "CSS", "JavaScript"];
const skillsCountries = ["Express", "REST API", "Json", "Node.js", "EJS", "CSS"];
const skillsiOdigital = ["Node.js", "EJS", "Json", "Express", "CSS", "JavaScript"];
const skillsCssWeek = ["HTML", "CSS", "JavaScript"];
const skillsTelevision = ["HTML", "CSS", "JavaScript"];
const skillsViniMiniChat = ["HTML", "CSS", "JavaScript", "Socket.io", "Node.js", "Express"];
const skillsBlog = ["HTML", "CSS", "JavaScript"];


// Functie om list items te maken voor elk item in de array 'skills'
function createSkillListItems(skills) {
  skillsList.innerHTML = ''; // Leeg de bestaande inhoud om te voorkomen dat er duplicaten ontstaan
  skills.forEach(skill => {
    if (skill !== "") {
      const li = document.createElement('li');
      li.innerHTML = skill;
      skillsList.appendChild(li);
    }
  });
}

// Connect Your Tribe Profile Card
profileCard.forEach(card => {
  card.addEventListener('mouseover', infoProfileCard);
  card.addEventListener('click', infoProfileCard);

  if (!('ontouchstart' in window) || !navigator.maxTouchPoints) {

  card.addEventListener('mouseout', () => {
    mouseOut();
  
  })
}})

function infoProfileCard() {
 

  createSkillListItems(skillsProfileCard);
  p.innerHTML = 'Neem een kijkje op mijn visitekaart website en leer meer over mij.';

  // check touch/niet touch
  if ('ontouchstart' in window || navigator.maxTouchPoints) {
  // wel touch
  h2.classList.add('display-none');
  touchscreenLink.classList.add('touchscreen-link-visible')

  touchscreenLinkVerve.classList.remove('touchscreen-link-visible')
  touchscreenLinkCountries.classList.remove('touchscreen-link-visible')
  touchscreenLinkiOdigital.classList.remove('touchscreen-link-visible')
  touchscreenLinkCSS.classList.remove('touchscreen-link-visible')
  touchscreenLinkTele.classList.remove('touchscreen-link-visible')
  touchscreenLinkChat.classList.remove('touchscreen-link-visible')
  touchscreenLinkBlog.classList.remove('touchscreen-link-visible')
  } else {
    // geen touch
    h2.innerHTML = 'Connect Your Tribe Profile Card';
  }

}

// The Verve Agency Careers Page
verve.forEach( verve => {
  verve.addEventListener('mouseover', infoVerve)
  verve.addEventListener('click', infoVerve);

  if (!('ontouchstart' in window) || !navigator.maxTouchPoints) {

  verve.addEventListener('mouseout', () => {
    mouseOut();
  })
}})

function infoVerve() {
    createSkillListItems(skillsVerve);
    p.innerHTML = "Voor the Verve Agency heb ik een interactieve pagina gemaakt die potentiële designers (en developers) nieuwsgierig en warm maakt om bij The Verve Agency te solliciteren."
    
      // check touch/niet touch
  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    // wel touch

    h2.classList.add('display-none');
    touchscreenLinkVerve.classList.add('touchscreen-link-visible')

    touchscreenLink.classList.remove('touchscreen-link-visible')
    touchscreenLinkCountries.classList.remove('touchscreen-link-visible')
    touchscreenLinkiOdigital.classList.remove('touchscreen-link-visible')
    touchscreenLinkCSS.classList.remove('touchscreen-link-visible')
    touchscreenLinkTele.classList.remove('touchscreen-link-visible')
    touchscreenLinkChat.classList.remove('touchscreen-link-visible')
    touchscreenLinkBlog.classList.remove('touchscreen-link-visible')
    } else {
      // geen touch
      h2.innerHTML = "The Verve Agency Careers Page"
    }
}

// Countries
countries.forEach(country =>{
  country.addEventListener('mouseover', infoCountries)
  country.addEventListener('click', infoCountries);  
  
  if (!('ontouchstart' in window) || !navigator.maxTouchPoints) {
  country.addEventListener('mouseout', () => {
    mouseOut();
  })
}})

function infoCountries() {
    p.innerHTML = "Op deze webpagina kan je informatie vinden over alle landen ter wereld. Deze opdracht heb ik gemaakt om te oefenen met REST API."
    createSkillListItems(skillsCountries);

  // check touch/niet touch
  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    // wel touch
    h2.classList.add('display-none');
    touchscreenLinkCountries.classList.add('touchscreen-link-visible')

    touchscreenLink.classList.remove('touchscreen-link-visible')
    touchscreenLinkVerve.classList.remove('touchscreen-link-visible')
    touchscreenLinkiOdigital.classList.remove('touchscreen-link-visible')
    touchscreenLinkCSS.classList.remove('touchscreen-link-visible')
    touchscreenLinkTele.classList.remove('touchscreen-link-visible')
    touchscreenLinkChat.classList.remove('touchscreen-link-visible')
    touchscreenLinkBlog.classList.remove('touchscreen-link-visible')
    } else {
      // geen touch
      h2.innerHTML = "Countries"
    }
}

// iOdigital Online CV Presentation Tool
iOdigital.forEach(iO => {
  iO.addEventListener('mouseover', infoiO)
  iO.addEventListener('click', infoiO);  

  if (!('ontouchstart' in window) || !navigator.maxTouchPoints) {

  iO.addEventListener('mouseout', () => {
    mouseOut();
  })
}})

function infoiO() {
    p.innerHTML = "Met deze online CV presentatie tool wordt het voortaan veel makkelijker om een CV op te sturen naar een hiring manager. Er is geen PDF meer nodig."
    createSkillListItems(skillsiOdigital);

  // check touch/niet touch
  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    // wel touch
    h2.classList.add('display-none');
    touchscreenLinkiOdigital.classList.add('touchscreen-link-visible')

    touchscreenLinkCountries.classList.remove('touchscreen-link-visible')
    touchscreenLink.classList.remove('touchscreen-link-visible')
    touchscreenLinkVerve.classList.remove('touchscreen-link-visible')
    touchscreenLinkCSS.classList.remove('touchscreen-link-visible')
    touchscreenLinkTele.classList.remove('touchscreen-link-visible')
    touchscreenLinkChat.classList.remove('touchscreen-link-visible')
    touchscreenLinkBlog.classList.remove('touchscreen-link-visible')
  } else {
    // geen touch
    h2.innerHTML = "iOdigital Online CV Presentation Tool"
  }
}

// CSS week project
cssWeek.forEach(css => {
  css.addEventListener('mouseover', infoCSS)
  css.addEventListener('click', infoCSS)

  if (!('ontouchstart' in window) || !navigator.maxTouchPoints) {

  css.addEventListener('mouseout', () => {
    mouseOut();
  })
}})

function infoCSS() {
    p.innerHTML = "Tijdens de voorjaarsvakantie heb ik meegedaan met de CSS week van Sanne 't hooft. Hier heb ik supercoole nieuwe dingen geleerd en met CSS geoefend!"
    createSkillListItems(skillsCssWeek);

  // check touch/niet touch
  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    // wel touch
    h2.classList.add('display-none');
    touchscreenLinkCSS.classList.add('touchscreen-link-visible')

    touchscreenLinkCountries.classList.remove('touchscreen-link-visible')
    touchscreenLink.classList.remove('touchscreen-link-visible')
    touchscreenLinkVerve.classList.remove('touchscreen-link-visible')
    touchscreenLinkiOdigital.classList.remove('touchscreen-link-visible')
    touchscreenLinkTele.classList.remove('touchscreen-link-visible')
    touchscreenLinkChat.classList.remove('touchscreen-link-visible')
    touchscreenLinkBlog.classList.remove('touchscreen-link-visible')
    } else {
      // geen touch
      h2.innerHTML = "CSS week project"
    }
}

// Bekijk mijn nieuwe TV!
television.forEach(television => {
  television.addEventListener('mouseover', infoTele)
  television.addEventListener('click', infoTele)

  if (!('ontouchstart' in window) || !navigator.maxTouchPoints) {
  television.addEventListener('mouseout', () => {
    mouseOut();
  })
}})

function infoTele() {
    p.innerHTML = "Door de CSS week was ik zo geïnspireert geraakt dus heb ik een tv heb gemaakt."
    createSkillListItems(skillsTelevision);

  // check touch/niet touch
  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    // wel touch
    h2.classList.add('display-none');
    touchscreenLinkTele.classList.add('touchscreen-link-visible')

    touchscreenLinkCountries.classList.remove('touchscreen-link-visible')
    touchscreenLink.classList.remove('touchscreen-link-visible')
    touchscreenLinkVerve.classList.remove('touchscreen-link-visible')
    touchscreenLinkiOdigital.classList.remove('touchscreen-link-visible')
    touchscreenLinkCSS.classList.remove('touchscreen-link-visible')
    touchscreenLinkChat.classList.remove('touchscreen-link-visible')
    touchscreenLinkBlog.classList.remove('touchscreen-link-visible')
    } else {
      // geen touch
      h2.innerHTML = "Bekijk mijn nieuwe TV!"
    }
}

// Vini Mini chatroom
chat.forEach(chat => {
  chat.addEventListener('mouseover', infoChat)
  chat.addEventListener('click', infoChat)

  if (!('ontouchstart' in window) || !navigator.maxTouchPoints) {

  chat.addEventListener('mouseout', () => {
    mouseOut();
  })
}})

function infoChat() {
    p.innerHTML = "Voor deze opdracht heb ik voor Vini Mini een chatroom gemaakt met socket.io."
    createSkillListItems(skillsViniMiniChat);

  // check touch/niet touch
  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    // wel touch
    h2.classList.add('display-none');
    touchscreenLinkChat.classList.add('touchscreen-link-visible')

    touchscreenLinkCountries.classList.remove('touchscreen-link-visible')
    touchscreenLink.classList.remove('touchscreen-link-visible')
    touchscreenLinkVerve.classList.remove('touchscreen-link-visible')
    touchscreenLinkiOdigital.classList.remove('touchscreen-link-visible')
    touchscreenLinkCSS.classList.remove('touchscreen-link-visible')
    touchscreenLinkTele.classList.remove('touchscreen-link-visible')
    touchscreenLinkBlog.classList.remove('touchscreen-link-visible')
    } else {
      // geen touch
      h2.innerHTML = "Vini Mini chatroom"
    }
}

// We Love Web Blog
blog.forEach(blog => {
  blog.addEventListener('mouseover', infoBlog)
  blog.addEventListener('click', infoBlog)

  if (!('ontouchstart' in window) || !navigator.maxTouchPoints) {
  blog.addEventListener('mouseout', () => {
    mouseOut();
  })
}})

function infoBlog() {
    p.innerHTML = "Ik heb een blog gemaakt voor het bijhouden van We Love Web presentaties en workshops."
    createSkillListItems(skillsBlog);

  // check touch/niet touch
  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    // wel touch
    h2.classList.add('display-none');
    touchscreenLinkBlog.classList.add('touchscreen-link-visible')

    touchscreenLinkCountries.classList.remove('touchscreen-link-visible')
    touchscreenLink.classList.remove('touchscreen-link-visible')
    touchscreenLinkVerve.classList.remove('touchscreen-link-visible')
    touchscreenLinkiOdigital.classList.remove('touchscreen-link-visible')
    touchscreenLinkCSS.classList.remove('touchscreen-link-visible')
    touchscreenLinkTele.classList.remove('touchscreen-link-visible')
    touchscreenLinkChat.classList.remove('touchscreen-link-visible')
    } else {
      // geen touch
      h2.innerHTML = "We Love Web Blog"
    }
}
const headerH1 = document.querySelector('header h1')
// ga deze functie waarschijnlijk verwijderen
function detecteerTouchscreen() {
  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    // touchscreen
  p.innerHTML = "Bekijk hier al mijn beste projecten van mijn eerste leerjaar bij de opleiding Frontend Design & Development. Klik op een project hieronder om erover te kunnen lezen. Druk daarna op de link om de website te bezoeken."
  
  headerH1.addEventListener('click', () => {
    p.innerHTML = "Bekijk hier al mijn beste projecten van mijn eerste leerjaar bij de opleiding Frontend Design & Development. Klik op een project hieronder om erover te kunnen lezen. Druk daarna op de link om de website te bezoeken."
    h2.innerHTML = "Frontend is te gek! 🪐🛰️🛸"
    skillsList.innerHTML = ''; // Leeg de lijst bij mouseout
    h2.classList.remove('display-none');

    touchscreenLinkBlog.classList.remove('touchscreen-link-visible')
    touchscreenLinkCountries.classList.remove('touchscreen-link-visible')
    touchscreenLink.classList.remove('touchscreen-link-visible')
    touchscreenLinkVerve.classList.remove('touchscreen-link-visible')
    touchscreenLinkiOdigital.classList.remove('touchscreen-link-visible')
    touchscreenLinkCSS.classList.remove('touchscreen-link-visible')
    touchscreenLinkTele.classList.remove('touchscreen-link-visible')
    touchscreenLinkChat.classList.remove('touchscreen-link-visible')
  })
} else {
    // geen touchscreen
  p.innerHTML = "Bekijk hier al mijn beste projecten van mijn eerste leerjaar bij de opleiding Frontend Design & Development. Ga met de cursor over de projecten hieronder om erover te kunnen lezen. Druk erop om de website te bezoeken."
}
}

detecteerTouchscreen();

function mouseOut(){
  h2.innerHTML = "Frontend is te gek! 🪐🛰️🛸"
  skillsList.innerHTML = ''; // Leeg de lijst bij mouseout
  h2.classList.remove('display-none');

  // controleer of touchscreen aanwezig is met de volgende code
  // had hulp van chatGPT
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        // Touchscreen aanwezig
      p.innerHTML = "Bekijk hier al mijn beste projecten van mijn eerste leerjaar bij de opleiding Frontend Design & Development. Klik op een project hieronder om erover te kunnen lezen. Druk daarna op de link om de website te bezoeken."
    } else {
      // Geen touchscreen aanwezig
      p.innerHTML = "Bekijk hier al mijn beste projecten van mijn eerste leerjaar bij de opleiding Frontend Design & Development. Ga met de cursor over de projecten hieronder om erover te kunnen lezen. Druk erop om de website te bezoeken."
    }
  
  }


// scrollen met muis over carousel

const completeCarousel = document.querySelector('.complete-carousel');

completeCarousel.addEventListener('mouseenter', () => {
  completeCarousel.addEventListener('wheel', handleScroll);
});

completeCarousel.addEventListener('mouseleave', () => {
  completeCarousel.removeEventListener('wheel', handleScroll);
});

function handleScroll(event) {
  event.preventDefault();

  const delta = Math.max(-1, Math.min(1, (event.deltaY || -event.wheelDelta || event.detail)));
  completeCarousel.scrollLeft -= delta * 40; // Verstel de scrollsnelheid hier naar wens
}



// the verve dog eyes (geïnspireerd door: https://codepen.io/natan-sitanggang/pen/YzpZXKR?editors=1010)

document.querySelector('body').addEventListener('mousemove', eyeball);


function eyeball(){
  var eye = document.querySelectorAll('.eye');
  
  eye.forEach(eye =>{
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = (radian * (180 / Math.PI) * -1) - 270;
    eye.style.transform = "rotate("+ rot +"deg)";
  })
  // console.log('hoi' + eye.clientWidth / 2)
}


// space mode (hulp gehad van chatGPT)
const spaceMode = document.querySelector('.space-mode')
let h4 = document.querySelector('h4')

// Bijhouden van de huidige modus
let isSpaceMode = false;

// Functie om de knopinhoud te updaten op basis van de huidige modus
function updateButtonContent() {
  if (isSpaceMode) {
    spaceMode.innerHTML = '<span class="button-text-mobile">Pastel Mode</span> 🟣';
    h4.innerHTML = 'Pastel Mode'
  } else {
    spaceMode.innerHTML = '<span class="button-text-mobile">Space Mode</span> 🌌';
    h4.innerHTML = 'Space Mode'
  }
}

// Click event listener voor de knop
spaceMode.addEventListener('click', toggleVariables);

// Functie om de modus om te schakelen en knopinhoud bij te werken
function toggleVariables() {
  const root = document.documentElement;
  isSpaceMode = root.classList.toggle('space-mode');
  updateButtonContent();
}

// Zorg ervoor dat de initiële knopinhoud correct wordt ingesteld
updateButtonContent();



// rocket lauch
const rocketLaunch = document.querySelector('.rocket-launch')
const rocket = document.querySelector('.rocket-container')

rocketLaunch.addEventListener('click', rocketLaunchGo)

function rocketLaunchGo() {
  rocket.classList.add('rocket-launch');

  rocket.addEventListener("animationend", () => {
    rocket.classList.remove('rocket-launch');
  });
}

// space walk (hulp van chatgpt)
const spaceWalk = document.querySelector('.space-walk')
const astronaut = document.querySelector('.astronaut')

spaceWalk.addEventListener('click', startAstronautAnimation)

function startAstronautAnimation() {
  gsap.from(".astronaut", { scale: 0, visibility: "visible" });
  gsap.to(".astronaut", {
    scale: 1,
    duration: 6,
    y: "10rem",
    x: "20rem",
    yoyo: true,
    repeat: 1,
    ease: "power1.inOut",
    rotate: "360deg",
    visibility: "visible",
    onComplete: function () {
      gsap.to(".astronaut", { scale: 0, rotate: "90deg" });
    }
  });
}


