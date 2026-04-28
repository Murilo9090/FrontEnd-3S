function calcular() {
    // alert("Função calcular() Rodando");

    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    console.log(altura);
    console.log(peso);

    if(nome.trim().length == 0 || isNaN (altura)  || isNaN(peso)){
        alert("Por favor, precisa todos os campos.");
        return false;
    }
    console.log("liberando para cadastrar");
        
}