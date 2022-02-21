function playSound(positionSound) {
    const element = document.querySelector(positionSound);

    if (element === null) {
        alert('Elemento não encontrado');
    }

    if (element != null && element.localName === 'audio') {
        element.play();
    } else {
        alert('Elemento não encontrado');
    }
}

const keyList = document.querySelectorAll('.tecla');

keyList[0].onclick = som_tecla_pom;

for (let cont = 0; cont < keyList.length; cont++) {

    const key = keyList[cont];

    const className = key.classList[1];

    const idSound = `#som_${className}`;

    key.onclick = function () {
        playSound(idSound);
    };

    key.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter')
            key.classList.add('ativa');
    }

    key.onkeyup = function () {
        key.classList.remove('ativa');
    }

}


