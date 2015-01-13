// This is the Model
// this is the hardcoded quiz
// it has questions, response options, and an indicator for the correct answer
// structure:  array of hashes
// sample:  [{	qNum: 1, 
				// qText: "What is 2 * 2?",
				// qAnswers:{a:1, b:2, c:3, d:4},
				// qCorrect: "d"}, ...]
var questions = [

	{qNum: 1,
		qText: "How many states are in the USA?",
		qAnswers: {	a: 25,
					b: 40,
					c: 50,
					d: 65},
		qCorrect: "c"
	}
]