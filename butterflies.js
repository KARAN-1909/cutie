document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < 10; i++) {
        const butterfly = document.createElement('div');
        butterfly.classList.add('butterfly');
        butterfly.style.left = `${Math.random() * 100}vw`;
        butterfly.style.top = `${Math.random() * 100}vh`;
        document.body.appendChild(butterfly);
    }

    // Add balloons
    const balloons = ['balloon-1.png', 'balloon-2.png', 'balloon-3.png'];
    balloons.forEach((balloon, index) => {
        const balloonEl = document.createElement('div');
        balloonEl.classList.add('balloons', `balloon-${index + 1}`);
        balloonEl.style.backgroundImage = `url(${balloon})`;
        document.body.appendChild(balloonEl);
    });

    // Add cake image
    // const cake = document.createElement('img');
    // cake.src = 'cake.png';
    // cake.classList.add('cake');
    // const container = document.querySelector('.container');
    // if (container) {
    //     container.appendChild(cake);
    // }
});
