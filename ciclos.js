/*for (let i = 0; i < 10; i ++){
console.log("El valor de i es: " + i);

}

for (let vuelta = 1; vuelta <= 5; vuelta ++) {
console.log("Dando la vuelta numero " + vuelta);
}
//while
let vuelta = 1;
while(vuelta <= 5) {
    console.log("dando la vuelta numero " + vuelta);
    vuelta++
};
*/
/*var gananciasUltimoSemestre = [50, -12, 1000, 300, 200, 0];
function sumatoriaGananciasSemestre(unSemestre) {
    return unSemestre[0] + unSemestre[1] +
        unSemestre[2] + unSemestre[3] +
        unSemestre[4] + unSemestre[5];
    
}
*/
/*function saludar(nombre) {
console.log("Hola" + " " + nombre);
}
saludar("Pepito");


function suma(a , b){
    return a + b;
}
console.log(suma (5,5));

function doble(numero){
    return numero * 2;
}
console.log(doble(4));


function elTripleDe(numero){
    return numero * 3;
}
console.log(elTripleDe(4));

function longitudCadena (cadena){
    return cadena.length;
}
console.log(longitudCadena("Hola a todos"));
*/

/*function esNumeroPar(numero){
return numero % 2 === 0;
}
console.log(esNumeroPar(6));
console.log(esNumeroPar(5));

function nombreCompleto(name){
console.log("Joselina" + " " + name);
}
nombreCompleto("Bermo");

for (let helado = 1; helado <= 5; helado ++) {
    console.log("Este es el helado numero  " + helado);
    }

function apellidoCompleto (apellido){
    return apellido + "Chequeado";

}
console.log(apellidoCompleto("Raul Miraflores" + " "));

function elDoble (numero){
return numero * 2;
}
console.log(elDoble(5));

function elCuadruple (numeros){
    return numeros * 4;
}
console.log(elCuadruple(4));

function longitudNombreCompleto (nombre , apellido){
    return nombre.length + apellido.length + 1;

}
console.log(longitudNombreCompleto("Cosme", "Fulanito"));

function escribirCartelito (titulo , nombre , apellido){
return titulo + " " + nombre + " " + apellido;
}
console.log(escribirCartelito("Dr.", "Silvio" , "Ferikj"));
console.log(escribirCartelito("Dr.", "Silvi" , "Ferikj"));

let dia = "soleado";
if (dia === true){
    console.log("Que bien, salgamos por ahiiiii");
}else{
    console.log("Bueno, tomemos matecitos");
}

let dia = "cualquier";
function sePoneLaOlla(dia){
if (dia == "Domingo"){
    return "Se comen pastas";
}else{
    "Mejor lo dejamos para el domingo";
}
}
console.log(sePoneLaOlla("Domingo"));

let semaforo = "lila";
switch (semaforo) {
    case "verde":
        console.log("Puedo cruzar");
        break;
    case "amarillo":
        console.log("ojoooo");

    default:
        console.log("no funciona");
        break;
}

let dia = "viernes";
switch (dia) {
    case "viernes": 
    console.log("Buen finde");
        break;
    case "lunes":
        console.log("Buena semana");
        break;
    default:
        console.log("Nos vemos mañana");
        break;
}
*/
let dia = "jueves";
function finDeSemana (dia){
    switch (dia) {
        case "viernes":
            console.log("buen finde");
                        break;
        case "lunes":
            console.log("buena semnana");
        break;
        default:
            console.log("buen dia");
            break;
    }
}
console.log(finDeSemana("lunes"));

function tengoClases (dia){
    switch (dia) {
        case "lunes":
    console.log("tenes clases");
    break;
    default:
        console.log("no tenes clases");
    break;
    }
}
console.log(tengoClases("miercoles"));
