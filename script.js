const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Who developed the Python programming language?",
a: "Guido van Rossum",
b: "Dennis Ritchie",
c: "Bjarne Stroustrup",
d: "James Gosling",
correct: "a"

    },
    {
        question: "Which programming language is primarily used for Android app development?",
a: "Swift",
b: "Java",
c: "Kotlin",
d: "Both b and c",
correct: "d"

    },
    {
       question: "Which of the following is not a programming language?",
a: "Python",
b: "HTML",
c: "Java",
d: "C++",
correct: "b"


    },
    {
question: "Which language is known as the mother of all languages?",
a: "C",
b: "Assembly",
c: "Fortran",
d: "COBOL",
correct: "a"

    },
{
    question: "Which of the following languages is primarily used for statistical computing?",
a: "R",
b: "C#",
c: "Swift",
d: "PHP",
correct: "a"
},
{
    question: "Which language was developed by Microsoft?",
a: "Java",
b: "C#",
c: "Python",
d: "Ruby",
correct: "b"

},
{
    question: "Which programming language is commonly used for AI and machine learning?",
a: "Ruby",
b: "Python",
c: "C",
d: "PHP",
correct: "b"

},

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})