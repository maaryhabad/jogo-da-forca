var botao = document.getElementById("btnCadastrar");

// botao.onclick = function(event) {
//     event.preventDefault();
//     alert("mensagem marota");
// };  ISSO AQUI É IGUAL AO CÓDIGO ABAIXO

$("#btnCadastrar").click(function(event) { //("#btnCadastrar") você pode chamar como chama no css, por exemplo ("#cadastro button")
    event.preventDefault();
    
    //Declarar variável palavra com o valor do input
    var palavra = $("#palavra").val();

    //Verificar se campo está vazio
    if (palavra == "") {
        //Se estiver vazio mostra a mensagem de erro
        alert("Por favor, preencha o campo");
    } else {
        //Se não estiver vazio, montar os underlines
        for (i=0; i < palavra.length; i++) {
            var span = $("<span>"+palavra[i]+"</span>");
            span.appendTo(".letras");
            
            $(".letras").onkeyup(function(){
                $(".letras").css("color", "pink");
            });

        }
        
        //Se não estiver vazio mostrar a tela forca
            //Adicionar classe na tela da forca
            $("#forca").addClass("visivel");
            //Remover classe na tela do cadastro
            $("#cadastro").removeClass("visivel");
    }
    
});