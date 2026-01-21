//var Media Exame //
let resultadoExame = document.getElementById("resultadoExame");
let notaExame = document.getElementById("notaExame");
let mediaFinal = document.getElementById("mediaFinal");
let mostrarResultado = document.getElementById("mostrarResultadoExame");

// Media Exame Função//


function calcularMediaExame() {

    let mFinal = parseFloat(mediaFinal.value);
    let Exame = parseFloat(notaExame.value);
    let mediaExame = (mFinal + Exame) / 2;

    if (mediaExame >= 5.0) {
        mostrarResultado.innerHTML = "<p> Parabéns! Você foi aprovado com média: " + mediaExame.toFixed(1) + "</p>";
    } else {
        mostrarResultado.innerHTML = "<p class='mediaBaixa'> Infelizmente você foi reprovado com média: " + mediaExame.toFixed(1) + "</p>";
    }

}

resultadoExame.addEventListener("click", calcularMediaExame);

mediaFinal.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (mediaFinal.value !== "" && notaExame.value !== "") {
            calcularMediaExame();
        }
        else {
            mostrarResultado.innerHTML = "<p class='mediaBaixa' id='resultadoIntervalo'> Por favor, preencha ambos os campos de nota antes de pressionar Enter. </p>";

        }
    }

});

notaExame.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (mediaFinal.value !== "" && notaExame.value !== "") {
            calcularMediaExame();
        }
        else {
            mostrarResultado.innerHTML = "<p class='mediaBaixa' id='resultadoIntervalo'> Por favor, preencha ambos os campos de nota antes de pressionar Enter. </p>";

        }
    }

});