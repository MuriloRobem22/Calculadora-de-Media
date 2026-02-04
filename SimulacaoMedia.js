let notaAtividades = document.getElementById("notaAtividades"); //nota atividade
let mostrarResultado = document.getElementById("mostrarResultado") //div onde o resultado vai ser mostrado
let mediaSimuladaBtn = document.getElementById("simularMediaBtn")
let puxarHistoricoSimulacao = JSON.parse(localStorage.getItem('simulacaoHistorico'))
let historicoSimulacao = puxarHistoricoSimulacao || []

let exibirHistorico = document.getElementById('listaHistorico')

function simularMedia() {

    //logica de simulação nota regular
    let mediaSimulada = ((5 - parseFloat(notaAtividades.value) * 0.4) / 0.6)

    let registro = {
        media: mediaSimulada.toFixed(2),
        data: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString(),
    }

    if (isNaN(mediaSimulada)) {
        mostrarResultado.innerHTML = `<p class="mediaBaixa">Por favor, insira a nota final das atividades!</p>`
    }
    else {
        mostrarResultado.innerHTML = `<p>Você precisa de ${mediaSimulada.toFixed(2)} para ser aprovado!</p>`


        historicoSimulacao.unshift(registro)
        localStorage.setItem('simulacaoHistorico', JSON.stringify(historicoSimulacao))
    }

    exibirHistorico.innerHTML = '';

    historicoSimulacao.forEach(registro => {

        let liElemento = document.createElement('li')

        liElemento.textContent = `
            Necessario Media: ${registro.media}
            Data: ${registro.data}
            Hora: ${registro.hora}
            `;
        exibirHistorico.appendChild(liElemento)
    });

}



historicoSimulacao.forEach(registro => {

    let liElemento = document.createElement('li')

    liElemento.textContent = `
            Nota Necessaria: ${registro.media}
            Data: ${registro.data}
            Hora: ${registro.hora}
            `;
    exibirHistorico.appendChild(liElemento)
});


simularMediaBtn.addEventListener("click", simularMedia)
notaAtividades.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        simularMedia();
    }
});