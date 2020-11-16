const getTimeFromSecond = (segundos) => {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

console.log(getTimeFromSecond(12));
let segundos = 0;
let timer1;

const iniciaRelogio = () => {
    timer1 = setInterval(() => {
        segundos++;
        timer.innerHTML = getTimeFromSecond(segundos);
    }, 1000);
}

document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('zerar')) {
        timer.classList.remove('pausar');
        clearInterval(timer1);
        timer.innerHTML = '00:00:00'
        segundos = 0;
    }

    if (el.classList.contains('iniciar')) {
        timer.classList.remove('pausar');
        clearInterval(timer1);
        iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
        clearInterval(timer1);
        timer.classList.add('pausar');
    }
});

