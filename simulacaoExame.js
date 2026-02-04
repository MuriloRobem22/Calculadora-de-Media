let mediaFinalInput = document.getElementById("notaMediaFinal"); //nota media regular
let mostrarResultado = document.getElementById("mostrarResultado") //div onde o resultado vai ser mostrado
let mediaESimuladaBtn = document.getElementById("simularMediaBtn")
let puxarHistorico = JSON.parse(localStorage.getItem('historicoSimulacaoExame'))
let historicoSimulacaoE = puxarHistorico || [];

let exibirHistorico = document.getElementById('listaHistorico')

function simularEMedia() {



    //logica de simulação nota regular
    let mediaESimulada = ((5 - parseFloat(mediaFinalInput.value) * 0.5) / 0.5)

    let registro = {
        media: mediaESimulada.toFixed(2),
        data: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString(),
    }

    if (isNaN(mediaESimulada)) {
        mostrarResultado.innerHTML = `<p class="mediaBaixa">Insira a nota!</p>`
    }

    else {
        mostrarResultado.innerHTML = `<p>Você precisa de ${mediaESimulada.toFixed(2)} para ser aprovado!</p>`
        historicoSimulacaoE.unshift(registro);
        localStorage.setItem('historicoSimulacaoExame', JSON.stringify(historicoSimulacaoE))
    }

    listaHistorico.innerHTML = ''

    historicoSimulacaoE.forEach(registro => {

        let listaHistoricoSE = document.createElement('li')

        listaHistoricoSE.textContent = `
        
        Nota Necessaria: ${registro.media}
        Data: ${registro.data}
        Hora: ${registro.hora}

        `
        exibirHistorico.appendChild(listaHistoricoSE)

    });

}

historicoSimulacaoE.forEach(registro => {

    let listaHistoricoSE = document.createElement('li')

    listaHistoricoSE.textContent = `
        
        Nota Necessaria: ${registro.media}
        Data: ${registro.data}
        Hora: ${registro.hora}

        `
    exibirHistorico.appendChild(listaHistoricoSE)

});

mediaESimuladaBtn.addEventListener("click", simularEMedia);
mediaFinalInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        simularEMedia();
    }
});

