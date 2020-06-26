/*when a user clicks the start button*/
function startQuiz() {
$(".button").on("click", function(event){
renderAQuestion();
}
);
}
/*displays the question*/
function renderAQuestion() {
    let question = STORE.questions[STORE.currentQuestion]; 
    updateQuestionAndScore();

}
/*displays the options for the current question*/
function updateOptions() {

}

/*checks whether it reached the end of questions list*/
function handleQuestions() {

}

/*checks whether the chosen option is correct or not and displays respective message*/
function handleSelectOption() {

}

function restartQuiz() {

}

function handleQuizApp() {
    startQuiz();
    handleQuestions();
    handleSelectOption();
    restartQuiz();
}

$(handleQuizApp);
