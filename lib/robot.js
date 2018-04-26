class Robot {
	constructor() {
    this.coordinates = [0, 0];
    this.bearing = "north";
  };

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  };

  setBearing(direction) {
    if (direction === "north" || direction === "south" || direction === "east" || direction === "west") {
      this.bearing = direction;
    } else {
      throw "Invalid Robot Bearing";
    }
  };

  place(obj) {
    this.setCoordinates(obj.x, obj.y);
    this.setBearing(obj.direction);
  };

  turnRight() {
    if (this.bearing === "north") {
      this.bearing = "east";
    } else if (this.bearing === "east") {
      this.bearing = "south";
    } else if (this.bearing === "south") {
      this.bearing = "west";
    } else if (this.bearing === "west") {
      this.bearing = "north";
    }
  };

  turnLeft() {
    if (this.bearing === "north") {
      this.bearing = "west";
    } else if (this.bearing === "east") {
      this.bearing = "north";
    } else if (this.bearing === "south") {
      this.bearing = "east";
    } else if (this.bearing === "west") {
      this.bearing = "south";
    }
  };

  advance() {
    if (this.bearing === "north") {
      this.coordinates[1]++;
    } else if (this.bearing === "east") {
      this.coordinates[0]++;
    } else if (this.bearing === "south") {
      this.coordinates[1]--;
    } else if (this.bearing === "west") {
      this.coordinates[0]--;
    }
  };

  translateInstructions(instructions) {
    for(let i = 0; i < instructions.length; i++) {
      let letter = instructions[i];

      if (letter === "L") {
        this.turnLeft();
      } else if (letter === "R") {
        this.turnRight();
      } else if (letter === "A") {
        this.advance();
      }
    }
  };
};
