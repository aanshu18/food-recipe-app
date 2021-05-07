const quizData = [{
        q1: "What country has the most islands in the world?",
        a: "Sweden",
        b: "Italy",
        c: "Philippines",
        d: "Canada",
        correct: 'a'
    }
    /*,
        {
            q1: "What is the slang name for New York City, used by locals?",
            a: "Westros",
            b: "Etopian",
            c: "Gotham",
            d: "Valhala",
            correct: 'c'
        },
        {
            q1: "Which of the following empires had no written language?",
            a: "Incan",
            b: "Aztec",
            c: "Egyptian",
            d: "Roman",
            correct: 'a'
        },
        {
            q1: "What city do The Beatles come from?",
            a: "Paris",
            b: "Madrid",
            c: "Manchester",
            d: "Liverpool",
            correct: 'd'
        },
        {
            q1: "Which famous American pop band was originally called ‘Kara’s Flowers’?",
            a: "The Beatles",
            b: "Maroon",
            c: "Metallica",
            d: "One Direction",
            correct: 'b'
        }*/
]

let currentQindex = 0;

let quiz = document.querySelector('.quiz-container');
const questionCurrent = document.getElementById('question');
const a_option = document.getElementById("a_option");
const b_option = document.getElementById("b_option");
const c_option = document.getElementById("c_option");
const d_option = document.getElementById("d_option");

const submitAnswer = document.getElementById("submit");

let selectedOption = undefined;
let score = 0;
let allOptions;

function loadQuiz() {
    currentQuizData = quizData[currentQindex];
    questionCurrent.innerHTML = currentQuizData.q1;
    a_option.innerHTML = currentQuizData.a;
    b_option.innerHTML = currentQuizData.b;
    c_option.innerHTML = currentQuizData.c;
    d_option.innerHTML = currentQuizData.d;

}

function deselectAnswers() {
    allOptions.forEach((option) => {
        if (option.checked) {
            option.checked = false;
        }
    });
}

function getSelected() {
    allOptions = document.getElementsByName("answer");
    allOptions.forEach((option) => {
        if (option.checked) {
            selectedOption = option.id;
        }

    });
    return selectedOption;
}

function checkAnswer(selectedOption) {

    if (selectedOption === quizData[currentQindex].correct) {
        //alert('Bravo! you are correct');
        score++;
    }
}

submitAnswer.addEventListener('click', () => {
    selectedOption = getSelected();
    if (selectedOption) {
        checkAnswer(selectedOption);
        currentQindex++;
        if (currentQindex < quizData.length) {
            deselectAnswers();
            loadQuiz();
        } else {

            alert('You have finished the quiz! Thank you for playing');
            quiz.innerHTML = `<img src="thankyou.jpg" style="width:100%;" ><h2> You have scored ${score} out of ${quizData.length}
            </h2><button onClick=location.reload()>Reload Quiz</button>`;

        }
        selectedOption = undefined;
    }
});

loadQuiz();