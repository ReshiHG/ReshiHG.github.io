const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
    let clockTempo; //Creamos la variable para almacenar el setInterval, y asi poderlo manejar (desactivar) después

    d.addEventListener("click", e => {
        if (e.target.matches(btnPlay)) { //si El elemento coincide con btnPlay
            clockTempo = setInterval(() => { //Iniciamos un temporizador que se activa cada 200 ms
                let clockHour = new Date().toLocaleTimeString(); //Guardamos la Hora actual en un formato legible
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`; //Insertamos la Hora en el espacio destinado al reloj "clock"

                e.target.disabled = true; //Desactivamos la creacion del Listener para que no se cree cada que se da click
            }, 200);

        }
        if (e.target.matches(btnStop)) {
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = "";
            d.querySelector(btnPlay).disabled = false;
        }
    })
}

export function alarm(sound, btnPlay, btnStop) {
    let alarmTempo;
    const $alarm = d.createElement("audio"); // Creamos una etiqueta audio con js "<audio src="assets/alarma.mp3" controls></audio>"
    $alarm.src = sound; //agregamos la ruta del audio que viene de "sound"

    d.addEventListener("click", e => {
        if (e.target.matches(btnPlay)) {
            alarmTempo = setTimeout(() => {
                $alarm.play();
            }, 200);

            e.target.disabled = true;
        }

        if (e.target.matches(btnStop)) {
            clearTimeout(alarmTempo); //quito el setTimeout
            $alarm.pause(); //Pauso el audio
            $alarm.currentTime = 0; //Lo reseteo
            d.querySelector(btnPlay).disabled = false;
        }
    })
}
