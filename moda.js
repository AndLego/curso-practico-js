const lista = [
    10,
    20,
    30,
    10,
    20,
    30,
    40,
    20,
    20,
    10
];


function calcularModa(lista){
    const listaCount = {};
    
    lista.map(function(elemento){
        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        }else{
            listaCount[elemento] = 1;
        }
    });
    
    //pasar un objeto a array
    const lista1Array = Object.entries(listaCount).sort(
        function(valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1]
        }
    );
    
    const moda = lista1Array[lista1Array.length - 1];    
    return `La moda es ${moda[0]} repetido ${moda[1]} veces`
}
