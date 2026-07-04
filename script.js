// =============================
// Open Birthday Surprise
// =============================

function openGift() {

    document.getElementById("welcome").style.display = "none";

    document.getElementById("hero").style.display = "flex";
    document.getElementById("letter").style.display = "flex";
    document.getElementById("gift").style.display = "flex";

    document.getElementById("hero").classList.add("fade");
    document.getElementById("letter").classList.add("fade");
    document.getElementById("gift").classList.add("fade");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    createConfetti();
}

// =============================
// Final Surprise
// =============================

function showMessage() {

    document.getElementById("final").style.display = "flex";
    document.getElementById("final").classList.add("fade");

    document.getElementById("final").scrollIntoView({
        behavior: "smooth"
    });

    createConfetti();

    alert("❤️ Happy Birthday Elvina! ❤️");
}

// =============================
// Floating Hearts
// =============================

function createHeart() {

    const hearts = document.querySelector(".hearts");

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 4 + 5 + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 300);

// =============================
// Confetti Effect
// =============================

function createConfetti() {

    for (let i = 0; i < 120; i++) {

        let confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.width = "8px";
        confetti.style.height = "8px";

        const colors = [
            "#ff4d88",
            "#ffd700",
            "#00e5ff",
            "#7CFC00",
            "#ffffff",
            "#ff8fab"
        ];

        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-10px";

        confetti.style.borderRadius = "50%";

        confetti.style.pointerEvents = "none";
        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        let pos = -10;

        let speed = Math.random() * 4 + 2;

        let drift = Math.random() * 4 - 2;

        const fall = setInterval(() => {

            pos += speed;

            confetti.style.top = pos + "px";

            confetti.style.left =
                parseFloat(confetti.style.left) + drift + "px";

            confetti.style.transform =
                `rotate(${pos * 5}deg)`;

            if (pos > window.innerHeight + 50) {

                clearInterval(fall);

                confetti.remove();

            }

        }, 16);

    }

}

// =============================
// Typewriter Effect
// =============================

window.addEventListener("load", () => {

    const heading = document.querySelector(".hero-content h1");

    if (!heading) return;

    const original = heading.innerHTML;

    heading.innerHTML = "";

    let i = 0;

    function type() {

        if (i < original.length) {

            heading.innerHTML += original.charAt(i);

            i++;

            setTimeout(type, 60);

        }

    }

    type();

});

// =============================
// Twinkling Stars
// =============================

function createStar() {

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.fontSize =
        Math.random() * 12 + 8 + "px";

    star.style.opacity = Math.random();

    star.style.pointerEvents = "none";

    star.style.animation = "fade 2s linear";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 2000);

}

setInterval(createStar, 500);

// =============================
// Birthday Greeting
// =============================

console.log(
    "🎂 Happy Birthday Elvina ❤️\nMade with Love by Abdul Wahab"
);