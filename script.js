// MENU TOGGLE
const toggleBtn = document.getElementById("toggle-btn");
const toggleOptions = document.getElementById("toggle-options");
// DESTINATION
const destinationMoon = document.getElementById("moon");
const destinationMars = document.getElementById("mars");
const destinationEuropa = document.getElementById("europa");
const destinationTitan = document.getElementById("titan");
const planetImg = document.querySelector(".planet-img");
const planetTitle = document.getElementById("planet-title");
const planetIntro = document.getElementById("planet-intro");
const planetDistance = document.getElementById("planet-distance");
const planetTime = document.getElementById("planet-time");
// CREW
const crewType = document.querySelector(".crew-type");
const crewName = document.querySelector(".crew-name");
const crewIntro = document.querySelector(".crew-intro");
const crewImg = document.getElementById("crew-img");
const controller1 = document.getElementById("dot-1");
const controller2 = document.getElementById("dot-2");
const controller3 = document.getElementById("dot-3");
const controller4 = document.getElementById("dot-4");
// TECHNOLOGY
const techTerm = document.getElementById("terminology");
const techIntro = document.getElementById("term-intro");
const techImg = document.getElementById("tech-img");
const techBg = document.querySelector(".tech-pic");
const one = document.getElementById("circle-1");
const two = document.getElementById("circle-2");
const three = document.getElementById("circle-3");
// DATA
const dataSum =  {
    "destinations": [
      {
        "name": "Moon",
        "images": {
          "png": "./assets/destination/image-moon.png",
          "webp": "./assets/destination/image-moon.webp"
        },
        "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "distance": "384,400 km",
        "travel": "3 days"
      },
      {
        "name": "Mars",
        "images": {
          "png": "./assets/destination/image-mars.png",
          "webp": "./assets/destination/image-mars.webp"
        },
        "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        "distance": "225 mil. km",
        "travel": "9 months"
      },
      {
        "name": "Europa",
        "images": {
          "png": "./assets/destination/image-europa.png",
          "webp": "./assets/destination/image-europa.webp"
        },
        "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "distance": "628 mil. km",
        "travel": "3 years"
      },
      {
        "name": "Titan",
        "images": {
          "png": "./assets/destination/image-titan.png",
          "webp": "./assets/destination/image-titan.webp"
        },
        "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        "distance": "1.6 bil. km",
        "travel": "7 years"
      }
    ],
    "crew": [
      {
        "name": "Douglas Hurley",
        "images": {
          "png": "./assets/crew/image-douglas-hurley.png",
          "webp": "./assets/crew/image-douglas-hurley.webp"
        },
        "role": "Commander",
        "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
      },
      {
        "name": "Mark Shuttleworth",
        "images": {
          "png": "./assets/crew/image-mark-shuttleworth.png",
          "webp": "./assets/crew/image-mark-shuttleworth.webp"
        },
        "role": "Mission Specialist",
        "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
      },
      {
        "name": "Victor Glover",
        "images": {
          "png": "./assets/crew/image-victor-glover.png",
          "webp": "./assets/crew/image-victor-glover.webp"
        },
        "role": "Pilot",
        "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
      },
      {
        "name": "Anousheh Ansari",
        "images": {
          "png": "./assets/crew/image-anousheh-ansari.png",
          "webp": "./assets/crew/image-anousheh-ansari.webp"
        },
        "role": "Flight Engineer",
        "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
      }
    ],
    "technology": [
      {
        "name": "Launch vehicle",
        "images": {
          "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
          "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
        },
        "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
      },
      {
        "name": "Spaceport",
        "images": {
          "portrait": "./assets/technology/image-spaceport-portrait.jpg",
          "landscape": "./assets/technology/image-spaceport-landscape.jpg"
        },
        "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
      },
      {
        "name": "Space capsule",
        "images": {
          "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
          "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
        },
        "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
      }
    ]
  }

