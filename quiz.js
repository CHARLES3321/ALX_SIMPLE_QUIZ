function checkAnswer(userAnswer) {
    const correctAnswer = "4";

    const userAnswer=document.querySelector('input[name="quiz"]:checked').value;

    const feedbackElement=
    document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent= "Correct! Well done.";
    }   else {
        feedbackElement.textContent="That's incorrect. Try again!";
    }
}

const submitButton =
document.getElementById("submit-answer");
submitAnswer.addEventListener('click',function(e){
    e.checkAnswer();
}