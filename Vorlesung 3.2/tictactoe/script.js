let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

function makeMove(index) {
  if (!gameOver && board[index] === '') {
    board[index] = currentPlayer;
    let cell = document.getElementsByClassName("cell")[index];
    cell.innerText = currentPlayer;

    checkWinner();
    switchPlayer();
  }
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  let cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }

  currentPlayer = 'X';
  gameOver = false;
}

function checkWinner() {
  const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 6] // diagonal
  ];

  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
      gameOver = true;
      console.log(`Player ${currentPlayer} wins!`);
      break;
    }
  }
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function handleCellClick(index) {
  makeMove(index);
}

// Buttons in der UI, um die Funktionen auszulösen
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetGame);