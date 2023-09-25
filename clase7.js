const catalogoCursos = [
    ["html5" , 4000],
    ["css3" , 5000],
    ["javascript" , 10000],
    ["react" , 7000],
    ["nodejs" , 15000]
];
const cursosElegidos = ["HTML5" , "CSS3" , "JAVASCRIPT" , "REACT" , "NODEJS"];

function calcularPrecio(catalogo , cursosAlumnos) {
    let precio = 0;
    for (let index = 0; index < catalogo.length; index++) {
        if (cursosAlumnos.includes(catalogo[index][0].toUpperCase())){
            precio = precio + catalogo[index][1];
        }
        
    }
    return precio;
}