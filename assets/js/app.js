function setZeroes() {
    const input = document.getElementById("matrix").value.trim();
    const matrix = parseMatrix(input);
    const zeroedMatrix = zeroMatrix(matrix);
    displayMatrix(zeroedMatrix);
  }
  
  function parseMatrix(input) {
    return input.split("\n").map(row => row.split(",").map(num => parseInt(num.trim())));
  }
  
  function zeroMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const rowsWithZero = new Set();
    const colsWithZero = new Set();
  
    // Find rows and columns with zeroes
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (matrix[i][j] === 0) {
          rowsWithZero.add(i);
          colsWithZero.add(j);
        }
      }
    }
  
    // Set rows to zero
    rowsWithZero.forEach(row => {
      for (let j = 0; j < cols; j++) {
        matrix[row][j] = 0;
      }
    });
  
    // Set columns to zero
    colsWithZero.forEach(col => {
      for (let i = 0; i < rows; i++) {
        matrix[i][col] = 0;
      }
    });
  
    return matrix;
  }
  
  function displayMatrix(matrix) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<strong>Zeroed Matrix:</strong><br>" + matrix.map(row => row.join(", ")).join("<br>");
  }
  