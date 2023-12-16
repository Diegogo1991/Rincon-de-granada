//FUNCIONES GENERALES TODOS LOS ARCHIVOS
export const funcGene = {
   musicAleatorie,
   fondoAleatorio,
   abrirLinkAleatorio
}

//FUNCION MUSICA ALEATORIA
var cantidadCanciones = 19;
var indice;
function musicAleatorie() {
   indice = Math.floor(Math.random() * cantidadCanciones);
   let audio = document.getElementById('audio');
   audio.src = `./Musica/${indice}.mp3`;
   console.log("musica ready")
}

function pausarCancion() {
   audio.pause();
}

function reproducirCancion() {
   audio.play();
}

function cambiarCancion() {
   indice++;
   if(indice > 19){
      indice = 0;
   }
   audio.src = `./Musica/${indice}.mp3`;
}
const botonReproducir = document.getElementById('reproducir');
   const botonPausar = document.getElementById('pausar');
   const botonCambiar = document.getElementById('cambiar');

/* botonPausar.addEventListener('click', pausarCancion);
botonReproducir.addEventListener('click', reproducirCancion);
botonCambiar.addEventListener('click', cambiarCancion); */

//COMENTARIOS PLANTILLA LLAMAR A LA FUNCION
//setTimeout(funcGene.musicAleatorie, 1000);
/*document.addEventListener("DOMContentLoaded", function () {
   setTimeout(funcGene.musicAleatorie, 1);
});*/

//FUNCION FONDO ALEATORIO
function fondoAleatorio() {
   var indice = Math.floor(Math.random() * 13);
   var video = document.getElementById('video');
   video.src = `./Videos/${indice}.mp4`;
}

//COMENTARIOS PLANTILLA LLAMAR A LA FUNCION
//setTimeout(funcGene.fondoAleatorio, 1000);
/*document.addEventListener("DOMContentLoaded", function () {
   setTimeout(funcGene.fondoAleatorio, 1);
});*/

//FUNCIONES PARA BUCLES

export const funcBucles = {
   fondoAleatorie,
   cambiarFondo,
   ponerEvi
}

//FUNCION FONDO ALEATORIE (BUCLES)
function fondoAleatorie() {
   var indice = Math.floor(Math.random() * 12);
   var video = document.getElementById('video');
   video.src = `./Videos/FEVDS/${indice}.mp4`;
}

//COMENTARIOS PLANTILLA LLAMAR A LA FUNCION
//setTimeout(fondoAleatorie, 1);
/*document.addEventListener("DOMContentLoaded", function () {
   setTimeout(fondoAleatorie, 1);
});*/

//CAMBIAR FONDOS ALEATORIOS
function cambiarFondo() {
   let maximo = 56;
   var fondo = Math.floor(Math.random() * maximo);
   document.getElementById('fondo').style.background = `url('../Img/EVDS/${fondo}.jpg') center center / cover`;
}

//setTimeout(cambiarFondo, 1);

//PONER EVIDENCIAS
function ponerEvi() {
   let maximoEV = 56;
   var evidencia = Math.floor(Math.random() * maximoEV);
   document.getElementById('fondo').style.background = `url('../Img/EVDS/${evidencia}.jpg') center center / cover`;
}

//FUNCION ABRIR LINK ALEATORIO
function abrirLinkAleatorio() {
   const conjuntoDeEnlaces = [
      'https://www.instagram.com/p/C0Uia0CLnqn/?igshid=ODhhZWM5NmIwOQ==',
      'https://www.instagram.com/reel/C0J11FJo84Y/?igshid=NjFhOGMzYTE3ZQ==',
      'https://www.instagram.com/reel/CzCZEPWhj-2/?utm_source=ig_web_copy_link&igshid=NTYzOWQzNmJjMA==',
      'https://www.instagram.com/reel/CzXTpvUJbVH/?utm_source=ig_web_copy_link&igshid=NTYzOWQzNmJjMA==',
      'https://www.youtube.com/watch?v=ybkXLkEpq_s&list=WL&index=11&ab_channel=EsquizofreniaNatural'
    ];
   // Obtén un índice aleatorio dentro del rango de la longitud del conjunto de enlaces
   const indiceAleatorio = Math.floor(Math.random() * conjuntoDeEnlaces.length);
 
   // Obtén el enlace correspondiente al índice aleatorio
   const enlaceAleatorio = conjuntoDeEnlaces[indiceAleatorio];
 
   // Abre el enlace en una nueva ventana o pestaña
   window.open(enlaceAleatorio, '_blank');
 }
 
 // Ejemplo de uso:
 
 
 