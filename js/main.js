function switchOnAndOff() {
    const bulb = document.getElementById('light');
    const btn = document.getElementById('switchBtn');

    if (bulb.src.includes('white_lamp')) {
        bulb.src = './img/yellow_lamp.png';
        btn.textContent = 'Spegni';
        bulb.classList.replace('ps-5', 'pe-5')
    }
    else {
        bulb.src = './img/white_lamp.png';
        btn.textContent = 'Accendi';
        bulb.classList.replace('pe-5', 'ps-5')
    }

}

document.getElementById('switchBtn').addEventListener('click', switchOnAndOff);

document.getElementById('ico').addEventListener('mouseover', () => {
    document.getElementById('ico').src = './img/yellow_lamp.png';
});

document.getElementById('ico').addEventListener('mouseout', () => {
    document.getElementById('ico').src = './img/white_lamp.png';
});

