const d = document;

export function sortear(selector,btn){
    const getWinner = (selector) => {
        const   $players = d.querySelectorAll(selector),
                numAleatorio = Math.floor(Math.random()*$players.length),
                winner = $players[numAleatorio];
        return `El ganador es: ${winner.textContent}`;
    }

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            let result = getWinner(selector);
            alert(result);
        }
    })
}
