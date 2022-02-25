console.log("Welcome to Tic Tac Toe");

let turn = "X"
let gameOver = false;

const changeTurn = () => {

    return turn === "X" ? "O" : "X";

}

const checkWin = () => {

    let boxTexts = document.getElementsByClassName('boxText');

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach(e => {
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) && (boxTexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerHTML = boxTexts[e[0]].innerText + " wins";
            gameOver = true;
            
            //Code for using alert when one player wins
            // window.alert(boxTexts[e[0]].innerText+" wins");
            // resetGame();

        }
    })

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();

            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })

})



let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    let boxTexts = document.getElementsByClassName('boxText');
    Array.from(boxTexts).forEach(element => {
        element.innerText = '';
    })
    turn = 'X';
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

})

//******Function for invoking alert functionality on game result and reset the game upon confirming the alert//
// const resetGame = () => {
//     let boxTexts = document.getElementsByClassName('boxText');
//     Array.from(boxTexts).forEach(element => {
//         element.innerText = '';
//     })
//     turn = 'X';
//     gameOver = false;
//     document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
// }