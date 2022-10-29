const container = document.getElementById("container");


function makeRows(rows, cols) {
    /* setProperty(propertyName, value)*/
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    cell.addEventListener("mouseover", () => {
        cell.setAttribute("style", "background-color:black;");
    });
    cell.addEventListener("mouseout", () => {
        cell.setAttribute("style", "background-color:white;");
    });
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

function promptMe(){
  let newGridSize = 101;
  while (newGridSize > 100)
  {
    newGridSize = prompt("Number of squares per side for the new grid");
  }
  
  makeRows(newGridSize, newGridSize);
}



