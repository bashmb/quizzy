// This is the Model


(function () {

	window.Quiz = {
		score: 0,
		q:0
	}

	Quiz.answerQuestion = function (questionNum, answerIndex) {
		if(questionNum === answerIndex){
			Quiz['score'] += 1
			// Quiz['q'] +=1
			// var progVal = (Quiz.q + 1)/10
			// $('.progress').css('width', progVal+'%').attr('aria-valuenow', Quiz.q)
			// // $(".progress").attr("style","width: "+(Quiz.q/10) + "%")			
			return true
		} else {
			return false

		}
	}

	Quiz.endOfQuiz = function(){
		
		localStorage.setItem(name, Quiz['score'])
		scores =[]
		for (var key in localStorage){
   			scores.push([key, localStorage.getItem(key)])
		}



		console.log(localStorage)
	}	

	Quiz.nextQuestion = function(){
		$(".nextQ").click(function(){
			if(q + 1 < 2){
				q++
				resetQuiz()
			} else {
				$(".jumbotron").hide()
				$(".fScore").text(Quiz.score + " out of 10")
				$(".finalScore").show()
				Quiz.endOfQuiz()
			}
		})
	}

	Quiz.createQuestion = function(){
		var random = Math.floor(Math.random()*stateCapitols.length)

		var newQ = {
			qNum:1,
			qState: stateCapitols[random][0],
			qCorrectPosition: Math.floor(Math.random()*3),
			qCorrectCity: stateCapitols[random][1],
			qOthers: [stateCapitols[random][2],stateCapitols[random][3],stateCapitols[random][4]],
			qOtherOrder: [2,3,4],
			randomCorrect: correctResponses[Math.floor(Math.random()*correctResponses.length)],
			randomIncorrect: incorrectResponses[Math.floor(Math.random()*incorrectResponses.length)]
		}
		 // newQ['qOtherOrder'] = [1,2,3]
		if(newQ['qCorrectPosition'] === 0){
				newQ['qOtherOrder'] = [1,2,3]
			} else if(newQ['qCorrectPosition'] === 1) {
				newQ['qOtherOrder'] = [0,2,3]
			} else if(newQ['qCorrectPosition'] === 2){
				newQ['qOtherOrder'] = [0,1,3]
			} else if(newQ['qCorrectPosition'] === 3){
				newQ['qOtherOrder'] = [0,1,2]
			}
				
		return newQ
	}

})()




// this is the hardcoded quiz
// it has questions, response options, and an indicator for the correct answer
// structure:  array of hashes
// sample:  [{	qNum: 1, 
				// qText: "What is 2 * 2?",
				// qAnswers:{a:1, b:2, c:3, d:4},
				// qCorrect: "d"}, ...]

var correctResponses = [
	"cool",
	"nice",
	"sweet",
	"word",
	"woah",
	"fa sho"
	]

var incorrectResponses = [
	"do you even lift, bro?",
	"huh",
	"why'd you get it wrong, bro?",
	"nah dawg",
	"yeah.  no.",
	"i can't even"
	]


var stateCapitols = [
	["Alabama","Montgomery", "Huntsville", "Birmingham", "Mobile"],
	["Alaska","Juneau", "Fairbanks", "Anchorage", "Sitka"],
	["Arizona","Phoenix", "Tucson", "Scottsdale", "Sedona"],
	["Arkansas","Little Rock", "Fayetteville", "Hot Springs", "Fort Smith"],
	["California","Sacremento", "Los Angeles", "San Francisco", "San Diego"],
	["Colorado","Denver", "Boulder", "Aurora", "Aspen"],
	["Connecticut","Hartford", "New Haven", "Stamford", "Greenwich"],
	["Delaware","Dover", "Newark", "Lewes","Wilmington"],
	["Florida","Tallahassee","Miami","Orlando","Tampa"],
	["Georgia","Atlanta","Savannah", "Augusta","Marietta"],
	["Hawaii","Honolulu","Kailua","Haleiwa","Kaneohe"],
	["Idaho","Boise","Idaho Falls","Pocatello","Coeur d'Alene"],
	["Illinois","Springfield","Chicago","Peoria","Champaign"],
	["Indiana","Indianapolis","Fort Wayne","Bloomington","South Bend"],
	["Iowa","Des Moines", "Cedar Rapids","Ames","Dubuque"],
	["Kansas","Topeka","Wichita","Kansas City","Overland Park"],
	["Kentucky","Frankfort", "Louisville","Lexington","Elizabethtown"],
	["Louisiana","Baton Rouge", "New Orleans", "Lafayette", "Shreveport"],
	["Maine","Augusta", "Portland", "Bangor", "Ogunquit"],
	["Maryland","Annapolis", "Baltimore", "Frederick", "Ocean City"],
	["Massachusetts","Boston", "Cambridge", "Salem", "Worcester"],
	["Michigan","Lansing", "Detroit", "Grand Rapids", "Flint"],
	["Minnesota","Saint Paul", "Minneapolis", "Duluth", "Rochester"],
	["Mississippi","Jackson", "Biloxi", "Gulfport", "Hattiesburg"],
	["Missouri","Jefferson City", "Springfield","St. Louis", "Kansas City"],
	["Montana","Helena", "Missoula", "Billings", "Bozeman"],
	["Nebraska","Lincoln", "Omaha", "Kearney", "Grand Island"]
]
	// ["Nevada","Carson City"],
	// ["New Hampshire","Concord"],
	// ["New Jersey","Trenton"],
	// ["New Mexico","Santa Fe"],
	// ["New York","Albany"],
	// ["North Carolina","Raleigh"],
	// ["North Dakota","Bismarck"],
	// ["Ohio","Columbus"],
	// ["Oklahoma","Oklahoma City"],
	// ["Oregon","Salem"],
	// ["Pennsylvania","Harrisburg"],
	// ["Rhode Island","Providence"],
	// ["South Carolina,","Columbia"],
	// ["South Dakota","Pierre"],
	// ["Tennessee","Nashville"],
	// ["Texas","Austin"],
	// ["Utah","Salt Lake City"],
	// ["Vermont","Montpelier"],
	// ["Virginia","Richmond"],
	// ["Washington","Olympia"],
	// ["West Virginia","Charleston"],
	// ["Wisconsin","Madison"],
	// ["Wyoming","Cheyenne"]
	// ]	
