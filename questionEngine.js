// This is the Presenter

// (function () {

// 	window.Quiz = {
// 		score: 1
// 	}

// 	Quiz.answerQuestion = function (questionNum, answerIndex) {
// 		// Maniuplate score
// 		// True or false
// 	}
// })()

var q = 0
var score = 1
var quizEngine = function(){
	hideAlerts()
	$(".currentQ").text(questions[q]['qText'])
	$(".ansA").text(questions[q]['qAnswers']['a'])
	$(".ansB").text(questions[q]['qAnswers']['b'])
	$(".ansC").text(questions[q]['qAnswers']['c'])
	$(".ansD").text(questions[q]['qAnswers']['d'])
	

	$(".answer").click(function(){
		if($(this).data('ans') === questions[q]['qCorrect']){
				hideAlerts()
				$(".score").text("Score: " + score )
				$(".qCorrect").show()
				$(".nextDiv").show()
			}
			else {
				hideAlerts()
				$(".qIncorrect").show()
			}
	})
}
	$(".nextQ").click(function(){
		if(q + 1 < questions.length){
			score ++ 
			q ++
			quizEngine()
		} else {
			$(".jumbotron").hide()
		}
	})


var hideAlerts = function(){
			$(".instruction").hide()
			$(".qCorrect").hide()
			$(".qIncorrect").hide()
			$(".nextDiv").hide()
}
quizEngine()