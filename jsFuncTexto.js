//Funcion para ir colocando texto poco a poco
//El texto debe estar en una variable que se pasa como parametro
export function imprimirTexto(texto) {
   let atras = document.getElementById('atras');
   atras.style.display = "none";
   let divTablero = document.createElement('div');
   divTablero.className = 'tablero';

   let body = document.getElementById('fondo');
   body.appendChild(divTablero);

   new Typed('.tablero', {
      strings: [texto],
      typeSpeed: 10,
      showCursor: true,
      cursorChar: '|',
      onComplete: () => {
         let back = document.createElement('div');
         back.id = 'back';
         back.innerHTML = "BACK";

         body.appendChild(back);
         back.addEventListener('click', () => {
            divTablero.remove();
            back.remove();
            atras.style.display = "block";
         })
      }
   });
}

//INSERTAR SIN LIBRERIA TYPED DESDE WORD
//Inserta directamente el texto desde un documento word el cual se pasa con la ruta por parametro
export function insertarTexto(textoUrl) {
   let atras = document.getElementById('atras');
   atras.style.display = "none";

   let divTablero = document.createElement('div');

   divTablero.className = 'tablero';
   divTablero.id = 'text-content';

   let body = document.getElementById('fondo');
   body.appendChild(divTablero);

   //llamar funcion para poner texto
   insertarWord(textoUrl);

   let back = document.createElement('div');
   back.id = 'back';
   back.innerHTML = "BACK";

   body.appendChild(back);
   back.addEventListener('click', () => {
      divTablero.remove();
      back.remove();
      atras.style.display = "block";
   })
}

//PARA IMPORTAR TEXTO DESDE WORD
// Obtener el archivo de Word mediante fetch()
function insertarWord(textoUrl) {
   var fileUrl = textoUrl;

   fetch(fileUrl)
      .then(function (response) {
         if (!response.ok) {
            throw new Error('Error al cargar el archivo.');
         }
         return response.arrayBuffer();
      })
      .then(function (arrayBuffer) {
         // Convertir el documento de Word en HTML
         var options = {
            arrayBuffer: arrayBuffer
         };

         mammoth.extractRawText(options)
            /*.then(function (result) {
               var htmlContent = result.value;

               // Mostrar el contenido en el elemento div
               var wordContentDiv = document.getElementById('text-content');
               wordContentDiv.innerHTML = htmlContent;
            })
            .done();*/
            .then(function (result) {
               var rawText = result.value;

               // Procesar el texto para aplicar estilos HTML
               var processedText = procesarTexto(rawText);

               // Mostrar el contenido en el elemento div
               var wordContentDiv = document.getElementById('text-content');
               wordContentDiv.innerHTML = processedText;
            })
            .catch(function (error) {
               console.error('Error al convertir el documento de Word:', error);
            });
      })
      .catch(function (error) {
         console.error(error);
      });
}


//Funcion que procesa el texto extraido del word para generar los saltos de linea
//Se usa en otras funciones
export function procesarTexto(rawText) {
   // Reemplazar saltos de línea con etiquetas <br>
   var processedText = rawText.replace(/\n/g, '<br>');

   // Puedes agregar más reglas aquí según tus necesidades

   return processedText;
}

//FUNCION IMPRIMIR TEXTO CON TYPED DESDE WORD
//Extrae el texto de un word y lo va imprimiendo poco a poco con la libreria Typed con la siguiente funcion despues de esta
export function insertarWordTyped(textoUrl) {
   return new Promise((resolve, reject) => {
      fetch(textoUrl)
         .then(function (response) {
            if (!response.ok) {
               throw new Error('Error al cargar el archivo.');
            }
            return response.arrayBuffer();
         })
         .then(function (arrayBuffer) {
            var options = {
               arrayBuffer: arrayBuffer
            };

            mammoth.extractRawText(options)
               .then(function (result) {
                  var rawText = result.value;
                  var processedText = procesarTexto(rawText);
                  resolve(processedText); // Resuelve la promesa con el valor procesado
               })
               .catch(function (error) {
                  console.error('Error al convertir el documento de Word:', error);
                  reject(error); // Rechaza la promesa en caso de error
               });
         })
         .catch(function (error) {
            console.error(error);
            reject(error); // Rechaza la promesa en caso de error
         });
   });
}

// Luego, en imprimirTextoWord(textoUrl), async/await para manejar la promesa:

export async function imprimirTextoWord(textoUrl) {
   let atras = document.getElementById('atras');
   atras.style.display = "none";
   let divTablero = document.createElement('div');
   divTablero.className = 'tablero';

   let body = document.getElementById('fondo');
   body.appendChild(divTablero);

   try {
      var textoProcesado = await insertarWordTyped(textoUrl);

      new Typed('.tablero', {
         strings: [textoProcesado],
         typeSpeed: 10,
         showCursor: true,
         cursorChar: '|',
         onComplete: () => {
            let back = document.createElement('div');
            back.id = 'back';
            back.innerHTML = "BACK";

            body.appendChild(back);
            back.addEventListener('click', () => {
               divTablero.remove();
               back.remove();
               atras.style.display = "block";
            })
         }
      });
   } catch (error) {
      console.error(error);
   }
}


//CDNS LIBRERIAS NECESARIAS
/*

Typed;
<script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>

Turndown;
<script src="https://cdnjs.cloudflare.com/ajax/libs/turndown/7.0.0/turndown.js"
integrity="sha512-UO5RISpIjJoG1fbDhEuQdTMm1V7Z6DxlyNM4RKKcJxE8QIK0RddTt5ONahZBi4LYlNWQ/ObqvLGlI+k8wKRsrA=="
crossorigin="anonymous" referrerpolicy="no-referrer"></script>

Mammoth;
<script src="https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js" integrity="sha512-sG5Q7boJL+ft/weuz6Mmi9XBD+bEzE9AI2FMP4YMFxp3FpTFUQSQQm5K5cSgJCyed6bWs3W8f8h0lp36lHXhQA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

*/