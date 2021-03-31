const d = document;

export function scrollUp(buttonUp) {

    d.addEventListener("scroll", e => {
        const $buttonScrollUp = d.querySelector(buttonUp);
        let pagePosition = window.pageYOffset; //  Guarda la posicion de la pagina en Y

        // Si la pagina sube 500px aparece el botón
        if (pagePosition > 500) {
            $buttonScrollUp.style.display = "flex";
        } else {
            $buttonScrollUp.style.display = "none";
        }
    })

    //Lleva al inicio de la página
    d.addEventListener("click", e => {
        if (e.target.matches(buttonUp) || e.target.matches(`${buttonUp} *`)) {
            d.documentElement.scrollTop = 0;
        }
    })
}
