//Calculador Interes Simple
//(Capital x Tasa x Tiempo) / 100
function calcularInteresSimple(){
    const capitalInicial = document.getElementById("InputMoney").value;
    const porcentajeInteres = document.getElementById("InputInteres").value;
    const tiempo = document.getElementById("InputTiempo").value;

    const interesSimple = (capitalInicial * porcentajeInteres * tiempo) / 100;

    const result = document.getElementById("Result");

  
    return result.innerText = `Tu inversión con un capital de ${capitalInicial} y un interes simple de ${porcentajeInteres} % anual por un tiempo de ${tiempo} años retornaria ${interesSimple}`;
}

//Calculador Interes Compuesto
//Capital [(1 + Tasa) Tiempo – 1]
//Math.pow(a, b) == a ** b
function calcularInteresCompuesto(){
    const capitalInicial = document.getElementById("InputMoney").value;
    const porcentajeInteres = document.getElementById("InputInteres").value;
    const tiempo = document.getElementById("InputTiempo").value;

    const interesCompuesto = capitalInicial * (((1 + porcentajeInteres / 100) ** tiempo) - 1);
  
    const result = document.getElementById("Result");
    return result.innerText =  `Tu inversión con un capital de ${capitalInicial} y un interes compuesto de ${porcentajeInteres} % anual por un tiempo de ${tiempo} años retornaria ${interesCompuesto.toFixed(2)}`;
}

function elegirInteres(){
    const tipoInteres = document.getElementById("InputSelect")
    console.log(tipoInteres.value)
    if(tipoInteres.value == "sim"){
        calcularInteresSimple()
    }else{
        calcularInteresCompuesto()
    }
}