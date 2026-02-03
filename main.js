//var Media regular //

let notaProva = document.getElementById("notaProva"); //nota prova
let notaAtividades = document.getElementById("notaAtividades"); //nota atividade
let resultadoRegular = document.getElementById("resultadoRegular"); //botão calcular
let mostrarResultado = document.getElementById("mostrarResultado"); //div onde o resultado é mostrado
let historico = JSON.parse(localStorage.getItem('mediaRegularStorage')) || []; //lista onde os resultados são armazenados
let puxarHistorico = JSON.parse(localStorage.getItem('mediaRegularStorage')) //variavel que armazena o historico armazenado no local Storage
let listaH = document.getElementById("listaHistorico");  //div onde o historico é mostrado



// Media Regular Função//
function calcularMediaRegular() {
    //pegando o valor da prova no input
    let prova = parseFloat(notaProva.value); //pegando o valor da prova no input
    let Atividades = parseFloat(notaAtividades.value); //pegando o valor da atividade no input
    let mediaRegular = (prova * 0.6 + Atividades * 0.4); //calculando a media com os valores

    //criando um objeto para armazenar as informações de calculo de media
    let registro = {
        media: mediaRegular,
        data: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString(),
    };

    //validações de resultado se foi aprovado ou não e subindo para o local Storage
    if (mediaRegular >= 5.0) {
        mostrarResultado.innerHTML = "<p> Parabéns! Você foi aprovado com média: " + mediaRegular.toFixed(2) + "</p>";
        historico.unshift(registro);//adicionando o objeto registro na primeira posição da lista
        localStorage.setItem('mediaRegularStorage', JSON.stringify(historico))
    }
    // invalidando o calculo caso os campos sejam nulos
    else if (isNaN(mediaRegular) || mediaRegular == null) {
        mostrarResultado.innerHTML =
            "<p class='mediaBaixa' id='resultadoIntervalo'> Por favor, preencha ambos os campos de nota antes de pressionar Enter. </p>";
    }
    //validações de resultado se foi aprovado ou não e subindo para o local Storage
    else {
        mostrarResultado.innerHTML = "<p class='mediaBaixa' id='resultadoIntervalo'> Infelizmente você foi reprovado com média: " + mediaRegular.toFixed(2) + "</p>";
        historico.unshift(registro);
        localStorage.setItem('mediaRegularStorage', JSON.stringify(historico))
    }

    //mostrando o historico atualizado
    listaH.innerHTML = " "

    historico.forEach((registro) => {
        let resultado = registro.media >= 5.0 ? "Foi aprovado" : "Foi reprovado"

        let listaHistorico = document.createElement("li");
        listaHistorico.textContent =
            `Cálculo ${registro.data}:

                Média = ${registro.media}
                resultado = ${resultado}
                Hora = ${registro.hora}`;
        listaH.appendChild(listaHistorico);


    });

}
//mostrando historico antigo sempre que iniciar a pagina
historico.forEach((registro) => {
    let resultado = registro.media >= 5.0 ? "Foi aprovado" : "Foi reprovado"

    let listaHistorico = document.createElement("li");
    listaHistorico.textContent =
        `Cálculo ${registro.data}:

                Média = ${registro.media}
                resultado = ${resultado}
                Hora = ${registro.hora}`;
    listaH.appendChild(listaHistorico);


});


//chamando a função de calculo de media pela tecla "enter" e pelo botão
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