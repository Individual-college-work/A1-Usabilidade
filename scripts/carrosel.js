function trocarImagem(isEsquerda){
    var listaImagens = document.getElementsByClassName("figura-transicao");
    for (let idx = 0; idx < listaImagens.length; idx++) {
        const umaImagem = listaImagens[idx];
        if(umaImagem.style.display == "block"){
           mudaProximaImagem(isEsquerda, idx, listaImagens);
           break;
        }
    }
}

function mudaProximaImagem(isEsquerda, indice, listaImagens){
    listaImagens[indice].style.display = "none";
    if(isEsquerda){
        if(indice == 0){
            listaImagens[listaImagens.length-1].style.display = "block";
        }else{
            listaImagens[indice-1].style.display = "block";   
        }
    }else{
        if(indice == (listaImagens.length-1)){
            listaImagens[0].style.display = "block";
        }else{
            listaImagens[indice+1].style.display = "block";  
        }  
    }
}

sorteiaImagemInicial();
function sorteiaImagemInicial(){
    var listaImagens = document.getElementsByClassName("figura-transicao");
    const idxImgEscolhida = retornaRandomEntreIntervalo(0, listaImagens.length);
    listaImagens[idxImgEscolhida].style.display = "block";
}

function retornaRandomEntreIntervalo(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}