const STORE = [
    {
          question: "What is the smallest planet in the Solar System?",
          options: ["Venus", "Jupiter", "Mercury", "Uranus"],
          answer: "Mercury"
        },
        //2
        {
          question: "What is the largest planet in the Solar System?",
          options: ["Jupiter", "Mars", "Pluto", "Venus"],
          answer: "Jupiter"
        },
        //3
        {
          question: "What is the hottest planet in the Solar System?",
          options: ["Uranus", "Neptune", "Earth", "Venus"],
          answer: "Venus"
        },
        //4
        {
          question: "What planet in the solar system is farthest from the Sun?", 
          options: ["Neptune", "Earth", "Mercury", "Saturn"],
          answer: "Neptune"
        },
        //5
        {
          question: "What is the second smallest planet in the solar system?",
          options: ["Mercury", "Mars", "Jupiter", "Pluto"],
          answer: "Mars"
        }
      ];
      let score = 0;
      let questionNumber = 0;
  
/*displays each question*/
function renderAQuestion() {
    if (questionNumber < STORE.length) {
        return questionHtml(questionNumber);
      } else {
        $('.questionBox').hide();
        finalScore();
        $('.questionNumber').text(5);
      }
    }
function updateScore() {
    score++;
    $('.score').text(score);
}
      
function updateQuestionNumber() {
    questionNumber++;
    $('.questionNumber').text(questionNumber + 1);
}
function resetStats() {
    score = 0;
    questionNumber = 0;
    $('.score').text(0);
    $('.questionNumber').text(0);
  }
// /*when a user clicks the start button*/
function startQuiz() {
    $('.section1').hide();
    $('.altBox').hide();
    $('.header1').hide();
    $('.planetBox').on('click', '.startButton', function(event) {
      $('.startQuiz').hide(); 
      $('.header1').show();
      $('.section1').show();
      $('.questionNumber').text(1); 
      $('.questionBox').show(); 
      $('.questionBox').prepend(renderAQuestion());
    });
}
function submitAnswer() {
    $('.planetBox').on('submit', function (event) {
        event.preventDefault();
        $('.altBox').hide();
        $('.response').show();
        let selectedAnswer = $('input:checked');
        let answer = selectedAnswer.val();
        let correct = STORE[questionNumber].answer;
            if (answer === correct) {
            correctAnswer();
            } else {
            wrongAnswer();
        }
        });
  }
function questionHtml(questionIndex) {
    let formMaker = $(`<form>
      <fieldset>
        <legend class="questionText">${STORE[questionIndex].question}</legend>
      </fieldset>
    </form>`)
  
    let fieldSelector = $(formMaker).find('fieldset');
  
    STORE[questionIndex].options.forEach(function (answerValue, answerIndex) {
      $(`<label class="sizeMe" for="${answerIndex}">
          <input class="radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
          <span>${answerValue}</span>
        </label>
        `).appendTo(fieldSelector);
    });
    $(`<button type="submit" class="submitButton button">Submit</button>`).appendTo(fieldSelector);
    return formMaker;
  }
function correctAnswer() {
    $('.response').html(
      `<h3>That is correct!</h3>
      <img src="images/happy-face.png" alt="happy face emoji" class="images" width="200px">
        <p class="sizeMe">You are smart!</p>
        <button type="button" class="nextButton button">Next</button>`
    );
    updateScore();
  }
function wrongAnswer() {
    $('.response').html(
      `<h3>That's the wrong answer...</h3>
      <img src="images/thinking.png" alt="thinking face emoji" class="images" width="200px">
      <p class="sizeMe bottom">The correct answer is:</p>
      <p class="sizeMe bottom">${STORE[questionNumber].answer}</p>
      <button type="button" class="nextButton button">Next</button>`
    );
  }
function nextQuestion() {
    $('.planetBox').on('click', '.nextButton', function (event) {
      $('.altBox').hide();
      $('.questionBox').show();
      updateQuestionNumber();
      $('.questionBox form').replaceWith(renderAQuestion());
    });
  }
function finalScore() {
    $('.final').show();
  
    const awesome = [
      'Congratulations!',
      '.images/greatJob.jpg',
      'I am proud of you!'
    ];
  
    const good = [
      'Good, not great.',
      '.images/goodJob.jpg',
      'Keep up the good work!'
    ];
  
    const bad = [
      'Oh no!',
      '.images/imSorry.jpg',
      'Try again.'
    ];
  
    if (score >= 4) {
      array = awesome;
    } else if (score < 4 && score >= 2) {
      array = good;
    } else {
      array = bad;
    }
    return $('.final').html(
      `<h3>${array[0]}</h3>
       <img src="${array[1]}" alt="emoji" class="images">
          <h3 class="scoreAns bottom">Your score is ${score} / 5</h3>
          <p class="sizeMe bottom">${array[2]}</p>
          <button type="submit" class="restartButton button">Restart</button>`
    );
  }
function restartQuiz() {
    $('.planetBox').on('click', '.restartButton', function (event) {
      event.preventDefault();
      resetStats();
      $('.section1').hide();
      $('.questionBox').empty();
      $('.altBox').hide();
      $('.startQuiz').show();
      $('.header1').hide();
    });
}

function makeQuiz() {
    startQuiz();
    renderAQuestion();
    submitAnswer();
    nextQuestion();
    restartQuiz();
  }
  
  $(makeQuiz);