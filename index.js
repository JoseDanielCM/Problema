// En una veterinaria se desea saber el promedio de edad de gatos y perros (por separados) 
// que fueron asistidos durante un mes. En total se registraron 30 animales y la 
// veterinaria solo atiende gatos y perros.

let listaAnimales = []

// generar lista de animales atendidos
for (let index = 0; index < 30; index++) {
    let datosAnimal = {}
    let idTipo = Math.floor(Math.random() * (2 - 1 + 1) + 1)
    let edad = Math.floor(Math.random() * (15 - 1 + 1) + 1)
    let tipo
    if (idTipo==1) {
        tipo = "gato"
    }else {
        tipo= "perro"
    }
    datosAnimal = {
        tipoAn: tipo,
        edadAn: edad
    }
    listaAnimales.push(datosAnimal)
}
// 
console.log(listaAnimales);
let animales = ["gato","perro"]
let contadorEdad = 0
let cantidadAnimales = 0
for (const tipoAnimal of animales) {
    cantidadAnimales =0
    contadorEdad = 0
    for (const animal of listaAnimales) {
        if (animal.tipoAn=tipoAnimal) {
            cantidadAnimales++
            contadorEdad += animal.edadAn
        }
    }
    let promedioEdad = contadorEdad/cantidadAnimales
    console.log("El promedio de ",tipoAnimal," es: ",promedioEdad);
}