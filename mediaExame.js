//var Media Exame //
let resultadoExame = document.getElementById("resultadoExame");
let notaExame = document.getElementById("notaExame");
let mediaFinal = document.getElementById("mediaFinal");
let mostrarResultado = document.getElementById("mostrarResultadoExame");
let historico = JSON.parse(localStorage.getItem('mediaExameStorage')) || [];
let puxarHistorico = JSON.parse(localStorage.getItem('mediaExameStorage'))

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
        historico.push(registro);
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
        historico.push(registro);
        //mandando o valor para o localstorage
        localStorage.setItem('mediaExameStorage', JSON.stringify(historico))
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