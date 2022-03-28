
function calcularDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice").value;
    const inputDiscount = document.getElementById("InputDiscount").value;

    const precioConDescuento = calcularDescuento(inputPrice, inputDiscount);

    const resultP = document.getElementById("ResultP");
    return resultP.innerText = `El precio con descuento es $${precioConDescuento}`;
}