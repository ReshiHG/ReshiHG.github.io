import hamburgerMenu from "./DOM/Hamburger.js";
import {digitalClock,alarm} from "./DOM/Reloj-alarma.js";
import {shortcuts,moveBall} from "./DOM/teclado.js";
import {countdown} from "./DOM/cuenta-regresiva.js";
import {scrollUp} from "./DOM/scroll-up.js";
import {darkLight} from "./DOM/darkLight.js";
import {responsiveMedia} from "./DOM/objeto_Responsive.js";
import {responsiveTester} from "./DOM/prueba_responsive.js";
import {userDeviceInfo} from "./DOM/deteccion-dispositivos.js"
import {networkStatus} from "./DOM/deteccion_red.js";
import {webCam} from "./DOM/deteccion_webcam.js";
import {ubicacion} from "./DOM/geolocalizacion.js";
import {buscar} from "./DOM/filtro_busquedas.js";
import {sortear} from "./DOM/sorteo.js";
import {slide} from "./DOM/carrusel.js";
import {scrollSpy} from "./DOM/scroll_espia.js";
import {smartVideo} from "./DOM/video_inteligente.js";
import {contactFormValidation} from "./DOM/validacion_formulario.js";
import {speechReader} from "./DOM/narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", e =>{
    hamburgerMenu(".hamburger",".contenedorMenu",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("#reloj-countdown","March 6 2022 12:07:00","¡Es hoy, es hoy!");
    scrollUp(".button-up-container","#button-up");

    responsiveMedia("#youtube","(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=wfYbgdo8e-8&list=FLtkPpQ6E3NSHYMGe-fGC6VQ&index=88">ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/wfYbgdo8e-8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia("#gmaps","(min-width: 1024px)",
    `<a href="https://g.page/geografiskhave?share">Ir al mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35151.86856506383!2d9.495141900050053!3d55.473675743797585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ca1e73acec135%3A0xaea30a1ba665f139!2sgeografisk%20have!5e0!3m2!1ses-419!2smx!4v1615306288765!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);

    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    ubicacion("ubicacion");
    buscar(".card-filter",".card");
    sortear(".player","#winner-btn");
    slide(".slider-slide",".prev",".next");
    scrollSpy();
    smartVideo();
    contactFormValidation();
})

d.addEventListener("keydown", e => {
    shortcuts(e);
    moveBall(e,".ball",".stage");
})

darkLight(".button-dark-light",".fa-moon",".fa-sun");
networkStatus();
speechReader();
