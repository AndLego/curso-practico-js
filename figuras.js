//Codigo del Cuadrado
console.group(`Cuadrados`);

function perimetroCuadrado(lado){
    return lado * 4;
}

areaCuadrado = lado => lado * lado;


console.groupEnd();

//Codigo del Triangulo
console.group(`Triangulos`)

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base
}

areaTriangulo = (altura, base) => (altura * base)/2;

console.groupEnd(`Triangulos`)

//Codigo del Circulo
console.group(`Circulos`);

diametroCirculo = radio => radio * 2;

const PI = Math.PI;

function perimetroCirculo(radio){
    diametro = diametroCirculo(radio)
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio)*PI;
}

console.groupEnd();

//Main functions


function calculatePerimeterSquare(){
   const input =  document.getElementById("InputCuadrado");
   const value = input.value;

   const perimetro = perimetroCuadrado(value);
   alert(perimetro);
}

function calculateAreaSquare(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const ladoA = Number(document.getElementById("InputTrianguloA").value);
    const ladoB = Number(document.getElementById("InputTrianguloB").value);
    const base = Number(document.getElementById("InputTrianguloBase").value);

    const perimetro = perimetroTriangulo(ladoA, ladoB, base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const altura = Number(document.getElementById("InputTrianguloAltura").value);
    const base = Number(document.getElementById("InputTrianguloBase").value);

    const area = areaTriangulo(altura, base);
    alert(area);
}

function calcularCircunferencia(){
    const radio = Number(document.getElementById("InputCirculoRadio").value);
    const diametro = perimetroCirculo(radio);

    alert(diametro);
}

function calcularAreaCirculo(){
    const radio = Number(document.getElementById("InputCirculoRadio").value);
    const area = areaCirculo(radio);

    alert(area);
}