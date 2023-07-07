// variables
const boxes = document.querySelectorAll(".box")
const overlays = document.querySelectorAll(".overlay")
const mainSection = document.querySelector(".main-section")
const textEl = document.querySelector(".text")
let currentIndex = 0
let intervalID = null

// data
const data = [
{ url: "bg1.jpg",
    text: "Explore the latest fashion trends and discover a wide range of stylish clothing options for men, women, and children."
},
{ url: "bg2.jpg" ,
    text: "Step up your footwear game with our wide selection of shoes for every occasion."
},
{ url: "bg3.jpg" ,
    text: "Discover cutting-edge technology and gadgets that will enhance your daily life."
},
{ url: "bg4.jpg",
    text: "Create a cozy and inviting space with our collection of home decor items."
},
{ url: "bg5.jpg",
    text: "Stay active and fit with our range of sports and fitness gear."
},
{ url: "bg6.jpg",
    text: "Indulge in self-care and beauty with our selection of skincare products, makeup, fragrances, and grooming essentials."
}
];

// eventlistener
boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        overlays[currentIndex].classList.remove("active")
        boxes[currentIndex].classList.remove("active")
        currentIndex = index
        overlays[currentIndex].classList.add("active")
        boxes[currentIndex].classList.add("active")
        mainSection.style.backgroundImage = `url(${data[currentIndex].url})`
        textEl.innerHTML = `${data[currentIndex].text}`
        clearInterval(intervalID)
        startInterval()
    })
})

// function
function addClass(){
    overlays[currentIndex].classList.remove("active")
    boxes[currentIndex].classList.remove("active")
    currentIndex = (currentIndex + 1) % overlays.length
    overlays[currentIndex].classList.add("active")
    boxes[currentIndex].classList.add("active")
    mainSection.style.backgroundImage = `url(${data[currentIndex].url})`
    textEl.innerHTML = `${data[currentIndex].text}`
}

function startInterval(){
    intervalID = setInterval(addClass,3000)
}

// starting the interval
startInterval()
// adding class active when the page is running
overlays[currentIndex].classList.add("active")
boxes[currentIndex].classList.add("active")
mainSection.style.backgroundImage = `url(${data[currentIndex].url})`
textEl.innerHTML = `${data[currentIndex].text}`