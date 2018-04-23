//data controller
const ItemCtrl = (function(){

	//call sheet constructor function
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

	return {
		makeCallSheet: function(title,crewCall){
			let callSheet = new CallSheet(title,crewCall);
			return callSheet;
		},
		makeCrew(name,department,position,callTime){
			let crew = new Crew(name,department, position, callTime);
			return crew;
		},
		makeBoss(name,department,position,callTime){
			let boss = new Boss(name,department,position, callTime);
			return boss;
		}
	}

})();


const UICtrl = (function(){
	function generateCallSheet(callTime){
		let div = document.createElement("div");
		let body = document.querySelector("body");
		let ul = document.createElement("ul");
		body.appendChild(div);
		let header = document.createElement("header");
		let h1 = document.createElement("h1");
		h1.textContent = callTime;
		div.appendChild(h1);
		div.appendChild(ul);

	}

	function addCrew(person){
		let ul = document.querySelector("ul");
		let li = document.createElement("li");
		li.textContent = `${person.name} ${person.callTime}`;
		ul.appendChild(li);
	}

	return {
		makeCall: function(callTime){
			generateCallSheet(callTime);
		},
		makeCrew: function(person){
			addCrew(person);
		}
	}

})();


const App = (function(ItemCtrl, UICtrl){
	let callSheet = ItemCtrl.makeCallSheet("One Dollar", "7am");
	UICtrl.makeCall(callSheet.crewCall);
	let al = ItemCtrl.makeCrew("allan barch", "Electric", "set lighting", "6:30am");
	UICtrl.makeCrew(al);
	console.log(callSheet);




})(ItemCtrl, UICtrl);








