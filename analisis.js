//Helpers
function esPar(num){
    return (num % 2 === 0);
}

function calcularMediaAritmetica(lista){   
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Calculadora de medianas
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    let mediana;
    if(esPar(lista.length)){
        const elemento1 = lista[mitad];
        const elemento2 = lista[mitad - 1];

        return mediana = calcularMediaAritmetica([elemento1, elemento2]);
    }else{
        return mediana = lista[mitad];
    }
}


//Mediana General
const salariosCol = colombia.map(
    function(user){
        return user.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(a, b){
        return a- b;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted)

//Mediana del top 10%
const spliceStart = salariosColSorted.length - (salariosColSorted.length * 0.1);
const spliceCount = salariosColSorted.length * 0.1;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount)

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    {
        medianaGeneralCol,
        medianaTop10Col,
    }
)