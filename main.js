//var Media regular //

let notaProva = document.getElementById("notaProva");
let notaAtividades = document.getElementById("notaAtividades");
let resultadoRegular = document.getElementById("resultadoRegular");
let mostrarResultado = document.getElementById("mostrarResultado");


// Media Regular Função//
function calcularMediaRegular() {
    let prova = parseFloat(notaProva.value);
    let Atividades = parseFloat(notaAtividades.value);
    let mediaRegular = (prova * 0.6 + Atividades * 0.4);

    if (mediaRegular >= 5.0) {
        mostrarResultado.innerHTML = "<p> Parabéns! Você foi aprovado com média: " + mediaRegular.toFixed(1) + "</p>";
    } 
    else if (isNaN(mediaRegular) || mediaRegular == null) { 
    mostrarResultado.innerHTML = 
    "<p class='mediaBaixa' id='resultadoIntervalo'> Por favor, preencha ambos os campos de nota antes de pressionar Enter. </p>"; 
}
    else {
        mostrarResultado.innerHTML = "<p class='mediaBaixa' id='resultadoIntervalo'> Infelizmente você foi reprovado com média: " + mediaRegular.toFixed(1) + "</p>";
    }


}

resultadoRegular.addEventListener("click", calcularMediaRegular);
notaAtividades.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
 
            calcularMediaRegular();

    }

});
notaProva.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {

            calcularMediaRegular();
    

    }

});