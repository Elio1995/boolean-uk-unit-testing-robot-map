const objects = [
  { x: 1, y: 2 },
  { x: 4, y: 3 },
];

const moveLeft = (currentPosition) => {
  if (currentPosition.x === 0) return currentPosition;

  const newPosition = {
    ...currentPosition,
    x: currentPosition.x - 1,
  };
  if (objectHitCheckAndPrint(newPosition, objects)) return currentPosition;
  return newPosition;
};

const moveRight = (currentPosition) => {
  if (currentPosition.x === 10) return currentPosition;

  const newPosition = {
    ...currentPosition,
    x: currentPosition.x + 1,
  };
  if (objectHitCheckAndPrint(newPosition, objects)) return currentPosition;
  return newPosition;
};

const moveUp = (currentPosition) => {
  if (currentPosition.y === 10) return currentPosition;

  const newPosition = {
    ...currentPosition,
    y: currentPosition.y + 1,
  };
  if (objectHitCheckAndPrint(newPosition, objects)) return currentPosition;
  return newPosition;
};

const moveDown = (currentPosition) => {
  if (currentPosition.y === 0) return currentPosition;

  const newPosition = {
    ...currentPosition,
    y: currentPosition.y - 1,
  };
  if (objectHitCheckAndPrint(newPosition, objects)) return currentPosition;
  return newPosition;
};

const objectHitCheckAndPrint = (newPosition, objects = []) => {
  if (
    objects.find(
      (object) => object.x === newPosition.x && object.y === newPosition.y
    )
  ) {
    console.log("Ouch");
    return true;
  } else {
    return false;
  }
};

module.exports = {
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  objectHitCheckAndPrint,
};
