const { moveLeft, moveRight, moveUp, moveDown } = require("../movement");

describe("Test the movement functions", () => {
  describe("The move left function", () => {
    it("should move the robot to the left", () => {
      const currentPosition = { x: 5, y: 5 };

      expect(moveLeft(currentPosition)).toEqual({ x: 4, y: 5 });
    });

    it("should not cross the boundaries", () => {
      const currentPosition = { x: 0, y: 5 };

      expect(moveLeft(currentPosition)).toEqual({ x: 0, y: 5 });
    });
  });

  describe("The move right function", () => {
    it("should move the robot to the right", () => {
      const currentPosition = { x: 5, y: 5 };

      expect(moveRight(currentPosition)).toEqual({ x: 6, y: 5 });
    });

    it("should not cross the boundaries", () => {
      const currentPosition = { x: 10, y: 5 };

      expect(moveRight(currentPosition)).toEqual({ x: 10, y: 5 });
    });
  });

  describe("The move up function", () => {
    it("should move the robot up", () => {
      const currentPosition = { x: 5, y: 5 };

      expect(moveUp(currentPosition)).toEqual({ x: 5, y: 6 });
    });
    it("should not cross the boundaries", () => {
      const currentPosition = { x: 5, y: 10 };

      expect(moveUp(currentPosition)).toEqual({ x: 5, y: 10 });
    });
  });

  describe("The move down function", () => {
    it("should  move the robot down", () => {
      const currentPosition = { x: 5, y: 5 };

      expect(moveDown(currentPosition)).toEqual({ x: 5, y: 4 });
    });
    it("should not cross the boundries", () => {
      const currentPosition = { x: 5, y: 0 };

      expect(moveDown(currentPosition)).toEqual({ x: 5, y: 0 });
    });
  });
});
