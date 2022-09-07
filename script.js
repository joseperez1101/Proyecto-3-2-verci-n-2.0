
var preguntas = [
  //pregunta 1
   "¿Colón se embarcó en su viaje a América en tres embarcaciones, ¿Cuál no fue una de ellas?.",
  //pregunta 2
    "¿Cuándo celebra Estados Unidos su propia independencia?",
  //pregunta 3
    "¿con que acontecimiento finaliza la Edad Media.",
  //pregunta 4
    "¿En que año empezo y en que año finalizo la segunda guerra mundial.",

];
var img =[
  // imagenes historia//
""







  
]
var opciones = [
  // opcion 1
   ["La Pinta",
 "La niña",
 "La Santa Maria",
 "La Santa cristina"],
  //opción 2
  ["4 de junio",
"5 de julio",
"4 de julio",
"5 de junio"],
  //opcion 3
   ["la Caída del imperio bizantino",
"Las guerras carlistas",
"La Caída del imperio romano de occidente",
"Las guerras púnicas"],
  //opcion 4
    ["1920-1933",
     "1939-1945",
     "1930-1948",
     "1954-1970"],
    ]

var puntajePorOpcion = [
[0, 0, 0, 10],
[0, 0, 10, 0],
[10, 0, 0, 0],
[0, 10, 0, 0]
  
]


var puntaje = 0;
var i = 0;

function mostrarResultado() {

    var div = document.getElementsByClassName("card")[0];
    div.innerHTML = "";


    document.getElementById("barra-progreso").value = i * 100 / (preguntas.length - 1);


    div.innerHTML += "<h3 class='resultado_titulo'>Resultados</h3>";


    if (puntaje < 120) {
        estiloVida = "<span id='estilo-excelente'>EXCELENTE</span>";
    } else if (puntaje < 80) {
        estiloVida = "<span id='estilo-bueno'>BUENO</span>";
    } else if (puntaje > 79) {
        estiloVida = "<span id='estilo-aceptable'>ACEPTABLE</span>"; 
    } else {
        estiloVida = "<span id='estilo-malo'>MALO</span>";
    }


    div.innerHTML += `<p class='resultado_obtenido'>Has obtenido ${puntaje} puntos, lo cual significa que tu conocimiento de historia es ${estiloVida}.</p>`;
}

function actualizarPuntaje(opcion) {
    var indice = opcion - 1;
    
    if (i < preguntas.length) {
        puntaje += puntajePorOpcion[i][indice];
        siguientePregunta();
    } else {
        mostrarResultado();
    }
}


function siguientePregunta() {
    document.getElementById("pregunta").innerHTML = preguntas[i];
    document.getElementById("op1").innerHTML = opciones[i][0];
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    document.getElementById("op4").innerHTML = opciones[i][3];

    
    document.getElementById("barra-progreso").value = i * 100 / preguntas.length;
    i++;
}

siguientePregunta();  
document.getElementById("op1").addEventListener("click", function () {
    actualizarPuntaje(1);
});
document.getElementById("op2").addEventListener("click", function () {
    actualizarPuntaje(2);
});
document.getElementById("op3").addEventListener("click", function () {
    actualizarPuntaje(3);
});
document.getElementById("op4").addEventListener("click", function () {
    actualizarPuntaje(4);
});
