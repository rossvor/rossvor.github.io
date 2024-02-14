
function setRandomBackgroundColor(el, colors) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.backgroundColor = randomColor;
}

setInterval(function() {
    setRandomBackgroundColor(document.body, [
        "#f0fff9",
        "#fdfff0",
        "#fff0fc",
        "#f0f3ff",
        "#ffffff",
    ]);
}, 5_000); // 5s


const linkEls = document.querySelectorAll('a');
const linkLines = document.querySelectorAll('.link-line[data-show]');
const hoverSound = document.getElementById('hover-sound');
const gongSound = document.getElementById('gong-sound');

// set sane volume levels
hoverSound.volume = 0.5;
gongSound.volume = 0.3;

linkEls.forEach(function (element) {
    element.addEventListener('click', () => {
        gongSound.currentTime = 0;
        gongSound.play();
    });
});

linkLines.forEach(function (element) {
    const imgId = element.getAttribute('data-show');
    const linkedImg = document.getElementById(imgId);

    element.addEventListener('mouseover', () => {
        linkedImg.classList.remove('representation');
        linkedImg.classList.add('fade-in-element');
        hoverSound.currentTime = 0;
        hoverSound.play();
    });
    element.addEventListener('mouseout', () => {
        linkedImg.classList.remove('fade-in-element');
        linkedImg.classList.add('representation');
    });
});

// mute sound toggle handling
document.getElementById('mute-button').addEventListener('click', function(e) {
    const el = e.target;
    const newState = !JSON.parse(el.dataset.muted);
    document.querySelectorAll('audio').forEach(function(audio) {audio.muted = newState;});
    el.dataset.muted = newState;
    el.textContent = newState ? '🔇' : '🔊';
});
