//Element
const text = document.querySelector(".loader .text p");
const loader = document.querySelector(".loader");
const menu = document.querySelector(".menu");
const ham = document.querySelector(".hamburger");
const close = document.querySelector(".hamburger-close");
const disableAnime = document.querySelector(".disable-anime button");
const freeDate = document.querySelector(".ser-4 p");
const spriteSheet = document.querySelector(".sprite");
const spriteEach = 5000 / 50;
const ease = "easeInOutExpo";

//function
function loadEvent() {
    //Event
    document.addEventListener("DOMContentLoaded", (e) => {
        animateHeader();
        window.scrollTo(0, 0);
    });
    animateMenu();
    animatMagnificentOne();
}
function animateHeader() {
    anime({
        targets: ".address",
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 1000,
        easing: ease,
    });
    anime({
        targets: ".head-text > p",
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        easing: ease,
        delay: 500,
    });
    anime({
        targets: ".head-text > .head-btn",
        opacity: [0, 1],
        translateY: [-30, 0],
        duration: 1000,
        easing: ease,
        delay: 1000,
    });
    anime({
        targets: ".head-text > .image",
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        easing: ease,
        delay: 1500,
    });
    anime({
        targets: ".circle p",
        opacity: [0, 1],
        translateY: [-30, 0],
        duration: 1000,
        easing: ease,
        delay: 2000,
    });

    anime({
        targets: ".circle .circle-inner",
        opacity: [0, 1],
        translateY: [-30, 0],
        duration: 1000,
        easing: "easeOutBounce",
        delay: 2300,
    });
    // HAMBURGER
    anime({
        targets: ".nav-list .hamburger div",
        opacity: [0, 1],
        translateX: [30, 0],
        duration: 1000,
        easing: ease,
        delay: (el, i) => {
            return [2700, 2800][i];
        },
    });
    anime({
        targets: ".nav-list .list li",
        opacity: [0, 1],
        translateX: [30, 0],
        duration: 1000,
        easing: ease,
        delay: 2700,
    });
    // HAMBURGER

    anime({
        targets: ".description p",
        opacity: [0, 1],
        translateX: [30, 0],
        easing: ease,
        delay: 3300,
    });
    anime({
        targets: ".description .head-icons i",
        opacity: [0, 1],
        translateY: [30, 0],
        easing: ease,
        delay: (el, i) => [3800, 3900][i],
    });
}

function animateMenu() {
    let ease = "easeInOutQuart";

    ham.addEventListener("click", () => {
        menu.style.display = "flex";
        anime({
            targets: ".menu",
            translateX: [100, 0],
            easing: ease,
            complete: () => {
                menu.style.position = "absolute";
            },
        });
    });
    close.addEventListener("click", () => {
        anime({
            targets: ".menu",
            translateX: [0, "100%"],
            easing: ease,
        });

        setTimeout(() => {
            menu.style.display = "none";
        }, 1000);
    });
}

function animatMagnificentOne() {
    const el = 8 * 8;
    const visual = document.querySelector(".visual");
    const frag = document.createDocumentFragment();

    for (let i = 0; i < el; i++) {
        const divs = document.createElement("div");
        divs.classList.add("divs");
        frag.appendChild(divs);
    }

    visual.appendChild(frag);

    const mag = anime({
        targets: ".visual .divs",
        keyframes: [
            {
                translateX: anime.stagger("-.15rem", {
                    grid: [8, 8],
                    from: "center",
                    axis: "x",
                }),
                translateY: anime.stagger("-.15rem", {
                    grid: [8, 8],
                    from: "center",
                    axis: "y",
                }),
                ease: "easeOutQuad",
            },
            {
                translateX: anime.stagger(".325rem", {
                    grid: [8, 8],
                    from: "center",
                    axis: "x",
                }),
                translateY: anime.stagger(".325rem", {
                    grid: [8, 8],
                    from: "center",
                    axis: "y",
                }),
                ease: "easeOutQuad",
            },
            {
                translateX: 0,
                translateY: 0,
            },
        ],
        ease: "easeInQuad",
        delay: anime.stagger(5),
        duration: 7000,
        loop: true,
    });

    disableAnime.addEventListener("click", () => {
        mag.remove(".visual .divs");
    });
}

function developerTime() {
    const months = [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const day = new Date().getDate();
    const month = months[new Date().getUTCMonth()];
    const year = new Date().getUTCFullYear();

    const mainDate = `${day}${day >= 4 ? "th" : "st"} ${month} ${year}`;
    freeDate.innerText = mainDate;
}

function animateWorld() {}

developerTime();

// init
loadEvent();
