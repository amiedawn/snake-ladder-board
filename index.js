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
