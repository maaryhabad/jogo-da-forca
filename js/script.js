//var botao = document.getElementById("btn-cadastrar");

// botao.onclick = function(event) {
//     event.preventDefault();
//     alert("mensagem marota");
// };  ISSO AQUI É IGUAL AO CÓDIGO ABAIXO
var comecou = false;
var letrasChutadas = [];
var palavra = "";

$("#cadastro button").click(function(event) { //("#btnCadastrar") você pode chamar como chama no css, por exemplo ("#cadastro button")
    event.preventDefault();
    
    //Declarar variável palavra com o valor do input
    palavra = $("#palavra").val();

    //Verificar se campo está vazio
    if (palavra == "") {
        //Se estiver vazio mostra a mensagem de erro
        alert("Por favor, preencha o campo");
    } else {
        //Se não estiver vazio, montar os underlines
        palavra = palavra.trim();

        for (i=0; i < palavra.length; i++) {
            var span = $("<span>"+palavra[i]+"</span>");
            span.appendTo(".letras");
            console.log(palavra);
        }
        
        //Se não estiver vazio mostrar a tela forca
            //Adicionar classe na tela da forca
            $("#forca").addClass("visivel");
            //Remover classe na tela do cadastro
            $("#cadastro").removeClass("visivel");
            comecou = true;
    }
    
});

$(document).keydown(function(event) {
    if (comecou) {
        var letra = event.key;
        //Validando se é apenas uma letra
        if (letra.length > 1) {
            return;
        }
        //Vai verificar se a letra já foi utilizada
        if(letrasChutadas.indexOf(letra) != -1) {
            return;
        }

        //Registrar a letra utilizada
        letrasChutadas.push(letra);
        var span = $("<span>"+letra+"<span>");
        span.appendTo(".letras-usadas");
        //Letra existe na palavra cadastrada?
        if(letrasChutadas.indexOf(letra) != -1) {
            //Se sim 
                //mostra no campo a letra correspondente
                for (var i=0 ; i<palavra.length; i++) {
                    var letra2 = palavra[i];
                    if (letra == letra2) {
                        $(".letras span").eq(i).addClass("visivel"); //eq é pra pegar o índice
                    }
                }
                //Se a palavra estiver completa
                    //Mostra o final correto
        } else {
            //Se não 
                //mostra o membro do boneco
                //Se excedeu as tentativas
                    //Mostra a família triste
        }
            

            
        
    }

});