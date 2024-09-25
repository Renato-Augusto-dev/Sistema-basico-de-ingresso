function comprar(){
    let tipoDeIngresso = document.querySelector('#tipo-ingresso').value;
    let quantidadeDeIngresso = parseInt(document.querySelector('#qtd').value);

    if(tipoDeIngresso == 'pista'){
        comprarIngresso(quantidadeDeIngresso, tipoDeIngresso);
    }else if(tipoDeIngresso == 'superior'){
        comprarIngresso(quantidadeDeIngresso,tipoDeIngresso);
    }else{
        comprarIngresso(quantidadeDeIngresso,tipoDeIngresso);
    }

}
function comprarIngresso(qtd,tipoDeIngresso){
    let qtdPista = parseInt(document.querySelector('#qtd-pista').textContent);
    let qtdSuperior = parseInt(document.querySelector('#qtd-superior').textContent);
    let qtdInferior = parseInt(document.querySelector('#qtd-inferior').textContent);

    if(tipoDeIngresso == 'pista'){
        if(qtd > qtdPista){
            alert('Quantidade indisponivel para compra');
        }else{
            qtdPista = qtdPista - qtd;

            document.querySelector('#qtd-pista').textContent = qtdPista;
            alert('Compra realizada com sucesso');
        }
    }else if(tipoDeIngresso == 'superior'){
        if(qtd > qtdSuperior){
            alert('Quantidade indisponivel para compra');

        }else{
            qtdSuperior = qtdSuperior - qtd;

            document.querySelector('#qtd-superior').textContent = qtdSuperior;

            alert('Compra realiazda com sucesso');
        }
    }
    else{
        if(qtd > qtdInferior){
            alert('Quantidade indisponivel para compra');
            
        }else{
            qtdInferior = qtdInferior - qtd;
            document.querySelector('#qtd-inferior').textContent = qtdInferior;

            alert('Compra realizada com sucesso');
        }
    }
}