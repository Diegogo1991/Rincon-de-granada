/*window.alert('Puedes perder algo si no abres los ojos antes de que sea tarde');*/
//prompt("Puedes perder algo si no abres los ojos antes de que sea tarde. Ingrese una fecha ?/?/23");

//IMPORTE DE FUNCIONES
import { funcGene } from "./Scripts/functions.js";

//COLOCAR VIDEO ALEATORIO
setTimeout(funcGene.fondoAleatorio, 1);

//funcion para hacer focus al footer
var enfocador = document.getElementById('triangulo');
enfocador.addEventListener('click', ()=>{
    let footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
});

// const typed = new Typed('.typed', {
//    strings: ['INVITACIÓN <br> CUARTA REVOLUCIÓN <BR> INDUSTRIAL'],
//    typeSpeed: 75,
//    cursorChar: '|',
//    loop: false
// });

const frases = [
    "La vida es 10% lo que nos sucede y 90% cómo reaccionamos.",
    '"No puedes cambiar el viento, pero puedes ajustar las velas."',
    '"La única manera de hacer un gran trabajo es amar lo que haces." - Steve Jobs',
    '"Cree en ti mismo y todo será posible."',
    '"La felicidad no es algo listo. Viene de tus propias acciones."',
    '"No te preocupes por los fracasos, preocúpate por las posibilidades que pierdes cuando ni siquiera lo intentas."',
    '"El éxito es la suma de pequeños esfuerzos repetidos día tras día."',
    '"Lo que piensas, te conviertes. Lo que sientes, atraes. Lo que imaginas, creas." - Buda',
    '"Si lo puedes soñar, lo puedes lograr." - Walt Disney',
    '"La vida es lo que pasa mientras estás ocupado haciendo otros planes." - John Lennon',
    '"No cuentes los días, haz que los días cuenten."',
    '"El éxito es ir de fracaso en fracaso sin perder el entusiasmo." - Winston Churchill',
    '"Tu tiempo es limitado, no lo malgastes viviendo la vida de alguien más." - Steve Jobs',
    '"Nunca es tarde para ser lo que podrías haber sido." - George Eliot',
    '"La vida no es acerca de encontrarte a ti mismo, es acerca de crearte a ti mismo."',
    '"La vida es demasiado importante como para ser tomada en serio." - Oscar Wilde',
    '"Sé el cambio que deseas ver en el mundo." - Mahatma Gandhi',
    '"No hay atajos para cualquier lugar que valga la pena ir." - Beverly Sills',
    '"Haz hoy lo que otros no quieren, haz mañana lo que otros no pueden." - Jerry Rice',
    '"Cada día es una nueva oportunidad para cambiar tu vida."',
    '"El único modo de hacer un gran trabajo es amar lo que haces." - Steve Jobs',
    '"La vida es corta, sonríele a quien llora, ignora a quien te critica y sé feliz con quienes te importan."',
    '"La perseverancia no es una carrera larga; son muchas carreras cortas una tras otra."',
    '"Nuestro mayor miedo no es que seamos inadecuados. Nuestro mayor miedo es que somos poderosos más allá de toda medida." - Marianne Williamson',
    '"La vida es un 10% lo que nos pasa y un 90% cómo reaccionamos."',
    '"Haz lo que puedas, con lo que tengas, donde estés." - Theodore Roosevelt',
    '"El único modo de hacer un gran trabajo es amar lo que haces." - Steve Jobs',
    '"La vida es corta, sonríele a quien llora, ignora a quien te critica y sé feliz con quienes te importan."',
    '"La única manera de hacer un gran trabajo es amar lo que haces." - Steve Jobs',
    '"No cuentes los días, haz que los días cuenten."',
    '"Lo que piensas, te conviertes. Lo que sientes, atraes. Lo que imaginas, creas." - Buda',
    '"La única manera de hacer un gran trabajo es amar lo que haces." - Steve Jobs',
    '"El éxito es ir de fracaso en fracaso sin perder el entusiasmo." - Winston Churchill',
    '"Tu tiempo es limitado, no lo malgastes viviendo la vida de alguien más." - Steve Jobs',
    '"La perseverancia no es una carrera larga; son muchas carreras cortas una tras otra."',
    '"El único modo de hacer un gran trabajo es amar lo que haces." - Steve Jobs',
    '"La vida es lo que pasa mientras estás ocupado haciendo otros planes." - John Lennon',
    '"El éxito es la suma de pequeños esfuerzos repetidos día tras día."',
    '"La única manera de hacer un gran trabajo es amar lo que haces." - Steve Jobs',
    '"Sé el cambio que deseas ver en el mundo." - Mahatma Gandhi',
    '"La única manera de hacer un gran trabajo es amar lo que haces." - Steve Jobs',
    '"El éxito es ir de fracaso en fracaso sin perder el entusiasmo." - Winston Churchill',
    '"Tu tiempo es limitado, no lo malgastes viviendo la vida de alguien más." - Steve Jobs',
    '"No hay atajos para cualquier lugar que valga la pena ir." - Beverly Sills',
    '"La única manera de hacer un gran trabajo es amar lo que haces." - Steve Jobs"'
  ];

  // Selecciona una frase aleatoria