//TOGGLE MENU
document.addEventListener("DOMContentLoaded", () => {

  toggleBtn.addEventListener("click", () => {
    if(toggleBtn.classList.contains("hamburger")) {
      toggleBtn.classList.remove("hamburger");
      toggleBtn.classList.add("close");
      toggleOptions.classList.remove("hidden");
    } else if(toggleBtn.classList.contains("close")) {
      toggleBtn.classList.remove("close");
      toggleBtn.classList.add("hamburger");
      toggleOptions.classList.add("hidden");
    }
  });

})


// DESTINATION PAGES
function destinationStart() {
destinationMoon.addEventListener("click", () => {
    destinationMars.classList.remove("current");
    destinationEuropa.classList.remove("current");
    destinationTitan.classList.remove("current");
    destinationMoon.classList.add("current");
    planetImg.src = dataSum.destinations[0].images.png;
    planetTitle.innerHTML = "moon";
    planetIntro.innerHTML = dataSum.destinations[0].description;
    planetDistance.innerHTML = dataSum.destinations[0].distance;
    planetTime.innerHTML = dataSum.destinations[0].travel;
});
destinationMars.addEventListener("click", () => {
    destinationMoon.classList.remove("current");
    destinationEuropa.classList.remove("current");
    destinationTitan.classList.remove("current");
    destinationMars.classList.add("current");
    planetImg.src = dataSum.destinations[1].images.png;
    planetTitle.innerHTML = "mars";
    planetIntro.innerHTML = dataSum.destinations[1].description;
    planetDistance.innerHTML = dataSum.destinations[1].distance;
    planetTime.innerHTML = dataSum.destinations[1].travel;
});
destinationEuropa.addEventListener("click", () => {
    destinationMoon.classList.remove("current");
    destinationMars.classList.remove("current");
    destinationTitan.classList.remove("current");
    destinationEuropa.classList.add("current");
    planetImg.src = dataSum.destinations[2].images.png;
    planetTitle.innerHTML = "europa";
    planetIntro.innerHTML = dataSum.destinations[2].description;
    planetDistance.innerHTML = dataSum.destinations[2].distance;
    planetTime.innerHTML = dataSum.destinations[2].travel;
});
destinationTitan.addEventListener("click", () => {
    destinationMoon.classList.remove("current");
    destinationMars.classList.remove("current");
    destinationEuropa.classList.remove("current");
    destinationTitan.classList.add("current");
    planetImg.src = dataSum.destinations[3].images.png;
    planetTitle.innerHTML = "titan";
    planetIntro.innerHTML = dataSum.destinations[3].description;
    planetDistance.innerHTML = dataSum.destinations[3].distance;
    planetTime.innerHTML = dataSum.destinations[3].travel;
});
}

