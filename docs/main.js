//Arrays que contendrán los valores de cada jugador y casilleros

let array = [];
let X = [];
let O = [];

//Casilleros y div oculto como constantes

const box0 = document.querySelector('#box0');
const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');
const box3 = document.querySelector('#box3');
const box4 = document.querySelector('#box4');
const box5 = document.querySelector('#box5');
const box6 = document.querySelector('#box6');
const box7 = document.querySelector('#box7');
const box8 = document.querySelector('#box8');

const ocultDiv = document.querySelector('#ocult');

//Variable que determina si ya hay ganador o no

let gameOver = false;

//Esta función añade los casilleros seleccionados al array y compara 
//para ver si hay ganador, o si termina el juego

function tateti(id) {

    if (!X.includes(id) && !O.includes(id) && !gameOver) {

        if (array.length % 2 == 0) {
            document.querySelector(`#${id}`).append('X');
            X.push(id);
            check(X, 'X');

        } else {

            document.querySelector(`#${id}`).append('O');
            O.push(id);
            check(O, 'O');
        }
        array.push(id);

    } else if(!gameOver){
        alert('Casilla ocupada!')
    } else {
        alert('Juego terminado!')
    }
}

// reset de página al clickear el botón reset.

function reset() {
    window.location.reload();
};

// Cambio de colores en casilleros ganadores o en caso de empate

function changeColor(winBox0, winBox1, winBox2) {
    //casilleros verdes
    if(winBox0){
        winBox0.style.background = "rgba(84, 219, 84, 0.719)";
        winBox1.style.background = "rgba(84, 219, 84, 0.719)";
        winBox2.style.background = "rgba(84, 219, 84, 0.719)";
    }else{
    //casilleros grises (empate)
    
        document.querySelector('.container').style.background='#ccc';
    };
};

//mensaje de ganador

function msg(letter) {
    ocultDiv.append('Ganan las ' + letter);
    gameOver=true;
};

//lógica del tateti propiamente dicho

function check(arr, letter) {

    switch (true) {
        case arr.includes('box0') && arr.includes('box1') && arr.includes('box2'):
            msg(letter);
            changeColor(box0, box1, box2);
            break;

        case arr.includes('box3') && arr.includes('box4') && arr.includes('box5'):
            msg(letter);
            changeColor(box3, box4, box5);
        break;

        case arr.includes('box6') && arr.includes('box7') && arr.includes('box8'):
            msg(letter);    
            changeColor(box6, box7, box8);
        break;

        case arr.includes('box0') && arr.includes('box4') && arr.includes('box8'):
            msg(letter);    
            changeColor(box0, box4, box8);
        break;

        case arr.includes('box2') && arr.includes('box4') && arr.includes('box6'):
            msg(letter);    
            changeColor(box2, box4, box6);
        break;

        case arr.includes('box0') && arr.includes('box3') && arr.includes('box6'):
            msg(letter);
            changeColor(box0, box3, box6);
        break;

        case arr.includes('box1') && arr.includes('box4') && arr.includes('box7'):
            msg(letter);
            changeColor(box1, box4, box7);
        break;

        case arr.includes('box2') && arr.includes('box5') && arr.includes('box8'):
            msg(letter);
            changeColor(box2, box5, box8);
        break;

        default:
            if(array.length==8){
                ocultDiv.append('EMPATE!');
                changeColor();
                gameOver = true;
            };
       
    };

};
