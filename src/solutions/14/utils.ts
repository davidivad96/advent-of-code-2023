export const moveUp = (input: string[][]) => {
  const nrows = input.length;
  const ncols = input[0].length;
  for (let j = 0; j < ncols; j++) {
    for (let i = nrows - 1; i >= 0; i--) {
      if (input[i][j] === "O") {
        let validPosition = -1;
        for (let k = i - 1; k >= 0; k--) {
          if (input[k][j] === "#") {
            break;
          }
          if (input[k][j] === ".") {
            validPosition = k;
          }
        }
        if (validPosition > -1) {
          input[validPosition][j] = "O";
          input[i][j] = ".";
        }
      }
    }
  }
};

export const moveLeft = (input: string[][]) => {
  const nrows = input.length;
  const ncols = input[0].length;
  for (let i = 0; i < nrows; i++) {
    for (let j = ncols - 1; j >= 0; j--) {
      if (input[i][j] === "O") {
        let validPosition = -1;
        for (let k = j - 1; k >= 0; k--) {
          if (input[i][k] === "#") {
            break;
          }
          if (input[i][k] === ".") {
            validPosition = k;
          }
        }
        if (validPosition > -1) {
          input[i][validPosition] = "O";
          input[i][j] = ".";
        }
      }
    }
  }
};

export const moveDown = (input: string[][]) => {
  const nrows = input.length;
  const ncols = input[0].length;
  for (let j = 0; j < ncols; j++) {
    for (let i = 0; i < nrows; i++) {
      if (input[i][j] === "O") {
        let validPosition = -1;
        for (let k = i + 1; k < nrows; k++) {
          if (input[k][j] === "#") {
            break;
          }
          if (input[k][j] === ".") {
            validPosition = k;
          }
        }
        if (validPosition > -1) {
          input[validPosition][j] = "O";
          input[i][j] = ".";
        }
      }
    }
  }
};

export const moveRight = (input: string[][]) => {
  const nrows = input.length;
  const ncols = input[0].length;
  for (let i = 0; i < nrows; i++) {
    for (let j = 0; j < ncols; j++) {
      if (input[i][j] === "O") {
        let validPosition = -1;
        for (let k = j + 1; k < ncols; k++) {
          if (input[i][k] === "#") {
            break;
          }
          if (input[i][k] === ".") {
            validPosition = k;
          }
        }
        if (validPosition > -1) {
          input[i][validPosition] = "O";
          input[i][j] = ".";
        }
      }
    }
  }
};
