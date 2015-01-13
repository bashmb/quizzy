// This is the Presenter

var q = Quiz['q']

var resetQuiz = function() {

	hideAlerts()
	$(".answer").removeClass("disabled")
	$(".currentQ").text(questions[q]['qText'])
	$(".ansA").text(questions[q]['qAnswers']['a'])
	$(".ansB").text(questions[q]['qAnswers']['b'])
	$(".ansC").text(questions[q]['qAnswers']['c'])
	$(".ansD").text(questions[q]['qAnswers']['d'])
}

var quizEngine = function(){

	$(".answer").click(function(){
		// check if disabled

		if(Quiz.answerQuestion($(this).data('ans'), questions[q]['qCorrect'])){
			hideAlerts()
			// $(".answer").data('disabled', true);
			$(".answer").addClass('disabled');
			$(".score").text("Score: " + Quiz['score'] )
			$(".qCorrect").show()
			$(".nextDiv").show()
		}
		else {
			hideAlerts()
			$(".qIncorrect").show()
			$(".nextDiv").show()
		}
	})
}

Quiz.nextQuestion()
var hideAlerts = function(){
			$(".instruction").hide()
			$(".qCorrect").hide()
			$(".qIncorrect").hide()
			$(".nextDiv").hide()
}
resetQuiz()
quizEngine()