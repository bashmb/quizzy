// This is the Presenter

var q = Quiz['q']

var currentQ = []

var resetQuiz = function() {
	var qData = Quiz.createQuestion()
	currentQ = qData
	console.log(qData['qCorrectPosition'])
	hideAlerts()
	$(".answer").removeClass("disabled")
	$(".currentQ").text(qData['qState'])
	$(".ans" + qData['qCorrectPosition']).text(qData['qCorrectCity'])
	$(".ans" + qData['qOtherOrder'][0]).text(qData['qOthers'][0])
	$(".ans" + qData['qOtherOrder'][1]).text(qData['qOthers'][1])
	$(".ans" + qData['qOtherOrder'][2]).text(qData['qOthers'][2])
}

var quizEngine = function(){

	$(".answer").click(function(){

		if(Quiz.answerQuestion($(this).data('ans'), currentQ['qCorrectPosition'])){
			hideAlerts()
			// $(".answer").data('disabled', true);
			$(".answer").addClass('disabled');
			$(".score").text("Score: " + Quiz['score'] )
			$(".qCorrect").show()
			$(".nextDiv").show()
		}
		else {
			hideAlerts()
			$(".answer").addClass('disabled');
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