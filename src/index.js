const { moveLeft } = require("./movement");
const { printPosition } = require("./print");

const sizeOfGrid = {
  width: 10,
  height: 10
};

function main() {
  let currentPosition = { x: 2, y: 5 };
  let positionStatement = "";

  currentPosition = moveLeft(currentPosition);
  positionStatement = printPosition(currentPosition);

  console.log(positionStatement);
}

main();