// CREW PAGES
function init() {
    controller1.addEventListener("click", () => {
        controller2.classList.remove("active");
        controller3.classList.remove("active");
        controller4.classList.remove("active");
        controller1.classList.add("active");
        crewType.innerHTML = dataSum.crew[0].role;
        crewName.innerHTML = dataSum.crew[0].name;
        crewIntro.innerHTML = dataSum.crew[0].bio;
        crewImg.src = dataSum.crew[0].images.png;
        crewImg.style.width = "568px";
        crewImg.style.height = "680px";
        crewImg.alt = dataSum.crew[0].name;
        if(window.matchMedia("(max-width: 800px)").matches) {
            crewImg.style.width = "456px";
            crewImg.style.height = "572px";
            crewImg.style.marginTop = "25px";
        }
        if(window.matchMedia("(max-width: 480px)").matches) {
          crewImg.style.width = "177px";
          crewImg.style.height = "222px";
          crewImg.style.marginTop = "0";
        }
    });
    controller2.addEventListener("click", () => {
        controller1.classList.remove("active");
        controller3.classList.remove("active");
        controller4.classList.remove("active");
        controller2.classList.add("active");
        crewType.innerHTML = dataSum.crew[1].role;
        crewName.innerHTML = dataSum.crew[1].name;
        crewIntro.innerHTML = dataSum.crew[1].bio;
        crewImg.src = dataSum.crew[1].images.png;
        crewImg.style.width = "453px";
        crewImg.style.height = "654px";
        crewImg.alt = dataSum.crew[1].name;
        if(window.matchMedia("(max-width: 800px)").matches) {
          crewImg.style.width = "369px";
          crewImg.style.height = "532px";
          crewImg.style.marginTop = "70px";
        }
        if(window.matchMedia("(max-width: 480px)").matches) {
          crewImg.style.width = "154px";
          crewImg.style.height = "222px";
          crewImg.style.marginTop = "0";
        }
    });    
    controller3.addEventListener("click", () => {
        controller1.classList.remove("active");
        controller2.classList.remove("active");
        controller4.classList.remove("active");
        controller3.classList.add("active");
        crewType.innerHTML = dataSum.crew[2].role;
        crewName.innerHTML = dataSum.crew[2].name;
        crewIntro.innerHTML = dataSum.crew[2].bio;
        crewImg.src = dataSum.crew[2].images.png;
        crewImg.style.width = "554px";
        crewImg.style.height = "681px";
        crewImg.alt = dataSum.crew[2].name;
        if(window.matchMedia("(max-width: 800px)").matches) {
          crewImg.style.width = "433px";
          crewImg.style.height = "540px";
          crewImg.style.marginTop = "60px";
        }
        if(window.matchMedia("(max-width: 480px)").matches) {
          crewImg.style.width = "181px";
          crewImg.style.height = "222px";
          crewImg.style.marginTop = "0";
        }
    });
    controller4.addEventListener("click", () => {
        controller1.classList.remove("active");
        controller2.classList.remove("active");
        controller3.classList.remove("active");
        controller4.classList.add("active");
        crewType.innerHTML = dataSum.crew[3].role;
        crewName.innerHTML = dataSum.crew[3].name;
        crewIntro.innerHTML = dataSum.crew[3].bio;
        crewImg.src = dataSum.crew[3].images.png;
        crewImg.style.width = "565px";
        crewImg.style.height = "650px";
        crewImg.alt = dataSum.crew[3].name;
        if(window.matchMedia("(max-width: 800px)").matches) {
          crewImg.style.width = "539px";
          crewImg.style.height = "532px";
          crewImg.style.marginTop = "70px";
        }
        if(window.matchMedia("(max-width: 480px)").matches) {
          crewImg.style.width = "226px";
          crewImg.style.height = "222px";
          crewImg.style.marginTop = "0";
        }
    });
    
}

// TECHNOLOGY PAGES
function start() {
one.addEventListener("click", () => {
  two.classList.remove("now");
  three.classList.remove("now");
  one.classList.add("now");
  techTerm.innerHTML = dataSum.technology[0].name;
  techIntro.innerHTML = dataSum.technology[0].description;
  techImg.src = dataSum.technology[0].images.portrait;
  techImg.alt = "Launch Vehicle";
  if(window.matchMedia("(max-width: 800px)").matches) {
    techBg.style.backgroundImage = "url('./assets/technology/image-launch-vehicle-landscape.jpg')";
  }
});
two.addEventListener("click", () => {
  one.classList.remove("now");
  three.classList.remove("now");
  two.classList.add("now");
  techTerm.innerHTML = dataSum.technology[1].name;
  techIntro.innerHTML = dataSum.technology[1].description;
  techImg.src = dataSum.technology[1].images.portrait;
  techImg.alt = "Spaceport";
  if(window.matchMedia("(max-width: 800px)").matches) {
    techBg.style.backgroundImage = "url('./assets/technology/image-spaceport-landscape.jpg')";
  }
});
three.addEventListener("click", () => {
  one.classList.remove("now");
  two.classList.remove("now");
  three.classList.add("now");
  techTerm.innerHTML = dataSum.technology[2].name;
  techIntro.innerHTML = dataSum.technology[2].description;
  techImg.src = dataSum.technology[2].images.portrait;
  techImg.alt = "Space Capsule";
  if(window.matchMedia("(max-width: 800px)").matches) {
    techBg.style.backgroundImage = "url('./assets/technology/image-space-capsule-landscape.jpg')";
  }
});
}


  

