let carrito = [];

function recogeInfo1() {
    let nombre1 = $("#card-title1").text();
    let precio1 = $("#price1").text();
    let datos1 = {
        nombre: nombre1,
        precio: precio1,
    }

    carrito.push(datos1)
    console.log(carrito);
}

function recogeInfo2() {
    let nombre2 = $("#card-title2").text();
    let precio2 = $("#price2").text();
    let datos2 = {
        nombre: nombre2,
        precio: precio2,
    }

    carrito.push(datos2)
    console.log(carrito);
}

function recogeInfo3() {
    let nombre3 = $("#card-title3").text();
    let precio3 = $("#price3").text();
    let datos3 = {
        nombre: nombre3,
        precio: precio3,
    }

    carrito.push(datos3)
    console.log(carrito);
}

function recogeInfo4() {
    let nombre4 = $("#card-title4").text();
    let precio4 = $("#price4").text();
    let datos4 = {
        nombre: nombre4,
        precio: precio4,
    }

    carrito.push(datos4)
    console.log(carrito);
}

function recogeInfo5() {
    let nombre5 = $("#card-title5").text();
    let precio5 = $("#price5").text();
    let datos5 = {
        nombre: nombre5,
        precio: precio5,
    }

    carrito.push(datos5)
    console.log(carrito);
}

function recogeInfo6() {
    let nombre6 = $("#card-title6").text();
    let precio6 = $("#price6").text();
    let datos6 = {
        nombre: nombre6,
        precio: precio6,
    }

    carrito.push(datos6)
    console.log(carrito);
}

function recogeInfo7() {
    let nombre7 = $("#card-title7").text();
    let precio7 = $("#price7").text();
    let datos7 = {
        nombre: nombre7,
        precio: precio7,
    }

    carrito.push(datos7)
    console.log(carrito);
}

function recogeInfo8() {
    let nombre8 = $("#card-title8").text();
    let precio8 = $("#price8").text();
    let datos8 = {
        nombre: nombre8,
        precio: precio8,
    }

    carrito.push(datos8)
    console.log(carrito);
}


function showCarrito() {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        $("#modal").append(`<p>${carrito[i].nombre}: ${carrito[i].precio}€</p>`);
        total += parseInt(carrito[i].precio);
    }
    // $("#modal").html(`<h4> Total : ${total}€</h4>`);
    // $("#modal").append(`<h4> Total : ${total}€</h4>`);

}