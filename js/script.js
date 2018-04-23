function CallSheet(title, crewCall){
		this.title = title;
		this.crewCall = crewCall;
		this.crew = [];
	}

	CallSheet.prototype.addCrew = function(person){
		this.crew.push(person);
	}

	CallSheet.prototype.changeCrewCall = function(time){
		this.crewCall = time;
	}

	CallSheet.prototype.changeTitle = function(newTitle){
		this.title = newTitle;
	}

	function Crew(name,department,position, callTime){
		this.name = name;
		this.department = department;
		this.position = position;
		this.callTime = callTime;
	}

	Crew.prototype.sickDay = function(){
		this.callTime = "Sick Day";
	}

	function Boss(name,department,position,callTime){
		Crew.call(this, name, department, position, callTime);
	}

	Boss.prototype = Object.create(Crew.prototype);
	Boss.prototype.constructor = Boss;

	Boss.prototype.fire = function(person){
		person.callTime = "FIRED!";
	}