function checkAnswer() {
    const correctAnswer = "4"

    const userAnswer=document.querySelector('input[name="quiz"]:checked').value;

    const feedbackElement=
    document.getElementByIfunction

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent= "Correct!Well done.";
    }   else {
        feedbackElement.textContent="That's incoorect. Try again!";
    }
}

const submitButton =
document.getElementById("submit-answer");
submitButton.addEventListener('click',function(e){
    if e.checkAnswer();
}