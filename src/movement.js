const moveLeft = (currentPosition) => {
  if (currentPosition.x === 0) return currentPosition;

  const newPosition = {
    ...currentPosition,
    x: currentPosition.x - 1,
  };

  return newPosition;
};

const moveRight = (currentPosition) => {
  if (currentPosition.x === 10) return currentPosition;

  const newPosition = {
    ...currentPosition,
    x: currentPosition.x + 1,
  };

  return newPosition;
};

const moveUp = (currentPosition) => {
  if (currentPosition.y === 10) return currentPosition;

  const newPosition = {
    ...currentPosition,
    y: currentPosition.y + 1,
  };

  return newPosition;
};

const moveDown = (currentPosition) => {
  if (currentPosition.y === 0) return currentPosition;

  const newPosition = {
    ...currentPosition,
    y: currentPosition.y - 1,
  };

  return newPosition;
};

module.exports = {
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
};
