const graphContainer = document.getElementById("main-graph");

function removeAllBars() {
    graphContainer.textContent = "";
}

function generateRandomBars(numberOfBars) {
    removeAllBars();
    for (let i = 0; i < numberOfBars; i++) {
        newBar = document.createElement("div");
        newBar.classList.add("bar");
        let height = Math.ceil(100 * Math.random());
        newBar.setAttribute("style", `height: ${height}%`);
        newBarCode = document.createElement("code");
        newBarCode.innerText = `height: ${height}%;`;
        newBar.appendChild(newBarCode);
        graphContainer.appendChild(newBar);
    }
}
