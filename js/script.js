let preguntasyRespuestas = [
  ["¿Cuál es el nombre de la compañía de tecnología más grande de Corea del Sur?", "Samsung"],
  ["¿Cuál es el símbolo químico de la plata?", "AG"],
  ["¿En qué año se lanzó The Godfather por primera vez?", "1972"],
  ["¿Cuántos corazones tiene un pulpo?", "tres"],
  ["¿Cuál es el nombre de la banda con los siguientes miembros:Brian May, Freddie Mercury?", "Queen"],
  ["¿Qué artista creó 'Latas de sopa Campbell' en 1962?", "Warhol"],
  ["¿En qué parte del mundo se exhibe la Mona Lisa de Leonardo da Vinci?", "Louvre"],
  ["¿En que año fue el fin de la primera guerra mundial?", "1918"],
  ["¿Quién escribió La Odisea?", "Homero"],
  ["¿Cuál es el río más largo del mundo?", "Amazonas"],
  ["¿Cuándo acabó la II Guerra Mundial?", "1945"],
  ["¿Cuál es el océano más grande?", "pacifico"],
  ["¿Cuál es el disco más vendido de la historia?", "Thriller"],
  ["¿Cómo se llama el himno nacional de Francia?", "Marsellesa"],
  ["¿Cuál es el nombre de la lengua oficial en china?", "mandarin"],
  ["¿Cuál es el primero de la lista de los números primos?", "2"],
  ["¿Cuál es el único mamífero capaz de volar?", "murcielago"],
  ["¿En qué pais Pablo Neruda?", "chile"],
  ["¿Apellido del veterano músico creador de la canción 'Tears in Heaven'?", "clapton"],
  ["¿Cuál es la capital de Croacia?", "zagreb"],
  ["¿Cuál es la capital de Dinamarca?", "copenhague"],
  ["¿En qué año se aprobó la actual Constitución española?", "1978"],
  ["¿Cuál es el país con más camellos salvajes?", "australia"],
  ["¿Cuál era el nombre de pila del Che Guevara?", "ernesto"],
  ["¿En qué año viajó al espacio el primer ser humano?", "1961"],
  ["¿En qué año llegó el ser humano a la Luna?", "1969"],
  ["¿Quién fue el presidente estadounidense al inicio de la Segunda Guerra Mundial?", "Roosevelt"],
  ["¿Quién dirigió “El Lobo de Wall Street”?", "Scorsese"],
  ["¿Cuál es la capital de Bolivia?", "sucre"],
  ["¿Cuál es la capital de Aragón?", "zaragoza"],
  ["¿Cuál es la capital de Paraguay?", "asuncion"],
  ["¿Cuál es el continente más pequeño en extensión?", "oceania"],
  ["¿Cómo se llama la parte del ojo que es sensible a la luz?", "retina"],
  ["¿Quién fue el primer dirigente de la Unión de Repúblicas Socialistas Soviéticas?", "lenin"],
  ["¿Cómo se llama el satélite más grande de Saturno?", "titan"],
  ["¿Cuál es el país más poblado de África?", "nigeria"],
  ["¿Quién cantaba “New York, New York”?", "sinatra"],
];
let preguntas = document.getElementById("preguntas");
let banderas = document.getElementById("banderas");
let containerinfo = document.getElementById("containerinfo");
let containerstat = document.getElementById("containerstat");
let container__info = document.getElementById("info__container");
let main__titulo = document.getElementById("main__titulo");
let preguntamostrada = document.getElementById("preguntamostrada");
let intento = document.getElementById("intento");
let reloj = document.getElementById("reloj");
let teclado = document.getElementById("teclado");
let puntos = document.getElementById("puntos");
let main = document.getElementById("main");
let juegoterminado = document.getElementById("juegoterminado");
let final = document.getElementById("final");
let preguntaaleatoria = "";
let pregunta = "";
let respuesta = "";
let tiempo = 200;
let generartiempo=null;
let huecosrespuesta = [];
let contador = 0;
let enter=document.getElementById("enter");
let puntosjuego=0;
let npreguntas=[];

