const pantallaCarga = document.querySelector('.pantalla-carga')
const pantallaJuego = document.querySelector('.pantalla-juego')
const pantallaInicio = document.querySelector('.pantalla-inicio')

const logo = document.querySelector('#logo-juego')

// function showWaiting() {
//     document.querySelector('#waiting').style.display = 'flex'
// }

function showPlayAgain() {
    document.querySelector('.show-again').style.display = 'flex'

}

function checkRadioYes() {
    document.getElementById('canvasGame').style.display = 'block'
    document.querySelector('.show-again').style.display = 'none'

    document.getElementById('pum').style.display = 'none'
    setTimeout(() => {
        german.start()
    }, 500);

    console.log("YES")
}
function checkRadioNo() {
    document.getElementById('canvasGame').style.display = 'none'
    document.querySelector('.show-again').style.display = 'none'
    console.log("NO")
}


function startGame() {

    let theme = new Audio('mp3/theme.mp3')
    theme.volume = .5
    theme.play()
    //Y la pantalla de carga aparece
    pantallaCarga.style.display = 'block'
    //Al clicar en start la pantalla inicio se esconde
    pantallaInicio.classList.add('notDisplayed')

    const svgMalingo = new Vivus('logo-juego', {
        duration: 350,
        animTimingFuction: Vivus.EASE,
    });

    //Con el setTimeOut se define el tiempo que tarda la pantalla juego
    setTimeout(function () {
        //Que se vea la pantalla de juego
        pantallaJuego.style.display = 'block'
        pantallaCarga.classList.add('notDisplayed')
        document.getElementById('party').style.display = 'flex'
        document.getElementById('canvasGame').style.display = 'none'
        countdown()
        hideParty()
    }, 4000)



    function hideParty() {
        setTimeout(function () {
            //Que se vea la pantalla de juego

            document.getElementById('party').style.display = 'none'
            document.getElementById('canvasGame').style.display = 'block'

        }, 5000)

    }
}

function countdown() {

    let time = 4
    let printTime = document.querySelector('#countdown')

    setInterval(() => {
        printTime.innerHTML = time--
        if (time < 0) {
            printTime.innerHTML = 'GO! GO! GO!'
        }
    }, 800);

}
