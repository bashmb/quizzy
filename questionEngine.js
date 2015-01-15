// This is the Presenter

var q = Quiz['q']


var resetQuiz = function() {
	qData = Quiz.createQuestion()

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

		if(Quiz.answerQuestion($(this).data('ans'), qData['qCorrectPosition'])){
			hideAlerts()
			// $(".answer").data('disabled', true);
			$(".answer").removeClass("btn-info")
			$(this).addClass("btn-success")
			$(".answer").addClass('disabled');
			$(".score").text( Quiz['score'] )
			$(".qCorrect").text(qData['randomCorrect']).show()
			$(".nextDiv").show()
		}
		else {
			hideAlerts()
			$(".answer").removeClass("btn-info")
			$(this).addClass("btn-danger")
			$(".ans" + qData['qCorrectPosition']).addClass("btn-success")
			$(".answer").addClass('disabled');
			$(".qIncorrect").text(qData['randomIncorrect']).show()
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
		$(".highScores").hide()
		$(".game").show()
	})
}



$("#hiScores").click(function(){
	$(".welcome").hide()
	$(".game").hide()
	$(".highScores").show()
	Quiz.endOfQuiz()
	$(".hi1").text(scores).sort()


})

resetQuiz()
quizEngine()
signin()