


function cellClicked(cellId) {
    let cell = document.getElementById(cellId)
    let playerSymbol = document.createElement("div")
    playerSymbol.innerText = "X";
    playerSymbol.classList.add("player-symbol")
    cell.append(playerSymbol)
}