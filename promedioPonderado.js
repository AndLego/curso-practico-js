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

