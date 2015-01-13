// This is the Model
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