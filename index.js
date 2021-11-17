const showDie = document.querySelector('.die-image');
const rollDie = document.querySelector('.btn-roll');

function createTable() {
  let table = document.getElementById("myTable");
  
  // 10 rows
  for (let i=0; i<10; i++) {
    let row = table.insertRow(i);
    row.className= "row-direction";

    // 10 columns
    for (let j=0; j<10; j++) {
      let cell = row.insertCell(j);
      cell.innerHTML = ((i*10) + j + 1); //start with 1 instead of 0
      cell.className = "item";
    }
  }
};


function makeMove() {
  // for (let i = images.length; i--;) {
  //   images[i].addEventListener('click', change);
  // }

  // random # between 1 and 6
  let rollValue = Math.floor(Math.random() * 6) + 1;
  console.log(rollValue);

  //let images = document.querySelector("die-images");

  // display die image
  showDie.style.display = "block";
  showDie.src = "./assets/images/" + rollValue + ".png";
  console.log(showDie.src);

  // based on the result of the die roll, display an image that matches
  // switch (rollValue) {
  //   case 0:
  //     makeMove("assets/images/1.png");
  //     break;
  //   case 1:
  //     makeMove("assets/images/2.png");
  //     break;
  //   case 2:
  //     makeMove("assets/images/3.png");
  //     break;
  //   case 3:
  //     makeMove("assets/images/4.png");
  //     break;
  //   case 4:
  //     makeMove("assets/images/5.png");
  //     break;
  //   case 5:
  //     makeMove("assets/images/6.png");
  //     break;
  // }
};

rollDie.addEventListener('click', makeMove);