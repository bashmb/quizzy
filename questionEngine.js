// This is the Presenter


// Show the qText of the current Question

var q = 0

$(".currentQ").text(questions[q]['qText'])
$(".ansA").text(questions[q]['qAnswers']['a'])
$(".ansB").text(questions[q]['qAnswers']['b'])
$(".ansC").text(questions[q]['qAnswers']['c'])
$(".ansD").text(questions[q]['qAnswers']['d'])

$(".answer").click(function(){
	console.log("you clicked", $(this).data('ans') )
	if($(this).data('ans') === questions[q]['qCorrect']){
			console.log("correct")
			hideAll()
			$(".qCorrect").show()
		}
		else {
			console.log("incorrect")
			hideAll()
			$(".qIncorrect").show()
		}


})

var hideAll = function(){
			$(".instruction").hide()
			$(".qCorrect").hide()
			$(".qIncorrect").hide()
}