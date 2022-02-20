const quizData = [{
    question :"What is Your Name?",
    a:"Jayant",
    b:"Rahul",
    c:"Rishi",
    d:"Sunny",
    correct : "a"
},
{
    question :"What is Your SurName?",
    a:"Tripathi",
    b:"Sharma",
    c:"Batwal",
    d:"Baba",
    correct : "c"
},
{
    question :"What is your date of year?",
    a:"1995",
    b:"1997",
    c:"1998",
    d:"2000",
    correct : "b"
},
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const sumitBtn = document.getElementById("submit");

let currentQuiz = 0 ;
let score = 0;

loadQuiz();


function loadQuiz(){
    
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
c_text.innerText = currentQuizData.c;
d_text.innerText = currentQuizData.d;

}

function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEls)=>{
        if(answerEls.checked)
        {
            answer = answerEls.id;
        }
    });
 return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEls) => {
        answerEls.checked = false;
    })
}
sumitBtn.addEventListener("click" , function hi(){
    const answer = getSelected();

    if(answer)
    {
        if(answer===quizData[currentQuiz].correct)
        {
            score++;
        }
        
        currentQuiz++;
        if(currentQuiz< quizData.length)
        {
            loadQuiz();
        }
        else{
            quiz.innerHTML=`<h2> you answerd it correct and score is ${score}/${quizData.length} </h2>
            
            <button onclick="location.reload()">Reload</button>`;
        }
    }
})
