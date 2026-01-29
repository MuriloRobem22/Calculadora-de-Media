//var Media regular //

let notaProva = document.getElementById("notaProva");
let notaAtividades = document.getElementById("notaAtividades");
let resultadoRegular = document.getElementById("resultadoRegular");
let mostrarResultado = document.getElementById("mostrarResultado");
let historico = JSON.parse(localStorage.getItem('mediaRegularStorage')) || [];
let puxarHistorico = JSON.parse(localStorage.getItem('mediaRegularStorage'))


// Media Regular Função//
function calcularMediaRegular() {
    let prova = parseFloat(notaProva.value);
    let Atividades = parseFloat(notaAtividades.value);
    let mediaRegular = (prova * 0.6 + Atividades * 0.4);
    let registro = {
        media: mediaRegular,
        data: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString(),
    };

    //adicionando o valor do imput na lista
    historico.push(registro);
    //mandando o valor para o localstorage
    localStorage.setItem('mediaRegularStorage', JSON.stringify(historico))


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


    historico.forEach((registro, index) => { 
    let resultado = registro.media >= 5.0 ? "Foi aprovado" : "Foi reprovado"
    console.log(`Cálculo ${index + 1}: 
        Média = ${registro.media}
        Data = ${registro.data}
        Hora = ${registro.hora}
        resultado = ${resultado}`
    ); 
});

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