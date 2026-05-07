const numeros = [
    50,
    200,
    250,
    800,
    992.87,
    800,
    500,
    9876,
    99,
    134
];

const novosNumeros = numeros.map((num) => {
    return num * 2;
});
// novosNumeros.forEach((num) => {
//     console.log(num);
// });	
//Rodar o map gerando um novo array com o dobre dos numeros do original
//apos, exiba o valores do array dobre no console utilizando o foreaxh
let textoResultado = "";
novosNumeros.forEach((num) => {
    textoResultado += `${num} |`;
});

console.log(textoResultado);//mostra o texto completo

textoResultado = textoResultado.substring(0, textoResultado.length - 2);
console.log(textoResultado);

