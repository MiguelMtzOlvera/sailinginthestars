document.addEventListener('click', musicPlay);

function musicPlay() {
    document.getElementById('ID').play();
    document.removeEventListener('click', musicPlay);
}
const cointainer = document.querySelector('.cointaner')
const rain = () => {
    let j = 0
    while (j <= 80) {
        let gout = document.createElement('i')
        let x = innerWidth * Math.random()
        let time = 1 * Math.random()
        gout.style.animationDuration = time <= 0.4 ?
            (time + 0.4) + 's' : time + 's'
        gout.style.animationDelay = time + 's'
        gout.style.left = x + 'px'
        cointainer.appendChild(gout)
        j++
    }
}
rain()