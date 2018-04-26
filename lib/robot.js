class Robot {
	//your solution here
	constructor(coordinates = [0,0], bearing = "north"){
		this.coordinates = coordinates;
		this.bearing = bearing;
	}

	setCoordinates(x, y){
		this.coordinates = [x,y];
	}

	setBearing(bearing){
		const bearings = ["north", "south", "east", "west"];
		if (bearings.includes(bearing)){
			this.bearing = bearing
		} else{
			throw("Invalid Robot Bearing");
		}
	}

	place(object){
		this.setBearing(object.direction);
		this.setCoordinates(object.x,object.y);
	}

	turnRight(){
		if (this.bearing === "north"){
			this.bearing = "east"
		} else if (this.bearing === "east"){
			this.bearing = "south"
		} else if (this.bearing ==="south"){
			this.bearing = "west"
		} else if (this.bearing === "west"){
			this.bearing = "north"
		}
	}

	turnLeft(){
		if (this.bearing === "north"){
			this.bearing = "west"
		} else if (this.bearing === "east"){
			this.bearing = "north"
		} else if (this.bearing ==="south"){
			this.bearing = "east"
		} else if (this.bearing === "west"){
			this.bearing = "south"
		}
	}

	advance(){
		if (this.bearing === "north"){
			this.coordinates[1] += 1;
		} else if (this.bearing === "east"){
			this.coordinates[0] += 1;
		} else if (this.bearing ==="south"){
			this.coordinates[1] -= 1;
		} else if (this.bearing === "west"){
			this.coordinates[0] -= 1;
		}
	}

	translateInstructions(string){
		const instructions = ["L","R", "A"];
		for(let i = 0; i < string.length; i++){
			if (string[i] === "L"){
				this.turnLeft();
				continue;
			}
			if (string[i] === "R"){
				this.turnRight();
				continue;
			}
			if (string[i] === "A"){
				this.advance(); 
				continue;
			}
		}
	}
}

