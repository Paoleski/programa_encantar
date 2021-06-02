const splide = new Splide("#fullscreen-slider", {
  width: "100vw",
  height: "100vh",
  arrows: false,
  start: 0,
  classes: {
    pagination: "splide__pagination pagination",
  },
}).mount();

const comecarBtn = document.querySelector(".header-btn");

comecarBtn.addEventListener("click", () => {
  splide.go("+");
  const pagination = document.querySelector(".pagination");
  pagination.classList.add("splide-active");
  const page = document.querySelector(".splide__pagination__page");
  page.classList.add("bg-green");
});

splide.on("move", () => {
  if (splide.index === 0) {
    const pagination = document.querySelector(".pagination");
    pagination.classList.remove("splide-active");
  }
  
  if (tooltips.length > 0) {
    tooltips[0].hide()
    tooltips.length = 0
  }

  const page = document.querySelector(".splide__pagination__page.is-active");
  page.classList.add("bg-green");
});

const playAudio = Array.from(document.querySelectorAll(".audio-play"));

const muteAudio = Array.from(document.querySelectorAll(".audio-mute"));

playAudio.map((playBtn) => {
  playBtn.addEventListener("click", () => {
    const index = playBtn.dataset.index;
    const audio = document.querySelector(`#audio-${index}`);
    if (audio.paused === true) {
      audio.play();
      playBtn.src = "../assets/images/icon/pause.png";
    } else {
      audio.pause();
      playBtn.src = "../assets/images/icon/play.png";
    }
  });
});

muteAudio.map((muteBtn) => {
  muteBtn.addEventListener("click", () => {
    const index = muteBtn.dataset.index;
    const audio = document.querySelector(`#audio-${index}`);
    if (audio.muted === true) {
      audio.muted = false;
      muteBtn.src = "../assets/images/icon/unmute.png";
    } else {
      audio.muted = true;
      muteBtn.src = "../assets/images/icon/mute.png";
    }
  });
});

const btnInvert = Array.from(document.querySelectorAll(".btn-invert"));
btnInvert.map((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.classList.add("btn-inverted-hover");
  });
  btn.addEventListener("mouseout", () => {
    btn.classList.remove("btn-inverted-hover");
  });
});

const reloadBtn = Array.from(document.querySelectorAll(".btn-reload"));

reloadBtn.map((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.style["display"] = "none";
    const index = btn.dataset.index;
    const reloadHoveringBtn = document.querySelector(
      `.btn-reload-hovering-${index}`
    );
    reloadHoveringBtn.style["display"] = "block";
    reloadHoveringBtn.addEventListener("click", () => {
      splide.go(0);
    });
    reloadHoveringBtn.addEventListener("mouseout", () => {
      reloadHoveringBtn.style["display"] = "none";
      btn.style["display"] = "block";
    });
  });
});

const tooltipsTexts = [
  "",
  "Start!<br>Programa ENCANTAR",
  "1. Por que colocar o cliente no centro das atenções?",
  "2. Entenda um pouco mais a evolução no relacionamento com o cliente.",
  "3. Satisfazer e Encantar são as mesmas coisas? entenda qual a diferença!",
  "4. A primeira impressão conta sim para o encantamento!",
  "5. Você vai passar por alguma crise, saiba o que fazer!",
  "6. Antes de falar,<br>ouça seu cliente",
  "7. Encantar<br>na prática",
  "8. Criando conexões verdadeiras",
  "ENCERRAMENTO",
];

const tooltips = []

const splidepage = Array.from(
  document.querySelectorAll(".splide__pagination__page")
);
const settingSplideNavigationAttributesFunction = () => {
  let i = 0;
  splidepage.map((navButton) => {
    if (i === 0) {
        i++;
        return;
    }
    navButton.setAttribute("data-bs-toggle", "tooltip");
    navButton.setAttribute("data-bs-placement", "top");
    navButton.setAttribute("data-bs-trigger", "manual");
    navButton.setAttribute("data-bs-offset", [0, 0]);
    navButton.setAttribute("data-bs-html", "true");
    navButton.setAttribute("title", tooltipsTexts[i]);
    i++;
  });

  
};

settingSplideNavigationAttributesFunction();
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    tooltipTriggerEl.addEventListener("mouseover", () => {
      const s = new bootstrap.Tooltip(tooltipTriggerEl);
      tooltips.push(s)
      s.show();
    });

    tooltipTriggerEl.addEventListener("click", () => {
        const s = new bootstrap.Tooltip(tooltipTriggerEl);
        
        s.show();
      });
  

    tooltipTriggerEl.addEventListener("mouseout", () => {
        if (tooltips.length > 0) {
            tooltips[0].hide();
            tooltips.length = 0
        }
      });

});


