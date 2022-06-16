const unfinishedBoard = [
  [5, 3, 0, 6, 7, 9, 8, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 7],
  [6, 9, 8, 3, 4, 2, 7, 6, 5],

  [8, 5, 9, 7, 6, 1, 4, 2, 1],
  [4, 2, 6, 8, 5, 3, 7, 8, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],

  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 0, 0, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 8, 8]
];

const invalidRow = [
  [5, 3, 4, 6, 7, 9, 8, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 7],
  [6, 9, 8, 3, 4, 2, 7, 6, 5],

  [8, 5, 9, 7, 6, 1, 4, 2, 1],
  [5, 2, 6, 8, 4, 3, 7, 8, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],

  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 8, 8]
];

const invalidCol = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],

  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [5, 2, 6, 8, 4, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],

  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const invalidGrid = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 4, 5, 6, 7, 8, 9, 1],
  [3, 4, 5, 6, 7, 8, 9, 1, 2],

  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [5, 6, 7, 8, 9, 1, 2, 3, 4],
  [6, 7, 8, 9, 1, 2, 3, 4, 5],

  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [8, 9, 1, 2, 3, 4, 5, 6, 7],
  [9, 1, 2, 3, 4, 5, 6, 7, 8]
];

const validBoard = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],

  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],

  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

function review(board) {
  var res = "Valid";
  let grids = [];

  // For each row
  board.forEach(function (row, i) {
    // Validate if row is valid
    if (!validate(row)) res = "Try again!";

    // Create the column where i = j
    let col = [];
    for (let j = 0; j < board.length; j++) {
      col.push(board[j][i]);
      // Validate if such column is valid
      if (!validate(col)) res = "Try again!";
    }

    // Create grid array
    grids.push([]);
  });

  // Fill the grids array with earch gride as a row
  board.forEach(function (row, i) {
    row.forEach(function (char, c) {
      let gnum = 0;
      if (i >= 3 && i <= 5) {
        gnum = 1;
      } else if (i >= 6 && i <= 8) {
        gnum = 2;
      }
      if (c >= 3 && c <= 5) {
        gnum += 3;
      } else if (c >= 6 && c <= 8) {
        gnum += 6;
      }
      grids[gnum].push(char);
    });
  });

  // For each grid
  grids.forEach(function (grid) {
    // Verify if grid is valid
    if (!validate(grid)) res = "Try again!";
  });

  // Return validation
  return res;
}

// Method for validating if the array of numbers sent complies with being 9 numbers from 1 to 9
function validate(list, res) {
  let newlist = list.filter((chara) => chara !== 0);
  return newlist.length === [...new Set(newlist)].length;
}

console.log("NEW");
console.log("Unifinished result:");
console.log(review(unfinishedBoard));
console.log("Invalid row result:");
console.log(review(invalidRow));
console.log("Invalid col result:");
console.log(review(invalidCol));
console.log("Invalid grid result:");
console.log(review(invalidGrid));
console.log("Valid result:");
console.log(review(validBoard));
