const d = document;
let     x=0,
        y=0;

export function shortcuts(e) {
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(`ctrl: ${e.ctrlKey}`);
    // console.log(`alt: ${e.altKey}`);
    // console.log(`shift: ${e.shiftKey}`);

    if (e.altKey && e.keyCode == 65) { // alt + a
        alert("Haz lanzado un Alert");
    }
    if (e.altKey && e.keyCode == 67) { // alt + c
        confirm("Haz lanzado un Confirm");
    }
    if (e.altKey && e.keyCode == 80) { // alt + p
        prompt("Haz lanzado un Prompt");
    }

}

export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),    //Guardamos los elementos que vamos a usar: escenario y circulo
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();

    // console.log(limitsBall,limitsStage);

    // const move = (direction) => {
    // }

    switch (e.keyCode) {    // Switch para asignar un movimiento de acuerdo al codigo de las teclas de flecha
        case 37: //izquierda
            if (limitsBall.left > limitsStage.left){
                e.preventDefault();     //preventDefault evita el comportamiento por defecto de la flecha izquierda
                x--;
            }
            break;
        case 38: //arriba
            if (limitsBall.top > limitsStage.top) {
                e.preventDefault();
                y--;
            }
            break;
        case 39: //derecha
            if (limitsBall.right < limitsStage.right) {
                e.preventDefault();
                x++;
            }
            break;
        case 40: //abajo
            if (limitsBall.bottom < limitsStage.bottom) {
                e.preventDefault();
                y++;
            }
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
}
