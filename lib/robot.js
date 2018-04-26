class Robot {
	constructor(){
    this.coordinates = [0,0];
    this.bearing = "north";
  };
  setCoordinates(x,y){
    this.coordinates = [x,y];
  };
  setBearing(direction){
    switch(direction){
      case "north":
      case "south":
      case "east":
      case "west":
        this.bearing = direction;
        break;
      default:
        throw "Invalid Robot Bearing"
    }
  }
  place(obj){
    this.coordinates = [obj.x, obj.y];
    this.bearing = obj.direction;
  }
  turnRight(){
    switch(this.bearing){
      case "north":
        this.bearing = "east";
        break;
      case "south":
        this.bearing = "west";
        break;
      case "east":
        this.bearing = "south";
        break;
      case "west":
        this.bearing = "north";
        break;
      default:
        throw "Invalid Robot Bearing"
    }
  };
  turnLeft(){
    switch(this.bearing){
      case "north":
        this.bearing = "west";
        break;
      case "south":
        this.bearing = "east";
        break;
      case "east":
        this.bearing = "north";
        break;
      case "west":
        this.bearing = "south";
        break;
      default:
        throw "Invalid Robot Bearing"
    }
  };
  advance(){
    switch(this.bearing){
      case "north":
        this.coordinates[1]++;
        break;
      case "south":
        this.coordinates[1]--;
        break;
      case "east":
        this.coordinates[0]++;;
        break;
      case "west":
        this.coordinates[0]--;;
        break;
    }
  };
  translateInstructions(instructions){
        for(let i = 0; i < instructions.length; i++){
            let instr = instructions[i];
            switch(instr){
              case "L":
                  this.turnLeft();
                  break;
              case 'R':
                    this.turnRight();
                    break;
              case 'A':
                    this.advance();
                    break;
            }//endswitch
        }//endfor
     }//end translate

}
