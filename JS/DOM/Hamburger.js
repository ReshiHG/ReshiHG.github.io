export default function hamburgerMenu(panelBtn,panel,menuLink){
    const d = document;
    // Agregamos los listener al documento en general
    d.addEventListener("click",e =>{
        //Revisamos que sea el objeto correcto el que origine el evento deseado
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("menuInactivo");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }
        if (e.target.matches(menuLink)){
            d.querySelector(panel).classList.toggle("menuInactivo");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }
    })
}
