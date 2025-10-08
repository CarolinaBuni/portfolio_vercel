// Importo la función main$$ del módulo principal
import { main$$ } from "../../../main";
// Importo el archivo CSS asociado a la sección "ContactMe"
import "./ContactMe.css";
// Función para crear la sección de contacto
export const Contact = () => {
     // Creo un elemento section para la sección de contacto y añado clase y id
     const Contact = document.createElement( "section" );
     Contact.setAttribute( "id", "contact" );
     Contact.classList.add( "contact", "container" );
     // Establecemos el contenido HTML de la sección de contacto
     Contact.innerHTML = `
          <div class='contact-title'>
               <div class='divider'></div>
               <p>CONTACT ME</p>
               <div class='divider'></div>
          </div>
     `;
     // Creamos un div para el contenido del formulario de contacto
     const divContact = document.createElement( "div" );
     divContact.className = "contact-content";
     divContact.innerHTML = `
     <form id="contactForm">
          <div class="form-group">
               <label for="from_name">Tu Nombre:</label>
               <input type="text" id="from_name" name="from_name" placeholder="Tu nombre" required>
          </div>

          <div class="form-group">
               <label for="from_email">Tu Email:</label>
               <input type="email" id="from_email" name="from_email" placeholder="tu@email.com" required>
          </div>

          <div class="form-group">
               <label for="message">Mensaje:</label>
               <textarea id="message" name="message" placeholder="Escribe tu mensaje aquí..." required></textarea>
          </div>
          <button id="rocketButton" type="submit" class="button">
               <svg id="rocketSvg" viewBox="0 0 512 512">
               <path d="m511.4 38.222c-1.109-20.338-17.284-36.511-37.622-37.621-41.038-2.242-121.342-.061-198.13 39.656-39.145 20.248-80.545 54.577-113.584 94.185-.407.488-.803.979-1.207 1.468l-74.98 5.792c-12.342.954-23.335 7.423-30.161 17.747l-51.154 77.372c-5.177 7.83-6 17.629-2.203 26.212 3.798 8.584 11.602 14.566 20.877 16.003l63.171 9.784c-.223 1.228-.447 2.455-.652 3.683-2.103 12.58 2.065 25.514 11.151 34.599l87.992 87.993c7.533 7.533 17.712 11.686 28.142 11.686 2.148 0 4.308-.177 6.458-.536 1.228-.205 2.455-.429 3.683-.652l9.784 63.172c1.437 9.275 7.419 17.08 16.001 20.877 3.571 1.58 7.35 2.36 11.112 2.36 5.283-.001 10.529-1.539 15.101-4.562l77.372-51.155c10.325-6.827 16.793-17.82 17.745-30.161l5.792-74.979c.489-.404.981-.8 1.469-1.207 39.609-33.039 73.939-74.439 94.186-113.585 39.719-76.791 41.896-157.096 39.657-198.131zm-175.394 393.037-74.011 48.933-9.536-61.565c31.28-9.197 62.223-23.927 91.702-43.66l-3.773 48.845c-.235 3.047-1.833 5.762-4.382 7.447zm-129.895-37.377-87.993-87.993c-2.245-2.246-3.283-5.401-2.774-8.44 2.616-15.643 6.681-30.534 11.713-44.562l132.028 132.028c-16.848 6.035-31.939 9.635-44.534 11.741-3.044.506-6.195-.529-8.44-2.774zm-117.923-222.269 48.844-3.773c-19.734 29.479-34.464 60.422-43.661 91.702l-61.564-9.535 48.934-74.012c1.686-2.55 4.401-4.147 7.447-4.382zm270.155 155.286c-24.233 20.213-47.756 34.833-69.438 45.412l-149.221-149.221c13.858-28.304 30.771-51.873 45.417-69.431 30.575-36.655 68.602-68.276 104.331-86.756 70.474-36.453 144.725-38.416 182.713-36.348 5.028.274 9.027 4.273 9.301 9.302 2.071 37.988.104 112.238-36.349 182.713-18.479 35.728-50.1 73.754-86.754 104.329z"/>
               </svg>
               <span class="send">Enviar</span>
               <span class="done">¡Enviado!</span>
          </button>
     </form>

     `;
     // Agrego los elementos al elemento section de contacto
     Contact.appendChild( divContact );
     // Agrego la sección de contacto al contenedor principal
     main$$.appendChild( Contact );

     // Inicializar EmailJS
     ( function () {
          emailjs.init( "r6U0jfhcP5wqMdNyF" );
     } )();

     // Añadir el evento submit al formulario
     setTimeout( () => {
          const form = document.getElementById( 'contactForm' );
          const button = document.getElementById( 'rocketButton' );

          form.addEventListener( 'submit', function ( e ) {
               e.preventDefault();

               // Cambiar estado del botón
               button.disabled = true;

               // Obtener los datos del formulario
               const templateParams = {
                    from_name: document.getElementById( 'from_name' ).value,
                    from_email: document.getElementById( 'from_email' ).value,
                    message: document.getElementById( 'message' ).value,
                    to_name: "Carolina"
               };

               // Enviar el email usando la versión 3.0
               emailjs.send(
                    'service_lnynrya',
                    'template_l5pppma',
                    templateParams,
                    'r6U0jfhcP5wqMdNyF'
               )
                    .then( function () {
                         // Éxito
                         button.classList.add( 'sent' );
                         setTimeout( () => {
                              form.reset();
                              button.disabled = false;
                              button.classList.remove( 'sent' );
                         }, 3000 );
                    }, function ( error ) {
                         // Error
                         console.error( 'Error:', error );
                         button.disabled = false;
                         alert( 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.' );
                    } );
          } );
     }, 100 );
};