const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

// Inicializa Typed con la frase aleatoria
const typed = new Typed('.mensaje', {
    strings: [fraseAleatoria],
    typeSpeed: 40,
    startDelay: 1000,  // Retraso de 1 segundo antes de comenzar la animación
    cursorChar: '',  
    loop: false,
    onComplete: ()=> {
        // Cambiar la propiedad de estilo display del elemento con id "LinkP"
        
        document.getElementById('linkP').style.display = 'flex';

        setTimeout(function() {
            // document.getElementById('mensaje').style.display = 'none';
            document.getElementById('mensaje').classList.add('oculto');

            document.getElementById('invitacion').style.display = 'flex';

            const typed = new Typed('.invitacion', {
                strings: ['<p>Si estás viendo esto es porque te tomaste el tiempo de apreciar una obra de arte y eso no cualquier persona lo hace. Por eso te felicitamos y te motivamos a que sigas en el camino hacia eso que deseas. Eres importante para nosotros y por eso nos interesa saber de corazón:</p>'],
                typeSpeed: 25,
                startDelay: 1500,  // Retraso de 1 segundo antes de comenzar la animación
                cursorChar: '',  
                loop: false,
                onComplete: ()=>{
                    // Crear el botón
                    const boton = document.createElement('div');

                    // Asignar ID y clase al botón
                    boton.id = 'accion';
                    boton.className = 'accion';

                    // Obtener el contenedor padre
                    const contenedorPadre = document.getElementById('invitacion');

                    // Agregar el botón al contenedor padre
                    contenedorPadre.appendChild(boton);

                    const typed = new Typed('.accion', {
                        strings: ['¿Qué tal tu experiencia? <i class="fa-solid fa-camera-retro"></i>' ],
                        startDelay: 1000,
                        typeSpeed: 30,
                        cursorChar: '',  
                        loop: false
                    });

                    boton.addEventListener('click', ()=>{
                        /*window.open('https://www.google.com/maps/place/El+Rincon+de+Granada+cali/@3.4632101,-76.5326204,17z/data=!4m11!3m10!1s0x8e30a71bbd5fb603:0x2c532d585b64a33b!5m2!4m1!1i2!8m2!3d3.4632101!4d-76.5326204!9m1!1b1!16s%2Fg%2F11j4drx9lv?authuser=0&entry=ttu', '_blank');*/
                        window.location.href='https://search.google.com/local/writereview?placeid=ChIJA7ZfvRunMI4RO6NkW1gtUyw';
                    })
                }
            });
        }, 3500);
    }
});

//FUNCIÓN MOVER IMAGENES
function moverObjeto(objeto, velocidadX, velocidadY) {
   const limiteX = window.innerWidth - objeto.clientWidth;
   const limiteY = window.innerHeight - objeto.clientHeight;

   function mover() {
       let posX = parseInt(getComputedStyle(objeto).left);
       let posY = parseInt(getComputedStyle(objeto).top);

       let nuevaPosX = posX + velocidadX;
       let nuevaPosY = posY + velocidadY;

       // Verificar límites en el eje X
       if (nuevaPosX < 0 || nuevaPosX > limiteX) {
           velocidadX *= -1; // Cambiar dirección en el eje X
       }

       // Verificar límites en el eje Y
       if (nuevaPosY < 0 || nuevaPosY > limiteY) {
           velocidadY *= -1; // Cambiar dirección en el eje Y
       }

       objeto.style.left = nuevaPosX + 'px';
       objeto.style.top = nuevaPosY + 'px';
   }

   function cambiarDireccion() {
       velocidadX = Math.random() > 0.5 ? Math.abs(velocidadX) : -Math.abs(velocidadX); // Cambiar dirección en el eje X
       velocidadY = Math.random() > 0.5 ? Math.abs(velocidadY) : -Math.abs(velocidadY); // Cambiar dirección en el eje Y
   }

   // Mover el objeto cada 30 milisegundos (ajusta según tus preferencias)
   setInterval(mover, 15);

   // Cambiar dirección aleatoriamente cada 3000 milisegundos (3 segundos)
   setInterval(cambiarDireccion, 2500);
}

//FUNCIONES OJO MOVIL
/* const ojoMovil = document.getElementById('ojo-pizarra');
moverObjeto(ojoMovil, 1, 2);

ojoMovil.addEventListener('click', funcGene.abrirLinkAleatorio);

const ojito = new Typed('.ojo-pizarra', {
   strings: ['Los', 'ojos', 'quieren', 'que', 'abras', 'los', 'ojos', 'para', 'ganar', 'eso', 'que', 'quieres'],
   typeSpeed: 50,
   cursorChar: '|',
   loop: true
}); */

function prueba() {
    window.open('https://www.google.com/maps/place/El+Rincon+de+Granada+cali/@3.4632101,-76.5326204,17z/data=!4m11!3m10!1s0x8e30a71bbd5fb603:0x2c532d585b64a33b!5m2!4m1!1i2!8m2!3d3.4632101!4d-76.5326204!9m1!1b1!16s%2Fg%2F11j4drx9lv?authuser=0&entry=ttu', '_blank');
}


  
  
  