var botao = document.getElementById("btnCadastrar");

// botao.onclick = function(event) {
//     event.preventDefault();
//     alert("mensagem marota");
// };  ISSO AQUI É IGUAL AO CÓDIGO ABAIXO

$("#btnCadastrar").click(function(event) { //("#btnCadastrar") você pode chamar como chama no css, por exemplo ("#cadastro button")
    event.preventDefault();
    
    //Declarar variável palavra com o valor do input
    var palavra = $("#palavra").val();

    if (palavra == "") {
        alert("Por favor, preencha o campo");
    }


    //Verificar se campo está vazio

    //Se estiver vazio mostra a mensagem de erro

    //Se não estiver vazio, montar os underlines
});