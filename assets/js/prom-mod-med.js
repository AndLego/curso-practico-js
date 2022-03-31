//Funcion para Promedio
function calcularMediaAritmetica(lista){   
    // let sumaLista = 0;
    
    // for(i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Calculos para moda
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

//Calculos Mediana
const lista1 = [
    100,
    300,
    150,
    40000,
    200,
    500,
     80
];

lista1.sort(function(a,b){
    return a-b
})

function calcularMediana(){
    const mitadLista1 = parseInt(lista1.length / 2);
    
    function esPar(numerito){
        if(numerito % 2 ===0){
            return true
        }else{
            return false
        }
    }
    
    let mediana;
    
    if(esPar(lista1.length)){
        const elemento1 = lista1[mitadLista1 - 1];
        const elemento2 = lista1[mitadLista1];
    
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    
        mediana = promedioElemento1y2;
    }else {
        mediana = lista1[mitadLista1];
    }
    return mediana  
}

//Promedio Ponderado

const notas = [
    {
        curso: "Educacion Fisica",
        nota: 10,
        creditos: 3
    },
    {
        curso: "Matematicas",
        nota: 4,
        creditos: 6
    },
    {
        curso: "Programacion",
        nota: 7,
        creditos: 4
    },
    {
        curso: "Finanzas",
        nota: 2,
        creditos: 1
    }
];

function calcularPromedioPonderado(){
    const notasConCredito = notas.map(function(object){
        return object.nota * object.creditos;
    })
    const sumaNotasConCredito = notasConCredito.reduce(
        function(sum = 0, newVal){
            return sum + newVal;
        }
    )
    const creditos = notas.map(function(credito){
        return credito.creditos;
    })
    const sumaCreditos = creditos.reduce(
        function(sum = 0, newVal){
        return sum + newVal
        }
    ) 
    const promedioPonderado = sumaNotasConCredito / sumaCreditos
    return promedioPonderado
}
