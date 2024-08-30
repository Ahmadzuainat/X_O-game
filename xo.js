let title = document.querySelector(".title");
let turn = "x";
let squares = Array(10).fill("");

function checkWinner() {
    // Winning combinations
    let winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        let [a, b, c] = winningCombinations[i];
        if (squares[a] === squares[b] && squares[b] === squares[c] && squares[a] !== "") {
            title.innerHTML = squares[a] + " wins!";
            document.getElementById("item" + a).style.backgroundColor = "#0f0";
            document.getElementById("item" + b).style.backgroundColor = "#0f0";
            document.getElementById("item" + c).style.backgroundColor = "#0f0";
            setTimeout(function() { location.reload(); }, 2000);
            return;
        }
    }

    // Check for a draw
    if (squares.every(square => square !== "")) {
        title.innerHTML = "Draw!";
        setTimeout(function() { location.reload(); }, 2000);
    }
}

function game(id) {
    let element = document.getElementById(id);
    let index = parseInt(id.replace("item", ""));
    if (element.innerHTML == "" && squares[index] == "") {
        element.innerHTML = turn;
        squares[index] = turn;

        if (turn === "x") {
            turn = "o";
            title.innerHTML = "o";
        } else {
            turn = "x";
            title.innerHTML = "x";
        }

        checkWinner();
    }
}
