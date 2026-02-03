//var Media Exame //
let resultadoExame = document.getElementById("resultadoExame");
let notaExame = document.getElementById("notaExame");
let mediaFinal = document.getElementById("mediaFinal");
let mostrarResultado = document.getElementById("mostrarResultadoExame");
let historico = JSON.parse(localStorage.getItem('mediaExameStorage')) || [];
let puxarHistorico = JSON.parse(localStorage.getItem('mediaExameStorage'))
let listaHExame = document.getElementById("listaHistoricoExame");
// Media Exame Função//



function calcularMediaExame() {



    let mFinal = parseFloat(mediaFinal.value);
    let Exame = parseFloat(notaExame.value);
    let mediaExame = (mFinal + Exame) / 2;
    let registro = {
        media: mediaExame,
        data: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString(),
    };

    if (mediaExame >= 5.0) {
        mostrarResultado.innerHTML = "<p> Parabéns! Você foi aprovado com média: " + mediaExame.toFixed(1) + "</p>";
        //adicionando o valor do imput na lista
        historico.unshift(registro);
        //mandando o valor para o localstorage
        localStorage.setItem('mediaExameStorage', JSON.stringify(historico))
    }
    else if (isNaN(mediaExame) || mediaExame == null) {
        mostrarResultado.innerHTML =
            "<p class='mediaBaixa' id='resultadoIntervalo'> Por favor, preencha ambos os campos de nota antes de pressionar Enter. </p>";
    }
    else {
        mostrarResultado.innerHTML = "<p class='mediaBaixa'> Infelizmente você foi reprovado com média: " + mediaExame.toFixed(1) + "</p>";
        //adicionando o valor do imput na lista
        historico.unshift(registro);
        //mandando o valor para o localstorage
        localStorage.setItem('mediaExameStorage', JSON.stringify(historico))
    }

    listaHExame.innerHTML = " "

    historico.forEach((registro) => {
        let resultado = registro.media >= 5.0 ? "Foi aprovado" : "Foi reprovado"

        let listaHistoricoExame = document.createElement("li");
        listaHistoricoExame.textContent =
            `Cálculo ${registro.data}:

                Média = ${registro.media}
                resultado = ${resultado}
                Hora = ${registro.hora}`;
        listaHExame.appendChild(listaHistoricoExame);


    });

}

historico.forEach((registro) => {
    let resultado = registro.media >= 5.0 ? "Foi aprovado" : "Foi reprovado"

    let listaHistoricoExame = document.createElement("li");
    listaHistoricoExame.textContent =
        `Cálculo ${registro.data}:

                Média = ${registro.media}
                resultado = ${resultado}
                Hora = ${registro.hora}`;
    listaHExame.appendChild(listaHistoricoExame);


});

resultadoExame.addEventListener("click", calcularMediaExame);

mediaFinal.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {

        calcularMediaExame();

    }
}

);

notaExame.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {

        calcularMediaExame();
    }
});