const mostraHora = () => {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
       hour12: false 
    });
}

console.log(mostraHora());

const timer = setInterval( () => {
    console.log(mostraHora());
}, 1000);

setTimeout(() => {
    clearInterval(timer)
}, 10000);

setTimeout(() => {
    clearTimeout(timer);
}, 3000);

setTimeout(() => {
    console.log('Olá mundo!')
}, 5000);

