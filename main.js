let formulario = document.querySelector(".fale-conosco");
let mascara = document.querySelector(".mascara-form");
let somClique = document.querySelector(".somClique");
let fundoAudio = document.querySelector('.somFundo');

document.body.addEventListener('click', function () {
    // Obtém o elemento de áudio pelo nome de classe
    var audioElement = document.querySelector('.somFundo');

    // Inicia a reprodução do áudio
    if (audioElement) {
        audioElement.play();
        audioElement.loop = true;
    }
    if (fundoAudio) {
        // Reduz o volume em 10%
        fundoAudio.volume = Math.max(0, fundoAudio.volume - 0.3);
    }
});

function cliqueiNoBotao() {
    formulario.style.left = "700px";
    mascara.style.visibility = "visible";
    somClique.play();
}

function sumirFormulario() {
    formulario.style.left = "-320px";
    mascara.style.visibility = "hidden";
}
