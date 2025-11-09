function LightOnAndOff() {
    const bulb = document.getElementById('ligth');
    const btn = document.getElementById('switchBtn')
    
    if (bulb.src.includes('white_lamp')) {
        bulb.src = './img/yellow_lamp.png';
        btn.textContent = 'Spegni';
        bulb.classList.add('pe-5')
        bulb.classList.remove('ps-5')
    }
    else {
        bulb.src = './img/white_lamp.png';
        btn.textContent = 'Accendi';
        bulb.classList.remove('pe-5')
        bulb.classList.add('ps-5')
    }
    
}

document.getElementById('switchBtn').addEventListener('click', LightOnAndOff)
