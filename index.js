"use strict";
const check1EL = document.querySelector(".check1");
const check2EL = document.querySelector(".check2");
const check3EL = document.querySelector(".check3");
const checkELLiset = [check1EL, check2EL, check3EL];
const N = 10;
const M = 10;
checkELLiset.forEach((CheckEL) => {
  for (let row = 0; row < N; row++) {
    const rowEL = document.createElement("div");
    rowEL.setAttribute("class", `row${row}`, `row`);
    rowEL.classList.add(`row`);
    for (let col = 0; col < M; col++) {
      const colEl = document.createElement("div");
      colEl.setAttribute("class", `col${col}`);
      colEl.classList.add(`col`);
      rowEL.appendChild(colEl);
    }
    CheckEL.appendChild(rowEL);
  }
});

const W = 10;
const H = 10;
const K = 3;

class Monky {
  row;
  col;
  depth;
  remainHorseMode;
  constructor(row, col, depth, remainHorseMode) {
    this.row = row;
    this.col = col;
    this.depth = depth;
    this.remainHorseMode = remainHorseMode;
  }
}

const inputMap = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
];

const visited = Array(H);
visited.forEach((el) => (el = Array(W)));
visited.forEach((el) => el.map((el) => (el = Array(K))));
for (let row = 0; row < H; row++) {
  //console.log(inputMap[row]);
  for (let col = 0; col < W; col++) {
    for (let k = 0; k < K; k++) {
      if (inputMap[row][col] === 1) {
        console.log(`row : ${row} col: ${col}`);
        visited[row][col][k][1] = true;
        console.log(visited[row][col][k][1]);
      }
    }
  }
}
console.log(visited);
