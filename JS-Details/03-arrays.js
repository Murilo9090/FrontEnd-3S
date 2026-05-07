let frutasVermelhas = new Array();
let frutasCitricas = ["Limão","Abacaxi", "Maracujá", "Tangerina" , "Acerola"];

// frutasCitricas[0] = "Morango";
frutasVermelhas.push("Morango");
frutasVermelhas.push("Maça");
frutasVermelhas.push("Framboesa");
frutasVermelhas.push("Cereja");
frutasVermelhas.push("Tomate");


console.log(frutasVermelhas);
console.log(frutasCitricas);


let frutaRomovido = frutasVermelhas.pop();//remove o ultimo item da lista/array
console.log(frutaRomovido);