const generarpreguntasaleatorias = () => {
  do {
    preguntaaleatoria = Math.floor(Math.random() * preguntasyRespuestas.length)
  } while (npreguntas.includes(preguntaaleatoria));
  npreguntas.push(preguntaaleatoria);
  pregunta = preguntasyRespuestas[preguntaaleatoria][0];
  respuesta = preguntasyRespuestas[preguntaaleatoria][1];
  return pregunta, respuesta;
}

//JUEGO ACABADO___________Cuando se acaba el tiempo se acaba el juego
const acabarjuego=()=>{
  preguntas.classList.remove("visible");
  juegoterminado.classList.remove("visible");
  containerinfo.classList.add("visible");
  containerstat.classList.add("visible");
  main__titulo.textContent = "Preguntas y respuestas"
  while(intento.children.length>0){
    intento.removeChild(intento.firstChild)
  }
  preguntamostrada.textContent="";
  final.textContent=puntos.textContent;
  puntos.textContent=0;
}
const updateClock = () => {
  generartiempo = setInterval(() => {
    if (tiempo > 0) {
      reloj.textContent = tiempo;
      tiempo--;
    } else {
      clearInterval(generartiempo);
      acabarjuego();
    }

  }, 1000)
}


const mostrarjuegopreguntas = () => {
while(intento.children.length>0){
  intento.removeChild(intento.firstChild)
}
  contador=0;
  containerinfo.classList.remove("visible");
  containerstat.classList.remove("visible");
  preguntas.classList.add("visible");
  juegoterminado.classList.add("visible")
  main__titulo.textContent = "Conteste a las preguntas"
  container__info.classList.remove("visible");
  generarpreguntasaleatorias();
  huecosrespuesta=[];
  preguntamostrada.textContent = pregunta;
  for (const iterator of respuesta) {
    let input = document.createElement("input");
    input.setAttribute("type", "text", "size", "50");
    input.setAttribute("class", "tmn__imput");
    intento.appendChild(input)
    huecosrespuesta.push(input);
  }
  if(generartiempo===null){
    tiempo=200;
    updateClock();
  }
 
}
const comprobarpalabra=()=>{
  let contadorrespuesta=0;
for (const key in huecosrespuesta) {
  if(respuesta[key].toLocaleLowerCase()==huecosrespuesta[key].value.toLocaleLowerCase()){
    contadorrespuesta++;
  }
}
if(contadorrespuesta===respuesta.length){
  palabraacertada();
}else{
  intento.classList.add("rotar");
  for (const iterator of huecosrespuesta) {
    iterator.classList.add("error");
  }
}
}

//Cuando el concursante acierta una palabra
const palabraacertada=()=>{
  puntosjuego++;
  puntos.textContent=puntosjuego;
  puntos.classList.add("acertado");
  setTimeout(() => {
    puntos.classList.remove("acertado");
  }, 300);

  mostrarjuegopreguntas();
}


teclado.addEventListener("click", () => {
  console.log(event.target.textContent);
  if (event.target.tagName === "BUTTON" && event.target.getAttribute("id") !== "enter") {
    if (event.target.getAttribute("id") === "borrar") {
      if (contador > 0) {
        contador--;
      }
      huecosrespuesta[contador].value = "";
    } else {
      huecosrespuesta[contador].value = event.target.textContent;
      contador++;
    }
  }
})


main.addEventListener("keyup", ()=>{
  // if(event.target.keyCode===13){
  //   console.log("hola");
  //   comprobarpalabra();
  // }
  contador++;
});
intento.addEventListener("animationend", ()=>{
  intento.classList.remove("rotar");
  for (const iterator of huecosrespuesta) {
    iterator.classList.remove("error");
  }
});
enter.addEventListener("click", comprobarpalabra);
preguntas.addEventListener("click", ()=>{
  npreguntas=[];
  puntosjuego=0;
  generartiempo=null;
  mostrarjuegopreguntas();
});
