function verificarResposta(resposta){

    const resultado = document.getElementById("resultado");

    if(resposta === "certo"){
        resultado.innerHTML = "✅ Parabéns! A rotação de culturas ajuda a conservar o solo.";
        resultado.style.color = "green";
    }
    else{
        resultado.innerHTML = "❌ Resposta incorreta. Tente novamente!";
        resultado.style.color = "red";
    }

}
