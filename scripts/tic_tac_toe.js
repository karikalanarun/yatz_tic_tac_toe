

let activePlayer = "X"

let count = 0;


function getPlayerSymbol(cellEl) {
    return cellEl.children.length !== 0 ? cellEl.children[0].innerText : "";
}

function getPlayerSymbolByCoortnate(x, y) {
    return getPlayerSymbol(document.getElementById(`cell-${x}-${y}`))
}


function cellClicked(x, y) {
    let cellId = `cell-${x}-${y}`;
    let cell = document.getElementById(cellId)
    let playerSymbol = document.createElement("div")
    playerSymbol.innerText = activePlayer;
    playerSymbol.classList.add("player-symbol")
    cell.append(playerSymbol)
    let rowFirstElementSymbol = getPlayerSymbolByCoortnate(x, 0);
    let rowSecondElementSymbol = getPlayerSymbolByCoortnate(x, 1);
    let rowThirdElementSymbol = getPlayerSymbolByCoortnate(x, 2);
    let colFirstElementSymbol = getPlayerSymbolByCoortnate(0, y)
    let colSecondElementSymbol = getPlayerSymbolByCoortnate(1, y)
    let colThirdElementSymbol = getPlayerSymbolByCoortnate(2, y)
    let diagnalFirstElementSymbol,
        diagnalSecondElementSymbol,
        diagnalThirdElementSymbol;
    if ((x + y) === 2) {
        diagnalFirstElementSymbol = getPlayerSymbolByCoortnate(2, 0)
        diagnalSecondElementSymbol = getPlayerSymbolByCoortnate(1, 1)
        diagnalThirdElementSymbol = getPlayerSymbolByCoortnate(0, 2)
    }
    let negativeDiagnalFirstSymbol, negativeDiagnalSecondSymbol, negativeDiagnalThirdSymbol;
    if (x === y) {
        negativeDiagnalFirstSymbol = getPlayerSymbolByCoortnate(0, 0)
        negativeDiagnalSecondSymbol = getPlayerSymbolByCoortnate(1, 1)
        negativeDiagnalThirdSymbol = getPlayerSymbolByCoortnate(2, 2)
    }
    if (
        (negativeDiagnalFirstSymbol === activePlayer && negativeDiagnalSecondSymbol === activePlayer && negativeDiagnalThirdSymbol === activePlayer) ||
        (diagnalFirstElementSymbol === activePlayer && diagnalSecondElementSymbol === activePlayer && diagnalThirdElementSymbol === activePlayer) ||
        (colFirstElementSymbol === activePlayer && colSecondElementSymbol === activePlayer && colThirdElementSymbol === activePlayer) ||
        (rowFirstElementSymbol === activePlayer && rowSecondElementSymbol === activePlayer && rowThirdElementSymbol === activePlayer)) {
        alert(`${activePlayer} is won`)
    }
    count = count + 1;
    if (count === 9) {
        alert("match draw")
    }
    activePlayer = activePlayer === "X" ? "O" : "X";
}