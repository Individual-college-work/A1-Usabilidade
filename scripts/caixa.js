function colocarCaixaAlta(){
    var texto = document.getElementById("input-caixa");
    validaCampoPreenchido(texto.value);
    texto.value = texto.value.toUpperCase();
}

function colocarCaixaBaixa(){
    var texto = document.getElementById("input-caixa");
    validaCampoPreenchido(texto.value);
    texto.value = texto.value.toLowerCase();
}

function validaCampoPreenchido(texto){
    let textoSemEspacos = texto.replace(/\s+/g, '');
    if(!textoSemEspacos){
        alert("Preencha algum conteúdo no campo de texto para ser alterado!")
    }
}