const { printPosition } = require("../print");

describe("The Print Position", () => {
  it("this is the print position", () => {
    const currentPosition = { x: 5, y: 5 };
    const xPosition = currentPosition.x;
    const yPosition = currentPosition.y;

    expect(printPosition(currentPosition)).toEqual(
      `Robot is at {x:${xPosition}, y:${yPosition}}`
    );
  });
});
