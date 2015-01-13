// This is the Model


(function () {

	window.Quiz = {
		score: 0,
		q:0
	}

	Quiz.answerQuestion = function (questionNum, answerIndex) {
		if(questionNum === answerIndex){
			Quiz['score'] += 1
			return true
		} else {
			return false
		}
	}
	Quiz.nextQuestion = function(){
		$(".nextQ").click(function(){
			if(q + 1 < questions.length){
				q++
				resetQuiz()
			} else {
				$(".jumbotron").hide()
			}
		})
	}

})()




// this is the hardcoded quiz
// it has questions, response options, and an indicator for the correct answer
// structure:  array of hashes
// sample:  [{	qNum: 1, 
				// qText: "What is 2 * 2?",
				// qAnswers:{a:1, b:2, c:3, d:4},
				// qCorrect: "d"}, ...]

var questions = [

	{	
		qNum: 1,
		qText: "How many states are in the USA?",
		qAnswers: {	a: 25,
					b: 40,
					c: 50,
					d: 65},
		qCorrect: "c"
	},
	{	
		qNum: 2,
		qText: "What is the capitol of Texas?",
		qAnswers: {	a: "Austin",
					b: "Dallas",
					c: "Houston",
					d: "San Antonio"},
		qCorrect: "a"
	},
	{	
		qNum: 3,
		qText: "When was the war of 1812?",
		qAnswers: {	a: "1936",
					b: "1812",
					c: "1776",
					d: "2032"},
		qCorrect: "b"
	}
]

var stateCapitols = [
	{"Alabama":["Montgomery", "Huntsville", "Birmingham", "Mobile"]},
	{"Alaska":["Juneau", "Fairbanks", "Anchorage", "Sitka"]},
	{"Arizona":["Phoenix", "Tucson", "Scottsdale", "Sedona"]},
	{"Arkansas":["Little Rock", "Fayetteville", "Hot Springs", "Fort Smith"]},
	{"California":["Sacremento", "Los Angeles", "San Francisco", "San Diego"]}
]
	// {"Colorado":["Denver"]},
	// {"Connecticut":["Hartford"]},
	// {"Delaware":["Dover"]},
	// {"Florida":["Tallahassee"]},
	// {"Georgia":["Atlanta"]},
	// {"Hawaii":["Honolulu"]},
	// {"Idaho":["Boise"]},
	// {"Illinois":["Springfield"]},
	// {"Indiana":["Indianapolis"]},
	// {"Iowa":["Des Moines"]},
	// {"Kansas":["Topeka"]},
	// {"Kentucky":["Frankfort"]},
	// {"Louisiana":["Baton Rouge"]},
	// {"Maine":["Augusta"]},
	// {"Maryland":["Annapolis"]},
	// {"Massachusetts":["Boston"]},
	// {"Michigan":["Lansing"]},
	// {"Minnesota":["Saint Paul"]},
	// {"Mississippi":["Jackson"]},
	// {"Missouri":["Jefferson City"]},
	// {"Montana":["Helena"]},
	// {"Nebraska":["Lincoln"]},
	// {"Nevada":["Carson City"]},
	// {"New Hampshire":["Concord"]},
	// {"New Jersey":["Trenton"]},
	// {"New Mexico":["Santa Fe"]},
	// {"New York":["Albany"]},
	// {"North Carolina":["Raleigh"]},
	// {"North Dakota":["Bismarck"]},
	// {"Ohio":["Columbus"]},
	// {"Oklahoma":["Oklahoma City"]},
	// {"Oregon":["Salem"]},
	// {"Pennsylvania":["Harrisburg"]},
	// {"Rhode Island":["Providence"]},
	// {"South Carolina,":["Columbia"]},
	// {"South Dakota":["Pierre"]},
	// {"Tennessee":["Nashville"]},
	// {"Texas":["Austin"]},
	// {"Utah":["Salt Lake City"]},
	// {"Vermont":["Montpelier"]},
	// {"Virginia":["Richmond"]},
	// {"Washington":["Olympia"]},
	// {"West Virginia":["Charleston"]},
	// {"Wisconsin":["Madison"]},
	// {"Wyoming":["Cheyenne"]}
	// ]	
