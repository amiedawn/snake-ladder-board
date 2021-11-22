const showDie = document.getElementById("die-image");
const rollDie = document.getElementById("btn-roll");

function createTable() {
  let table = document.getElementById("myTable");

  // 10 rows
  for (let i = 0; i < 10; i++) {
    let row = table.insertRow(i);
    row.className = "row-direction";

    // 10 columns
    for (let j = 0; j < 10; j++) {
      let cell = row.insertCell(j);
      cell.innerHTML = i * 10 + j + 1; //start with 1 instead of 0
      cell.className = "item";
    }
  }
};

function makeMove() {
  // random # between 1 and 6
  let rollValue = Math.floor(Math.random() * 6) + 1;
  console.log(rollValue);

  // display die image
  //showDie.style.display = "block";
  showDie.src = "./assets/images/" + rollValue + ".png";
  console.log(showDie.src);
};

document.getElementById("btn-roll").addEventListener("click", makeMove);
document.getElementById("btn-table").addEventListener("click", createTable);
