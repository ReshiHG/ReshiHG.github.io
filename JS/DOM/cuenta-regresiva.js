const d = document;

export function countdown (reloj,fecha,mensaje){
    const   $relojCountdown = d.querySelector(reloj),
            fechaObjetivo = new Date(fecha).getTime();

    let countdownTempo = setInterval(() => {
        let hoy = new Date().getTime(),
            msRestantes = fechaObjetivo - hoy,
            dias = Math.floor(msRestantes/(1000*60*60*24)),
            horas = Math.floor(msRestantes/(1000*60*60)-dias*24),
            minutos = Math.floor(msRestantes/(1000*60)-(dias*24*60+horas*60)),
            segundos = Math.floor(msRestantes/(1000)-(dias*24*60*60+horas*60*60+minutos*60));

        if (msRestantes < 0) {
            $relojCountdown.innerHTML = `<h3>${mensaje}</h3>`;
        }    else {
            $relojCountdown.innerHTML = `<h3>Faltan ${dias} dias, ${horas} horas, ${minutos} minutos y ${segundos} segundos.</h3>`;
        }

    },1000);
}
