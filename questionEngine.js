// This is the Presenter

var q = Quiz['q']


var resetQuiz = function() {
	var qData = Quiz.createQuestion()
	currentQ = qData
	console.log(qData['qCorrectPosition'])
	hideAlerts()
	$(".flag").attr("src","img/" + qData['qState'].toLowerCase() + ".jpg")
	$(".answer").removeClass("disabled")
	$(".answer").removeClass("btn-success")
	$(".answer").removeClass("btn-danger")				
	$(".answer").addClass("btn-info")
	$(".currentQ").text(qData['qState'] + "?")
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
			$(".answer").removeClass("btn-info")
			$(this).addClass("btn-success")
			$(".answer").addClass('disabled');
			$(".score").text("Score: " + Quiz['score'] )
			$(".qCorrect").text(currentQ['randomCorrect']).show()
			$(".nextDiv").show()
		}
		else {
			hideAlerts()
			$(".answer").removeClass("btn-info")
			$(this).addClass("btn-danger")
			$(".ans" + currentQ['qCorrectPosition']).addClass("btn-success")
			$(".answer").addClass('disabled');
			$(".qIncorrect").text(currentQ['randomIncorrect']).show()
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

var signin = function(){
	 $("form.sign-in").submit(function(e) {
    	e.preventDefault();
    	name = $('[data-id="name"]').val()
		$(".username").text(name)
		$(".welcome").hide()
		$(".game").show()
	})
}
resetQuiz()
quizEngine()
signin()