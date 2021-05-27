const splide = new Splide("#fullscreen-slider", {
  width: "100vw",
  height: "100vh",
  arrows: false,
  start:0,
  classes: {
    pagination: "splide__pagination pagination",
  },
}).mount();

const comecarBtn = document.querySelector(".header-btn");

comecarBtn.addEventListener("click", () => { 
  splide.go('+')
  const pagination = document.querySelector(".pagination");
  pagination.classList.add("splide-active");
  const page = document.querySelector('.splide__pagination__page')
  page.classList.add('bg-green')
});

splide.on('move', () => {
    if (splide.index === 0) {
        const pagination = document.querySelector(".pagination");
        pagination.classList.remove("splide-active");
    }
    const page = document.querySelector('.splide__pagination__page.is-active')
    page.classList.add('bg-green')
})

const audio1 = document.querySelector('#audio-1')
const playAudio = document.querySelector('.audio-1-play')
const muteAudio = document.querySelector('.audio-1-mute')

playAudio.addEventListener('click', () => {
    if (audio1.paused === true) {
        audio1.play()
    } else {
        audio1.pause()
    }
})

muteAudio.addEventListener('click', () => {
    if (audio1.muted === true) {
        audio1.muted = false;
    } else {
        audio1.muted = true;
    }
    
} )


