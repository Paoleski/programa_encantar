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


const playAudio = Array.from(document.querySelectorAll('.audio-play'))

const muteAudio = Array.from(document.querySelectorAll('.audio-mute'))



playAudio.map(playBtn => {
    playBtn.addEventListener('click', () => {
        const index = playBtn.dataset.index
        const audio = document.querySelector(`#audio-${index}`)
        if (audio.paused === true) {
            audio.play()
            playBtn.src = '../assets/images/icon/pause.png'
        } else {
            audio.pause()
            playBtn.src = '../assets/images/icon/play.png'
        }
        
    })
})

muteAudio.map(muteBtn => {
    muteBtn.addEventListener('click', () => {
        const index = muteBtn.dataset.index
        const audio = document.querySelector(`#audio-${index}`)
        if (audio.muted === true) {
            audio.muted = false
            muteBtn.src = '../assets/images/icon/unmute.png'
        } else {
            audio.muted = true
            muteBtn.src = '../assets/images/icon/mute.png'
        }
    })
})


const btnInvert = Array.from(document.querySelectorAll('.btn-invert'))
btnInvert.map(btn => {
    btn.addEventListener('mouseover', () => {
   
        btn.classList.add('btn-inverted-hover')
    })
    btn.addEventListener('mouseout', () => {
        btn.classList.remove('btn-inverted-hover')

    })
})

const reloadBtn = Array.from(document.querySelectorAll('.btn-reload'))

reloadBtn.map(btn => {
    btn.addEventListener('mouseover' , () => {
        btn.style['display'] = 'none'
        const index = btn.dataset.index
        const reloadHoveringBtn = document.querySelector(`.btn-reload-hovering-${index}`)
        reloadHoveringBtn.style['display'] = 'block'
        reloadHoveringBtn.addEventListener('click', () => {
            splide.go(0)
        })
        reloadHoveringBtn.addEventListener('mouseout', () => {
            reloadHoveringBtn.style['display'] = 'none'
            btn.style['display'] = 'block'
        })
    })
 
})

const tooltipsTexts = [
    'Start!<br> Programa ENCANTAR',
    '1. Por que colocar o cliente no centro das atenções?'
]


const splidepage = Array.from(document.querySelectorAll('.splide__pagination__page'))
// data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"
const settingSplideNavigationAttributesFunction = () => {
    let i = 0;
    splidepage.map(navButton => {
        console.log(i)
        navButton.setAttribute('data-bs-toggle', 'tooltip')
        navButton.setAttribute('data-bs-placement', 'top')
        navButton.setAttribute('data-bs-trigger', 'hover')
        navButton.setAttribute('title', tooltipsTexts[i])
        i++
    })
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
}




settingSplideNavigationAttributesFunction()


