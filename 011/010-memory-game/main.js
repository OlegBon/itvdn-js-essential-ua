/** Коментар, який починається з двох зірочок - JSDoc коментар, відображається у підказці Visual Studio */

let board = document.querySelector("#board");
let score = document.querySelector("#atemptNumOutput");
let startGameButton = document.querySelector("#startGame");

let gm = new GameManager(board, score);
gm.startGame();

board.addEventListener("click", function (e) {
    let clickedCard = e.target.connectedCard;
    if (clickedCard) {
        gm.selectCard(clickedCard);
    }
});

startGameButton.addEventListener("click", function () {
    gm.startGame();
});
