
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

function onClickButtonCouponDiscount(){
    const cuponDescuento = document.getElementById('InputCoupon').value;
    
    const CUPONES_DESCUENTO = {
        coupon1: 15,
        coupon2: 20 ,
        coupon3: 25 ,
        coupon4: 30
    }
    
    const CUPON_DEFAULT = `Cupon invalido`;
    
    const descuentoConCupon = CUPONES_DESCUENTO[cuponDescuento] || CUPON_DEFAULT;
    
    const inputPrice = document.getElementById("InputPrice").value;
    const inputDiscount = descuentoConCupon + Number(document.getElementById("InputDiscount").value);
    
    const nuevoDescuento = calcularDescuento(inputPrice, inputDiscount)
    const resultC = document.getElementById("ResultC");
    
    if(isNaN(nuevoDescuento)){
        return resultC.innerText = CUPON_DEFAULT;    
    }
    return resultC.innerText = `El descuento con cupon es $${nuevoDescuento}`;
}

