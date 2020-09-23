let ubicacionPrincipal = window.pageYOffset; //0
let abrir = document.getElementById('menuHamburger');
let menu = document.getElementById('menu');
let cerrado = true;

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; //180
    if(ubicacionPrincipal >= desplazamientoActual){ // 200 > 180
        document.getElementsByTagName("nav")[0].style.top = "0px";
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }
    ubicacionPrincipal= desplazamientoActual; //200

})


abrir.addEventListener('click',muestraMenu);

function muestraMenu(){
    if(cerrado){
        menu.style.width = '100%';
        cerrado = false;
    } else {
        menu.style.width = '0%';
        cerrado = true;
    }
}

var numeroEnlacesMenu = document.querySelectorAll(".menuItem").length;

for (var i = 0; i < numeroEnlacesMenu; i++) {
    document.querySelectorAll(".menuItem")[i].addEventListener("click",muestraMenu);
};
