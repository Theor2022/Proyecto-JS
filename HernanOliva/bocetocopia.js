
/*El nombre n:nombre p:precio s:stock*/

let nA = "Fallout 4"
let pA = 25
let sA = 31

let nB = "God Of War 4"
let pB = 27
let sB = 46

let nC = "The Elder Scrolls V: Skyrim"
let pC = 18
let sC = 30

let nD = "Assassin's Creed: Odyssey"
let pD = 17
let sD = 25

let precioTotal = 0

alert("Bienvenido a ZonaGame")
alert("Inventario Disponible: \n \n Fallout 4   25$US \n God Of War 4   27$US \n The Elder Scrolls V: Skyrim   18$US \n Assassin's Creed: Odyssey   17$US")

let numOpcion = prompt("Ingrese que juego quiere comprar: \n 1- Fallout 4 \n 2- God of war 4\n 3- The Elder Scrolls V\n 4- Assassins Creed: Odyssey\n 5- Salir") //modal con opciones
cantidadUnidad(numOpcion)

function cantidadUnidad (opcion) {
   while (opcion != 5){
        if (opcion == 1){
        cantidadIngresada = parseInt(prompt("Ingrese que cantidad de " + nA + " desea comprar:"))
        stockPrecio(cantidadIngresada,sA,pA)
        }
        else if (opcion == 2){
        cantidadIngresada = parseInt(prompt("Ingrese que cantidad de " + nB + " desea comprar:"))
        stockPrecio(cantidadIngresada,sB,pB)
        }
        else if (opcion == 3){
        cantidadIngresada = parseInt(prompt("Ingrese que cantidad de " + nC + " desea comprar:"))
        stockPrecio(cantidadIngresada,sC,pC)
        }
        else if (opcion == 4){
        cantidadIngresada = parseInt(prompt("Ingrese que cantidad de " + nD + " desea comprar:"))
        stockPrecio(cantidadIngresada,sD,pD)
        }
        else{
            alert("No tenemos ese producto a la venta")
        }
    opcion = prompt("Ingrese que otro producto desea comprar: \n 1- Fallout 4 \n 2- God of war 4\n 3- The Elder Scrolls V\n 4- Assassins Creed: Odyssey\n 5- Salir") //modal con opciones
    } 
}

function stockPrecio (cantidadIngresada,cantidadStock,precioUnitario){
    if (cantidadIngresada <= cantidadStock ){
        precioTotal = precioTotal + (cantidadIngresada * precioUnitario)
    }
    else{
        alert("Actualmente no contamos con stock suficiente para este producto")
    }
}

if (precioTotal > 0){ 
    alert("El Total es: " + precioTotal)
}
alert("Gracias por su visita!")


