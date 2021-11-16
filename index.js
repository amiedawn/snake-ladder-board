


// 1st class working example
// function createTable() {
//   let table = "<table>";
  
//   // 10 rows
//   for (let i=0; i<10; i++) {
//     table = table + "<tr>";

//     // 10 columns
//     for (let j=0; j<10; j++) {
//      table = table + "<td>data</td>";
//     }
//     table = table + "</tr>";
      
//   }  
//   table = table + "</table>"
//   document.getElementById("myTable").innerHTML = table;
// };

// no errors, but doesn't show anything
// function createTable() {
//   let table = document.getElementById("myTable");
  
//   // 10 rows
//   for (let i=100; i>=100; i= (i-10)) {
//     let row = document.createElement('tr');

//     // 10 columns
//     for (let j=i; j>10; j=(j-10)) {
//       let cell = row.appendChild(document.createElement('td'));
//       cell.innerHTML = j;
//       cell.className = "item";
//       }
      
//   }  
// };

//doesn't currently do anything
// function createTable() {
//   let table = document.getElementById("myTable");
  
//   // 10 rows
//   for (let i=0; i<10; i++) {
//     let row = document.createElement('tr');

//     // 10 columns
//     for (let j=i; j<10; j++) {
//       let cell = row.appendChild(document.createElement('td'));
//       cell.innerHTML = j;
//       cell.className = "item";
//       }
      
//   }  
// };

// from: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_table_insertrow

// this works for level
function createTable() {
  let table = document.getElementById("myTable");
  
  // 10 rows
  for (let i=0; i<10; i++) {
    let row = table.insertRow(i);

    // 10 columns
    for (let j=0; j<10; j++) {
      let cell = row.insertCell(j);
      cell.innerHTML =(i+1) * 10; //start with 1 instead of 0
      cell.className = "item";
    }
  }
};

// this works for all 1 label
// function createTable() {
//   let table = document.getElementById("myTable");
  
//   // 10 rows
//   for (let i=0; i<10; i++) {
//     let row = table.insertRow(i);

//     // 10 columns
//     for (let j=0; j<10; j++) {
//       let cell = row.insertCell(j);
//       cell.innerHTML = "new cell";
//       cell.className = "item";
//     }
//   }
// };
