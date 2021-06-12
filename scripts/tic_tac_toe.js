

let activePlayer = "X"

let count = 0;


function cellClicked(x, y) {
    let cellId = `cell-${x}-${y}`;
    let cell = document.getElementById(cellId)
    let playerSymbol = document.createElement("div")
    playerSymbol.innerText = activePlayer;
    playerSymbol.classList.add("player-symbol")
    cell.append(playerSymbol)
    let rowFirstElement = document.getElementById(`cell-${x}-${0}`)
    let rowSecondElement = document.getElementById(`cell-${x}-${1}`)
    let rowThirdElement = document.getElementById(`cell-${x}-${2}`)
    let rowFirstElementSymbol = rowFirstElement.children.length !== 0 ? rowFirstElement.children[0].innerText : "";
    let rowSecondElementSymbol = rowSecondElement.children.length !== 0 ? rowSecondElement.children[0].innerText : "";
    let rowThirdElementSymbol = rowThirdElement.children.length !== 0 ? rowThirdElement.children[0].innerText : "";
    if (((rowFirstElementSymbol === activePlayer) && (rowSecondElementSymbol === activePlayer)) && (rowThirdElementSymbol === activePlayer)) {
        alert(`${activePlayer} is won`)
    }
    count = count + 1;
    if (count === 9) {
        alert("match draw")
    }
    activePlayer = activePlayer === "X" ? "O" : "X";
}